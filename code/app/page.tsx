import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sparkles, Compass, Home, ShoppingBag, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-6">
            <Compass className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            专业风水咨询服务
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            传承千年智慧，为您的家居与事业带来和谐与繁荣。专业风水大师为您量身定制解决方案
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/consultation">预约咨询</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">浏览产品</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">我们的服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">住宅风水</h3>
              <p className="text-muted-foreground mb-4">
                专业的家居风水布局分析，为您打造和谐温馨的居住环境，提升家庭运势
              </p>
              <Button variant="link" asChild className="p-0">
                <Link href="/services/residential">了解更多 →</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">商业风水</h3>
              <p className="text-muted-foreground mb-4">
                办公室、店铺风水规划，助力事业发展，提升财运与人气
              </p>
              <Button variant="link" asChild className="p-0">
                <Link href="/services/commercial">了解更多 →</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">在线咨询</h3>
              <p className="text-muted-foreground mb-4">
                AI智能咨询与专家一对一服务，随时随地获取专业建议
              </p>
              <Button variant="link" asChild className="p-0">
                <Link href="/chat">立即咨询 →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">精选风水产品</h2>
            <Button variant="outline" asChild>
              <Link href="/products">查看全部</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: '罗盘专业版',
                price: '¥388',
                type: '实物产品',
                image: '/traditional-chinese-compass-luopan.jpg'
              },
              {
                name: '风水布局图',
                price: '¥188',
                type: '虚拟产品',
                image: '/feng-shui-bagua-diagram.jpg'
              },
              {
                name: '招财摆件',
                price: '¥268',
                type: '实物产品',
                image: '/chinese-lucky-ornament-gold.jpg'
              },
              {
                name: '在线课程',
                price: '¥588',
                type: '虚拟产品',
                image: '/feng-shui-online-course.jpg'
              }
            ].map((product, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-2">{product.type}</div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="sm">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      购买
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">开启您的风水之旅</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            立即预约专业风水咨询，让古老智慧为您的生活带来积极改变
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/consultation">免费咨询</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
