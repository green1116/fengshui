'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCart } from '@/hooks/use-cart'
import { CreditCard, Smartphone, QrCode, Package, Download, CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('wechat')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    notes: ''
  })

  const hasPhysicalProducts = items.some(item => item.type === 'physical')
  const shippingFee = hasPhysicalProducts ? 15 : 0
  const finalTotal = total + shippingFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total: finalTotal,
          paymentMethod,
          customerInfo: formData,
          shippingRequired: hasPhysicalProducts
        })
      })

      if (!response.ok) throw new Error('Payment failed')

      const data = await response.json()
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearCart()
      setIsComplete(true)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('支付失败，请重试')
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0 && !isComplete) {
    router.push('/cart')
    return null
  }

  if (isComplete) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-20 h-20 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">支付成功！</h1>
            <p className="text-muted-foreground mb-2">
              订单编号：FS{Date.now().toString().slice(-8)}
            </p>
            <p className="text-muted-foreground mb-8">
              {hasPhysicalProducts 
                ? '我们会尽快安排发货，请注意查收物流信息。' 
                : '虚拟产品已发送至您的邮箱，请查收。'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push('/account/orders')}>
                查看订单
              </Button>
              <Button variant="outline" onClick={() => router.push('/')}>
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
        <h1 className="text-4xl font-bold mb-8">结算</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            {hasPhysicalProducts && (
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">收货信息</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">收货人姓名 *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">详细地址 *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="街道门牌号等"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="province">省份 *</Label>
                      <Input
                        id="province"
                        required
                        value={formData.province}
                        onChange={(e) => setFormData(prev => ({ ...prev, province: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">城市 *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">邮编</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {!hasPhysicalProducts && (
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">联系信息</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">电子邮箱 *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="用于接收虚拟产品"
                    />
                  </div>
                </div>
              </Card>
            )}

            {/* Payment Method */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">支付方式</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="wechat" id="wechat" />
                    <Label htmlFor="wechat" className="flex items-center gap-3 cursor-pointer flex-1">
                      <Smartphone className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="font-semibold">微信支付</div>
                        <div className="text-sm text-muted-foreground">使用微信扫码支付</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="alipay" id="alipay" />
                    <Label htmlFor="alipay" className="flex items-center gap-3 cursor-pointer flex-1">
                      <QrCode className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">支付宝</div>
                        <div className="text-sm text-muted-foreground">使用支付宝扫码支付</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-semibold">银行卡支付</div>
                        <div className="text-sm text-muted-foreground">支持各大银行借记卡和信用卡</div>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </Card>

            {/* Order Notes */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">订单备注</h2>
              <Label htmlFor="notes" className="text-sm text-muted-foreground mb-2 block">
                如有特殊要求请在此说明
              </Label>
              <Input
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="选填"
              />
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">订单摘要</h2>

              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-3 border-b">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        {item.type === 'physical' ? (
                          <><Package className="w-3 h-3" /> 实物</>
                        ) : (
                          <><Download className="w-3 h-3" /> 虚拟</>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-muted-foreground">x{item.quantity}</span>
                        <span className="text-sm font-semibold">¥{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">商品小计</span>
                  <span>¥{total}</span>
                </div>
                {hasPhysicalProducts && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">运费</span>
                    <span>¥{shippingFee}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">应付总额</span>
                    <span className="text-2xl font-bold text-primary">
                      ¥{finalTotal}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? '处理中...' : `支付 ¥${finalTotal}`}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                点击支付即表示您同意我们的服务条款和隐私政策
              </p>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
