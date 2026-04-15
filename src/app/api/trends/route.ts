import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import IndustryTrend from '@/lib/models/IndustryTrend';

// GET all trends
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    let trendsQuery = IndustryTrend.find(query).sort({ date: -1 });

    if (limit) {
      trendsQuery = trendsQuery.limit(parseInt(limit));
    }

    const trends = await trendsQuery;

    return NextResponse.json(
      { success: true, data: trends },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch trends' },
      { status: 500 }
    );
  }
}

// POST create new trend
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const trend = await IndustryTrend.create(body);

    return NextResponse.json(
      { success: true, data: trend },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create trend' },
      { status: 500 }
    );
  }
}
