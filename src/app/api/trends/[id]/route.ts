import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import IndustryTrend from '@/lib/models/IndustryTrend';

// GET single trend
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const trend = await IndustryTrend.findById(id);

    if (!trend) {
      return NextResponse.json(
        { success: false, error: 'Trend not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: trend },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch trend' },
      { status: 500 }
    );
  }
}

// PUT update trend
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const body = await request.json();
    const { id } = await params;

    const trend = await IndustryTrend.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!trend) {
      return NextResponse.json(
        { success: false, error: 'Trend not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: trend },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update trend' },
      { status: 500 }
    );
  }
}

// DELETE trend
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const trend = await IndustryTrend.findByIdAndDelete(id);

    if (!trend) {
      return NextResponse.json(
        { success: false, error: 'Trend not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: trend },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete trend' },
      { status: 500 }
    );
  }
}
