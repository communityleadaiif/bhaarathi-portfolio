'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  LogOut,
  Mail,
  Briefcase,
  TrendingUp,
  BookOpen,
  User,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Edit3,
  Plus,
  Download,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Home
} from 'lucide-react';
import {
  Enquiry,
  PortfolioItem,
  ImpactMetric,
  Article,
  ExecutiveProfile,
  PortfolioCategory
} from '@/types';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Active admin tab
  const [activeTab, setActiveTab] = useState<
    'enquiries' | 'portfolio' | 'metrics' | 'articles' | 'profile'
  >('enquiries');

  // Loaded store data
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [metrics, setMetrics] = useState<ImpactMetric[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [profile, setProfile] = useState<ExecutiveProfile | null>(null);

  const [loadingData, setLoadingLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>('');

  // Editing state for portfolio
  const [editingPortfolioItem, setEditingPortfolioItem] = useState<PortfolioItem | null>(null);
  // Editing state for article
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  // Check current session on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        loadAllData();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPasswordInput('');
        loadAllData();
      } else {
        setLoginError(data.error || 'Authentication rejected');
      }
    } catch {
      setLoginError('Network failure contacting authentication gate');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
  };

  const loadAllData = async () => {
    setLoadingLoading(true);
    try {
      // Load store data
      const resData = await fetch('/api/admin/data');
      if (resData.ok) {
        const d = await resData.json();
        setPortfolio(d.portfolio || []);
        setMetrics(d.metrics || []);
        setArticles(d.articles || []);
        setProfile(d.profile || null);
        setEnquiries(d.enquiries || []);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoadingLoading(false);
    }
  };

  // Enquiry status change
  const handleEnquiryStatus = async (id: string, status: Enquiry['status']) => {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        );
      }
    } catch (err) {
      alert('Failed to update enquiry status');
    }
  };

  // Enquiry delete
  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm('Are you certain you want to permanently delete this engagement record?')) return;
    try {
      const res = await fetch(`/api/enquiries?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch (err) {
      alert('Failed to delete enquiry');
    }
  };

  // Export enquiries to CSV
  const exportEnquiriesCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiries to export');
      return;
    }
    const headers = ['ID,Name,Organization,Designation,Email,Phone,Category,Timeline,Budget,Status,Date,Description'];
    const rows = enquiries.map((e) =>
      [
        e.id,
        `"${e.name.replace(/"/g, '""')}"`,
        `"${e.organization.replace(/"/g, '""')}"`,
        `"${e.designation.replace(/"/g, '""')}"`,
        `"${e.email}"`,
        `"${e.phone}"`,
        `"${e.category}"`,
        `"${e.timeline}"`,
        `"${e.budget || ''}"`,
        `"${e.status}"`,
        `"${e.createdAt}"`,
        `"${e.description.replace(/"/g, '""')}"`
      ].join(',')
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `bhaarathi-enquiries-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Save Portfolio item
  const handleSavePortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPortfolioItem) return;

    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'save_portfolio',
          payload: editingPortfolioItem
        })
      });

      if (res.ok) {
        setSaveStatus('Portfolio record saved successfully');
        loadAllData();
        setEditingPortfolioItem(null);
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch (err) {
      alert('Failed to save portfolio item');
    }
  };

  // Delete Portfolio item
  const handleDeletePortfolio = async (id: string) => {
    if (!confirm('Are you sure you want to delete this portfolio item?')) return;
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete_portfolio',
          payload: { id }
        })
      });
      if (res.ok) {
        loadAllData();
      }
    } catch (err) {
      alert('Failed to delete portfolio item');
    }
  };

  // Save Metrics
  const handleSaveMetrics = async () => {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_metrics',
          payload: metrics
        })
      });
      if (res.ok) {
        setSaveStatus('Impact metrics updated across the platform');
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch {
      alert('Failed to save metrics');
    }
  };

  // Save Article
  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'save_article',
          payload: editingArticle
        })
      });
      if (res.ok) {
        setSaveStatus('Article published/saved');
        loadAllData();
        setEditingArticle(null);
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch {
      alert('Failed to save article');
    }
  };

  // Save Profile
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_profile',
          payload: profile
        })
      });
      if (res.ok) {
        setSaveStatus('Executive profile settings saved');
        setTimeout(() => setSaveStatus(''), 3000);
      }
    } catch {
      alert('Failed to save profile');
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0A0F1D] flex items-center justify-center p-6 text-ivory">
        <div className="flex items-center space-x-3 text-gold">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="font-mono text-sm">Verifying executive authorization...</span>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0F1D] flex items-center justify-center p-4 sm:p-6 text-ivory relative">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/30 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto font-serif text-xl font-bold">
              BI
            </div>
            <h1 className="font-serif text-2xl font-bold text-ivory">
              Executive Admin Desk
            </h1>
            <p className="text-xs text-ivory/60">
              Prof. Bhaarathi Ilango &bull; Private Command Console
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-bold text-ivory uppercase tracking-wider block text-[11px]">
                Executive Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter executive access key"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full p-3 bg-[#0A0F1D] border border-gold/30 rounded-xl text-ivory placeholder-ivory/30 outline-none focus:border-gold transition font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition disabled:opacity-50"
            >
              {loginLoading ? 'Authenticating...' : 'Unlock Executive Console'}
            </button>
          </form>

          <div className="pt-4 border-t border-gold/15 text-center">
            <Link
              href="/"
              className="text-xs text-ivory/60 hover:text-gold flex items-center justify-center space-x-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Public Executive Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#0A0F1D] text-ivory">
      {/* Admin Header */}
      <header className="bg-[#101827] border-b border-gold/20 py-4 px-4 sm:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center font-serif font-bold text-gold">
              BI
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif font-bold text-base text-ivory">
                  Executive Command Console
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  LIVE SESSION
                </span>
              </div>
              <span className="text-[10px] text-ivory/60 font-mono">
                Prof. Bhaarathi Ilango &bull; Private Content Management System
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              target="_blank"
              className="p-2 sm:px-3 rounded-xl bg-[#171C25] hover:bg-[#232A37] border border-ivory/10 text-xs font-semibold text-ivory flex items-center space-x-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">View Live Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="p-2 sm:px-3 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        {/* Save Status Notification */}
        {saveStatus && (
          <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-gold/15 scrollbar-none">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
              activeTab === 'enquiries'
                ? 'bg-gold text-[#0A0F1D] font-bold shadow-gold'
                : 'bg-[#171C25] text-ivory/70 hover:text-ivory'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Engagement Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
              activeTab === 'portfolio'
                ? 'bg-gold text-[#0A0F1D] font-bold shadow-gold'
                : 'bg-[#171C25] text-ivory/70 hover:text-ivory'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio &amp; Engagements ({portfolio.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
              activeTab === 'metrics'
                ? 'bg-gold text-[#0A0F1D] font-bold shadow-gold'
                : 'bg-[#171C25] text-ivory/70 hover:text-ivory'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Impact Metrics ({metrics.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
              activeTab === 'articles'
                ? 'bg-gold text-[#0A0F1D] font-bold shadow-gold'
                : 'bg-[#171C25] text-ivory/70 hover:text-ivory'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Thought Leadership ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
              activeTab === 'profile'
                ? 'bg-gold text-[#0A0F1D] font-bold shadow-gold'
                : 'bg-[#171C25] text-ivory/70 hover:text-ivory'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Executive Profile &amp; Bio</span>
          </button>
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Strategic Engagement Inquiries
                </h2>
                <p className="text-xs text-ivory/60">
                  Securely stored incoming submissions from consulting partners, institutions, and founders.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={exportEnquiriesCSV}
                  className="px-4 py-2 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/30 text-gold text-xs font-semibold flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to CSV</span>
                </button>
                <button
                  onClick={loadAllData}
                  className="p-2 rounded-xl bg-[#171C25] border border-ivory/10 text-ivory/70 hover:text-ivory"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {enquiries.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#171C25] border border-gold/20 space-y-2">
                <Mail className="w-8 h-8 text-gold mx-auto" />
                <h4 className="font-serif text-lg font-bold text-ivory">No inquiries currently received</h4>
                <p className="text-xs text-ivory/60">Submitted proposals from the Strategic Engagement Desk will securely appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-6 rounded-2xl bg-[#171C25] border border-gold/20 hover:border-gold/40 transition space-y-4"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-serif text-lg font-bold text-ivory">
                            {enq.name}
                          </h3>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-mono font-semibold">
                            {enq.category}
                          </span>
                        </div>
                        <div className="text-xs text-ivory/70">
                          {enq.designation && `${enq.designation}, `}
                          <strong className="text-ivory">{enq.organization || 'Independent'}</strong>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <select
                          value={enq.status}
                          onChange={(e) =>
                            handleEnquiryStatus(enq.id, e.target.value as Enquiry['status'])
                          }
                          className="px-3 py-1.5 rounded-lg bg-[#101827] border border-gold/30 text-xs text-ivory font-mono"
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="scheduled">Scheduled</option>
                          <option value="archived">Archived</option>
                        </select>

                        <button
                          onClick={() => handleDeleteEnquiry(enq.id)}
                          className="p-1.5 rounded-lg bg-rose-950/30 text-rose-300 hover:bg-rose-900/50"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101827] border border-ivory/10 text-xs text-ivory/80 whitespace-pre-line leading-relaxed">
                      {enq.description}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-ivory/60 pt-2 border-t border-ivory/10 font-mono">
                      <div>
                        <span className="block text-gold text-[10px]">EMAIL</span>
                        <a href={`mailto:${enq.email}`} className="text-ivory hover:underline truncate block">
                          {enq.email}
                        </a>
                      </div>
                      <div>
                        <span className="block text-gold text-[10px]">PHONE</span>
                        <span>{enq.phone || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="block text-gold text-[10px]">TIMELINE</span>
                        <span>{enq.timeline}</span>
                      </div>
                      <div>
                        <span className="block text-gold text-[10px]">BUDGET</span>
                        <span>{enq.budget || 'Open / Discussion'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Portfolio Projects &amp; Status Management
                </h2>
                <p className="text-xs text-ivory/60">
                  Manage categories A through G, status badges, deliverables, and exploratory disclosures.
                </p>
              </div>

              <button
                onClick={() =>
                  setEditingPortfolioItem({
                    id: `port-${Date.now()}`,
                    category: 'A',
                    categoryLabel: 'Venture Leadership',
                    organisation: '',
                    role: '',
                    engagementStatus: 'Active Venture',
                    statusBadgeVariant: 'confirmed',
                    overview: '',
                    challenge: '',
                    strategicContribution: '',
                    deliverables: [''],
                    measurableOutcomes: '',
                    link: '',
                    linkLabel: '',
                    isExploratory: false
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-gold"
              >
                <Plus className="w-4 h-4" />
                <span>Add Engagement</span>
              </button>
            </div>

            {/* Editing Form Modal */}
            {editingPortfolioItem && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
                <form
                  onSubmit={handleSavePortfolio}
                  className="w-full max-w-3xl bg-[#101827] border border-gold/40 rounded-3xl p-6 sm:p-8 space-y-4 text-xs my-8 max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-center border-b border-gold/20 pb-3">
                    <h3 className="font-serif text-xl font-bold text-ivory">
                      {editingPortfolioItem.organisation ? 'Edit Engagement' : 'New Strategic Engagement'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setEditingPortfolioItem(null)}
                      className="p-1 rounded bg-[#171C25] text-ivory"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-ivory block mb-1">Organisation Name *</label>
                      <input
                        type="text"
                        required
                        value={editingPortfolioItem.organisation}
                        onChange={(e) =>
                          setEditingPortfolioItem({ ...editingPortfolioItem, organisation: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-ivory block mb-1">Role / Capacity *</label>
                      <input
                        type="text"
                        required
                        value={editingPortfolioItem.role}
                        onChange={(e) =>
                          setEditingPortfolioItem({ ...editingPortfolioItem, role: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="font-bold text-ivory block mb-1">Category Code</label>
                      <select
                        value={editingPortfolioItem.category}
                        onChange={(e) =>
                          setEditingPortfolioItem({
                            ...editingPortfolioItem,
                            category: e.target.value as PortfolioCategory
                          })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      >
                        <option value="A">A. Venture Leadership</option>
                        <option value="B">B. Growth Consulting</option>
                        <option value="C">C. Strategic Discussions (Exploratory)</option>
                        <option value="D">D. Institutional Leadership</option>
                        <option value="E">E. Previous Leadership</option>
                        <option value="F">F. PAN-India Ecosystem</option>
                        <option value="G">G. Business Mentorship</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-ivory block mb-1">Engagement Status</label>
                      <input
                        type="text"
                        value={editingPortfolioItem.engagementStatus}
                        onChange={(e) =>
                          setEditingPortfolioItem({
                            ...editingPortfolioItem,
                            engagementStatus: e.target.value as any
                          })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-ivory block mb-1">Badge Variant</label>
                      <select
                        value={editingPortfolioItem.statusBadgeVariant}
                        onChange={(e) =>
                          setEditingPortfolioItem({
                            ...editingPortfolioItem,
                            statusBadgeVariant: e.target.value as any
                          })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="exploratory">Exploratory</option>
                        <option value="tenure">Completed Tenure</option>
                        <option value="ecosystem">Ecosystem Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 font-bold text-amber-300">
                      <input
                        type="checkbox"
                        checked={editingPortfolioItem.isExploratory || false}
                        onChange={(e) =>
                          setEditingPortfolioItem({
                            ...editingPortfolioItem,
                            isExploratory: e.target.checked
                          })
                        }
                        className="accent-[#C5A46D]"
                      />
                      <span>Mark as Exploratory Discussion (Strict Disclosure Mandated)</span>
                    </label>
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Engagement Overview</label>
                    <textarea
                      rows={2}
                      value={editingPortfolioItem.overview}
                      onChange={(e) =>
                        setEditingPortfolioItem({ ...editingPortfolioItem, overview: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Challenge Addressed</label>
                    <textarea
                      rows={2}
                      value={editingPortfolioItem.challenge}
                      onChange={(e) =>
                        setEditingPortfolioItem({ ...editingPortfolioItem, challenge: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Strategic Contribution</label>
                    <textarea
                      rows={2}
                      value={editingPortfolioItem.strategicContribution}
                      onChange={(e) =>
                        setEditingPortfolioItem({
                          ...editingPortfolioItem,
                          strategicContribution: e.target.value
                        })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Measurable Outcome (Verified only)</label>
                    <input
                      type="text"
                      value={editingPortfolioItem.measurableOutcomes || ''}
                      onChange={(e) =>
                        setEditingPortfolioItem({
                          ...editingPortfolioItem,
                          measurableOutcomes: e.target.value
                        })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-ivory block mb-1">External Link URL</label>
                      <input
                        type="url"
                        value={editingPortfolioItem.link || ''}
                        onChange={(e) =>
                          setEditingPortfolioItem({ ...editingPortfolioItem, link: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-ivory block mb-1">Link Label</label>
                      <input
                        type="text"
                        value={editingPortfolioItem.linkLabel || ''}
                        onChange={(e) =>
                          setEditingPortfolioItem({ ...editingPortfolioItem, linkLabel: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gold/20 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setEditingPortfolioItem(null)}
                      className="px-4 py-2 rounded-xl bg-[#171C25] text-ivory"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-gold text-[#0A0F1D] font-bold"
                    >
                      Save Portfolio Item
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Portfolio List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#171C25] border border-gold/20 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-gold font-bold">Category {item.category}</span>
                      <span className="text-ivory/60">{item.engagementStatus}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ivory">{item.organisation}</h3>
                    <p className="text-xs text-gold font-mono">{item.role}</p>
                    <p className="text-xs text-ivory/70 line-clamp-2">{item.overview}</p>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2 border-t border-ivory/10">
                    <button
                      onClick={() => setEditingPortfolioItem(item)}
                      className="p-1.5 rounded-lg bg-gold/15 text-gold hover:bg-gold/25"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeletePortfolio(item.id)}
                      className="p-1.5 rounded-lg bg-rose-950/30 text-rose-300 hover:bg-rose-900/50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: METRICS */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Headline Impact Metrics
                </h2>
                <p className="text-xs text-ivory/60">
                  Update verified career metrics displayed on the Hero and Impact Observatory.
                </p>
              </div>

              <button
                onClick={handleSaveMetrics}
                className="px-5 py-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold"
              >
                Save All Metrics
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {metrics.map((m, idx) => (
                <div key={m.id} className="p-5 rounded-2xl bg-[#171C25] border border-gold/20 space-y-3">
                  <div className="text-[10px] font-mono text-gold uppercase tracking-widest">
                    Metric 0{idx + 1} &bull; {m.sectorTag}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-ivory block mb-1">Display Value</label>
                    <input
                      type="text"
                      value={m.displayValue}
                      onChange={(e) => {
                        const newM = [...metrics];
                        newM[idx].displayValue = e.target.value;
                        setMetrics(newM);
                      }}
                      className="w-full p-2.5 bg-[#101827] border border-gold/30 rounded-xl text-ivory font-serif text-xl font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-ivory block mb-1">Label</label>
                    <input
                      type="text"
                      value={m.label}
                      onChange={(e) => {
                        const newM = [...metrics];
                        newM[idx].label = e.target.value;
                        setMetrics(newM);
                      }}
                      className="w-full p-2.5 bg-[#101827] border border-ivory/20 rounded-xl text-ivory text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-ivory block mb-1">Context Description</label>
                    <textarea
                      rows={2}
                      value={m.description}
                      onChange={(e) => {
                        const newM = [...metrics];
                        newM[idx].description = e.target.value;
                        setMetrics(newM);
                      }}
                      className="w-full p-2.5 bg-[#101827] border border-ivory/20 rounded-xl text-ivory text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ARTICLES */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Thought Leadership &amp; Articles
                </h2>
                <p className="text-xs text-ivory/60">
                  Publish essays, framework guides, and executive op-eds.
                </p>
              </div>

              <button
                onClick={() =>
                  setEditingArticle({
                    id: `art-${Date.now()}`,
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    category: 'Institutional Leadership',
                    readTime: '6 min read',
                    publishedDate: new Date().toISOString().split('T')[0],
                    published: true
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-gold"
              >
                <Plus className="w-4 h-4" />
                <span>Write Article</span>
              </button>
            </div>

            {/* Editing Article Modal */}
            {editingArticle && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
                <form
                  onSubmit={handleSaveArticle}
                  className="w-full max-w-3xl bg-[#101827] border border-gold/40 rounded-3xl p-6 sm:p-8 space-y-4 text-xs my-8 max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-center border-b border-gold/20 pb-3">
                    <h3 className="font-serif text-xl font-bold text-ivory">
                      {editingArticle.title ? 'Edit Article' : 'Draft New Article'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setEditingArticle(null)}
                      className="p-1 rounded bg-[#171C25] text-ivory"
                    >
                      &times;
                    </button>
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={editingArticle.title}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, title: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory font-serif text-lg font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-ivory block mb-1">Category</label>
                      <input
                        type="text"
                        value={editingArticle.category}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, category: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-ivory block mb-1">Read Time</label>
                      <input
                        type="text"
                        value={editingArticle.readTime}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, readTime: e.target.value })
                        }
                        className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Executive Excerpt</label>
                    <textarea
                      rows={2}
                      value={editingArticle.excerpt}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, excerpt: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-ivory block mb-1">Full Content (Markdown format supported)</label>
                    <textarea
                      rows={10}
                      value={editingArticle.content}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, content: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory font-mono text-[11px]"
                    />
                  </div>

                  <div className="pt-3 border-t border-gold/20 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setEditingArticle(null)}
                      className="px-4 py-2 rounded-xl bg-[#171C25] text-ivory"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-gold text-[#0A0F1D] font-bold"
                    >
                      Publish Article
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="space-y-3">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="p-5 rounded-2xl bg-[#171C25] border border-gold/20 flex justify-between items-center gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gold uppercase">{art.category}</span>
                    <h3 className="font-serif text-lg font-bold text-ivory">{art.title}</h3>
                    <p className="text-xs text-ivory/60 line-clamp-1">{art.excerpt}</p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => setEditingArticle(art)}
                      className="p-2 rounded-lg bg-gold/15 text-gold hover:bg-gold/25"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PROFILE */}
        {activeTab === 'profile' && profile && (
          <form onSubmit={handleSaveProfile} className="space-y-6 max-w-3xl">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ivory">
                Executive Profile Configuration
              </h2>
              <p className="text-xs text-ivory/60">
                Update headlines, executive credo, contact channels, and official portrait location.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-ivory block mb-1">Executive Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-ivory block mb-1">Positioning Tagline</label>
                <input
                  type="text"
                  value={profile.positioning}
                  onChange={(e) => setProfile({ ...profile, positioning: e.target.value })}
                  className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="font-bold text-ivory block mb-1">Hero Subheading</label>
              <textarea
                rows={2}
                value={profile.subheading}
                onChange={(e) => setProfile({ ...profile, subheading: e.target.value })}
                className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
              />
            </div>

            <div className="text-xs">
              <label className="font-bold text-ivory block mb-1">Executive Credo</label>
              <textarea
                rows={2}
                value={profile.credo}
                onChange={(e) => setProfile({ ...profile, credo: e.target.value })}
                className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory font-serif"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="font-bold text-ivory block mb-1">Official Email</label>
                <input
                  type="email"
                  value={profile.officialEmail}
                  onChange={(e) => setProfile({ ...profile, officialEmail: e.target.value })}
                  className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                />
              </div>

              <div>
                <label className="font-bold text-ivory block mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={profile.phoneWhatsApp}
                  onChange={(e) => setProfile({ ...profile, phoneWhatsApp: e.target.value })}
                  className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory"
                />
              </div>

              <div>
                <label className="font-bold text-ivory block mb-1">Portrait Image Path</label>
                <input
                  type="text"
                  value={profile.portraitUrl}
                  onChange={(e) => setProfile({ ...profile, portraitUrl: e.target.value })}
                  className="w-full p-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-ivory font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold"
            >
              Save Executive Settings
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
