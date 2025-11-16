import { NextRequest, NextResponse } from 'next/server'

const FENGSHUI_SYSTEM_PROMPT = `你是一位专业的风水顾问助手，精通中国传统风水学说。你的职责是：

1. 为用户提供专业的风水知识和建议
2. 解答关于住宅、办公室等场所的风水布局问题
3. 介绍风水中的基本概念，如八卦、五行、方位等
4. 提供实用的风水改善建议
5. 保持专业、友善、耐心的态度

重要规则：
- 用简洁易懂的中文回答
- 避免过于迷信的说法，注重科学和合理性
- 如果问题超出风水范畴，礼貌地引导用户回到风水话题
- 对于需要实地勘察的复杂问题，建议用户预约专业咨询
- 回答要具体实用，避免空泛的理论`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Call the external AI API
    const response = await fetch('https://api.agicto.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-eN6Jcb9IkN0YcS0J37D0E88677F34aD18193643d8488Eb98`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: FENGSHUI_SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content || '抱歉，我现在无法回答这个问题。'

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
