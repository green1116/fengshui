'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to submit')

      setIsSubmitted(true)
    } catch (error) {
      console.error('Contact form error:', error)
      alert('提交失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-20 h-20 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">感谢您的留言！</h1>
            <p className="text-muted-foreground mb-8">
              我们已收到您的消息，会尽快回复您。
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              继续留言
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">联系我们</h1>
            <p className="text-muted-foreground text-lg">
              我们随时准备为您提供帮助
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">电子邮箱 *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">联系电话</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="请输入您的电话"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">主题 *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="请输入主题"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">留言 *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="请输入您的留言..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? '发送中...' : '发送消息'}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">电话咨询</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      周一至周日 9:00-21:00
                    </p>
                    <p className="font-semibold">400-888-8888</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">电子邮箱</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      我们会在24小时内回复
                    </p>
                    <p className="font-semibold">info@fengshui.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">办公地址</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      欢迎预约到访
                    </p>
                    <p className="font-semibold">中国北京朝阳区</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">在线咨询</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      AI助手24小时在线
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="/chat">立即咨询 →</a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <Clock className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">营业时间</h3>
                <div className="text-sm space-y-1 opacity-90">
                  <p>周一至周五: 9:00 - 21:00</p>
                  <p>周六至周日: 10:00 - 18:00</p>
                  <p className="mt-2">节假日正常营业</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
