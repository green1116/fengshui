import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 返回一个基本的响应，根据你的需求修改
    return NextResponse.json({ 
      message: 'Next message API is working',
      data: [] // 确保返回一个数组，避免length错误
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
    
    // 处理请求逻辑
    return NextResponse.json({ 
      success: true,
      message: 'Message processed successfully',
      data: [] // 确保返回数组
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
