import fs from 'fs';
import path from 'path';
import {
  ExecutiveProfile,
  CapabilityItem,
  PortfolioItem,
  ImpactMetric,
  Article,
  AwardCredential,
  Enquiry
} from '@/types';
import {
  initialProfile,
  initialCapabilities,
  initialPortfolio,
  initialMetrics,
  initialArticles,
  initialCredentials
} from '@/data/initial-data';

export interface DataStore {
  profile: ExecutiveProfile;
  capabilities: CapabilityItem[];
  portfolio: PortfolioItem[];
  metrics: ImpactMetric[];
  articles: Article[];
  credentials: AwardCredential[];
  enquiries: Enquiry[];
  lastUpdated: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'portfolio-store.json');

function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getDefaultStore(): DataStore {
  return {
    profile: initialProfile,
    capabilities: initialCapabilities,
    portfolio: initialPortfolio,
    metrics: initialMetrics,
    articles: initialArticles,
    credentials: initialCredentials,
    enquiries: [],
    lastUpdated: new Date().toISOString()
  };
}

export function getStore(): DataStore {
  try {
    ensureDataDirectory();
    if (!fs.existsSync(STORE_FILE)) {
      const defaultData = getDefaultStore();
      fs.writeFileSync(STORE_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
      return defaultData;
    }
    const raw = fs.readFileSync(STORE_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as DataStore;
    
    // Ensure all required fields exist
    return {
      profile: parsed.profile || initialProfile,
      capabilities: parsed.capabilities || initialCapabilities,
      portfolio: parsed.portfolio || initialPortfolio,
      metrics: parsed.metrics || initialMetrics,
      articles: parsed.articles || initialArticles,
      credentials: parsed.credentials || initialCredentials,
      enquiries: parsed.enquiries || [],
      lastUpdated: parsed.lastUpdated || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error reading store file, falling back to defaults:', error);
    return getDefaultStore();
  }
}

export function saveStore(data: DataStore): boolean {
  try {
    ensureDataDirectory();
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing store file:', error);
    return false;
  }
}

// Enquiry operations
export function addEnquiry(enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry {
  const store = getStore();
  const newEnquiry: Enquiry = {
    ...enquiryData,
    id: `enq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    status: 'new',
    createdAt: new Date().toISOString()
  };

  store.enquiries.unshift(newEnquiry);
  saveStore(store);
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: Enquiry['status']): boolean {
  const store = getStore();
  const index = store.enquiries.findIndex((e) => e.id === id);
  if (index !== -1) {
    store.enquiries[index].status = status;
    return saveStore(store);
  }
  return false;
}

export function deleteEnquiry(id: string): boolean {
  const store = getStore();
  const initialLength = store.enquiries.length;
  store.enquiries = store.enquiries.filter((e) => e.id !== id);
  if (store.enquiries.length !== initialLength) {
    return saveStore(store);
  }
  return false;
}

// Profile updates
export function updateProfile(profile: Partial<ExecutiveProfile>): boolean {
  const store = getStore();
  store.profile = { ...store.profile, ...profile };
  return saveStore(store);
}

// Portfolio operations
export function savePortfolioItem(item: PortfolioItem): boolean {
  const store = getStore();
  const index = store.portfolio.findIndex((p) => p.id === item.id);
  if (index !== -1) {
    store.portfolio[index] = item;
  } else {
    store.portfolio.push(item);
  }
  return saveStore(store);
}

export function deletePortfolioItem(id: string): boolean {
  const store = getStore();
  store.portfolio = store.portfolio.filter((p) => p.id !== id);
  return saveStore(store);
}

// Metrics operations
export function updateMetrics(metrics: ImpactMetric[]): boolean {
  const store = getStore();
  store.metrics = metrics;
  return saveStore(store);
}

// Articles operations
export function saveArticle(article: Article): boolean {
  const store = getStore();
  const index = store.articles.findIndex((a) => a.id === article.id);
  if (index !== -1) {
    store.articles[index] = article;
  } else {
    store.articles.unshift(article);
  }
  return saveStore(store);
}

export function deleteArticle(id: string): boolean {
  const store = getStore();
  store.articles = store.articles.filter((a) => a.id !== id);
  return saveStore(store);
}
