import { NextRequest, NextResponse } from 'next/server';
import {
  getStore,
  savePortfolioItem,
  deletePortfolioItem,
  updateMetrics,
  saveArticle,
  deleteArticle,
  updateProfile
} from '@/lib/store';
import { verifyAdminSession } from '@/lib/auth';

export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const store = getStore();
  return NextResponse.json(store);
}

export async function PUT(req: NextRequest) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, payload } = body;

    switch (action) {
      case 'save_portfolio':
        savePortfolioItem(payload);
        return NextResponse.json({ success: true, message: 'Portfolio item saved' });

      case 'delete_portfolio':
        deletePortfolioItem(payload.id);
        return NextResponse.json({ success: true, message: 'Portfolio item deleted' });

      case 'update_metrics':
        updateMetrics(payload);
        return NextResponse.json({ success: true, message: 'Metrics updated' });

      case 'save_article':
        saveArticle(payload);
        return NextResponse.json({ success: true, message: 'Article saved' });

      case 'delete_article':
        deleteArticle(payload.id);
        return NextResponse.json({ success: true, message: 'Article deleted' });

      case 'update_profile':
        updateProfile(payload);
        return NextResponse.json({ success: true, message: 'Executive profile updated' });

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error handling admin data update:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
