'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    propertyType: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to submit')

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      alert('提交失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-20 h-20 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">预约成功！</h1>
            <p className="text-muted-foreground mb-8">
              感谢您的预约，我们的专业顾问会在24小时内联系您确认咨询时间。
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>
                再次预约
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                返回首页
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">预约咨询</h1>
            <p className="text-muted-foreground text-lg">
              专业风水大师为您提供一对一咨询服务
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">灵活预约</h3>
              <p className="text-sm text-muted-foreground">
                根据您的时间安排预约咨询
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">快速响应</h3>
              <p className="text-sm text-muted-foreground">
                24小时内确认预约时间
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">上门服务</h3>
              <p className="text-sm text-muted-foreground">
                支持线上咨询和实地勘察
              </p>
            </Card>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">联系电话 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="请输入您的电话"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">电子邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="请输入您的邮箱（选填）"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">服务类型 *</Label>
                  <Select
                    required
                    value={formData.serviceType}
                    onValueChange={(value) => handleChange('serviceType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择服务类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">住宅风水</SelectItem>
                      <SelectItem value="commercial">商业风水</SelectItem>
                      <SelectItem value="office">办公室风水</SelectItem>
                      <SelectItem value="naming">起名改名</SelectItem>
                      <SelectItem value="other">其他咨询</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyType">物业类型</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleChange('propertyType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择物业类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">公寓</SelectItem>
                      <SelectItem value="house">独栋别墅</SelectItem>
                      <SelectItem value="office">办公楼</SelectItem>
                      <SelectItem value="shop">商铺</SelectItem>
                      <SelectItem value="land">土地</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">地址</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="请输入物业地址（如需上门服务）"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">首选日期</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">首选时段</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => handleChange('preferredTime', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择时段" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">上午 (9:00-12:00)</SelectItem>
                      <SelectItem value="afternoon">下午 (14:00-17:00)</SelectItem>
                      <SelectItem value="evening">傍晚 (17:00-19:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">详细描述</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="请描述您的具体需求或问题..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? '提交中...' : '提交预约'}
              </Button>
            </form>
          </Card>

          <Card className="mt-8 p-6 bg-muted/50">
            <h3 className="font-semibold mb-4">其他联系方式</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">咨询热线</div>
                  <div className="font-semibold">400-888-8888</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">电子邮箱</div>
                  <div className="font-semibold">info@fengshui.com</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
