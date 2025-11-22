import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({ 
      success: true,
      message: 'API is working',
      data: []
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      success: true,
      message: 'Message processed',
      data: []
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
