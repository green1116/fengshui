import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, Building2, Users, Book, Compass, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: '住宅风水',
      description: '为您的家居环境提供全面的风水分析与布局建议，打造和谐温馨的生活空间',
      features: ['户型分析', '方位布局', '家具摆放', '色彩搭配'],
      price: '￥1,888起'
    },
    {
      icon: Building2,
      title: '商业风水',
      description: '专业的商铺、办公室风水规划，助力事业发展，提升财运与人气',
      features: ['选址咨询', '内部布局', '招财布阵', '化煞调整'],
      price: '￥3,888起'
    },
    {
      icon: Users,
      title: '企业顾问',
      description: '为企业提供长期风水顾问服务，定期调整优化，保持良好运势',
      features: ['年度规划', '定期勘察', '风水调整', '员工培训'],
      price: '￥面议'
    },
    {
      icon: Book,
      title: '风水培训',
      description: '系统的风水知识培训课程，从入门到精通，传承千年智慧',
      features: ['理论教学', '实践指导', '案例分析', '证书颁发'],
      price: '￥5,888起'
    },
    {
      icon: Compass,
      title: '择日择时',
      description: '为重要事项选择吉日良辰，包括搬家、开业、婚嫁等',
      features: ['黄道吉日', '时辰选择', '个人八字', '综合分析'],
      price: '￥888起'
    },
    {
      icon: Sparkles,
      title: '风水调整',
      description: '针对现有环境进行风水化煞与调整，改善不良格局',
      features: ['问题诊断', '化煞方案', '物品配置', '后续跟踪'],
      price: '￥1,588起'
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">专业服务</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            我们提供全方位的风水咨询服务，由资深风水大师亲自指导，为您量身定制解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {service.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">服务内容：</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <Button asChild>
                    <Link href="/consultation">立即预约</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">需要定制服务？</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              如果您有特殊需求或想要了解更多服务详情，欢迎联系我们的专业顾问团队
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/consultation">预约咨询</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
