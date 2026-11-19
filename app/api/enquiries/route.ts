import { NextRequest, NextResponse } from 'next/server';
import { addEnquiry, getStore, updateEnquiryStatus, deleteEnquiry } from '@/lib/store';
import { verifyAdminSession } from '@/lib/auth';
import { EngagementCategory } from '@/types';

const VALID_CATEGORIES: EngagementCategory[] = [
  'Growth Consulting',
  'Venture Partnership',
  'Institutional Leadership',
  'Strategic Advisory',
  'CSR & Funding',
  'Speaking Engagements',
  'Mentorship',
  'AI Transformation'
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Anti-spam honeypot check: if hidden honeypot field is filled, reject quietly
    if (body.website_trap || body.hp) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    const {
      name,
      organization = '',
      designation = '',
      email,
      phone = '',
      category,
      description,
      timeline = '1-3 months',
      budget = '',
      consent
    } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Valid name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'Valid corporate or personal email is required' }, { status: 400 });
    }

    if (!category || !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ error: 'Please select a valid strategic engagement category' }, { status: 400 });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide at least 10 characters detailing your engagement objectives' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'You must acknowledge the privacy consent to submit an enquiry' },
        { status: 400 }
      );
    }

    // Sanitize and persist
    const newEnquiry = addEnquiry({
      name: name.trim(),
      organization: organization.trim(),
      designation: designation.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      category,
      description: description.trim(),
      timeline: timeline.trim(),
      budget: budget.trim(),
      consent: Boolean(consent)
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your strategic engagement proposal has been securely delivered to Prof. Bhaarathi Ilango’s executive office.',
        enquiryId: newEnquiry.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling enquiry submission:', error);
    return NextResponse.json({ error: 'Internal server error processing enquiry' }, { status: 500 });
  }
}

export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized executive access' }, { status: 401 });
  }

  const store = getStore();
  return NextResponse.json({ enquiries: store.enquiries });
}

export async function PATCH(req: NextRequest) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'ID and status required' }, { status: 400 });
    }

    const updated = updateEnquiryStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const deleted = deleteEnquiry(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
