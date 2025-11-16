import { Card } from '@/components/ui/card'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-muted-foreground text-lg">
            传承千年智慧，服务现代生活
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <Card className="p-8">
            <p className="text-muted-foreground leading-relaxed">
              我们是一家专注于传统风水文化传承与现代应用的专业机构。团队由多位资深风水大师组成，拥有数十年的实践经验和深厚的理论功底。我们致力于将古老的风水智慧与现代生活相结合，为客户提供科学、实用的风水解决方案。
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              无论是住宅、商铺还是办公场所，我们都能为您提供专业的风水布局建议，帮助您改善环境能量，提升生活品质和事业运势。同时，我们也提供风水产品销售和在线教育服务，让更多人了解和运用风水智慧。
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">专业资质</h3>
            <p className="text-muted-foreground">
              团队成员均持有专业风水师资格认证，多年实战经验，服务客户超过1000+
            </p>
          </Card>

          <Card className="p-6">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">专家团队</h3>
            <p className="text-muted-foreground">
              汇聚国内顶尖风水大师，各有专长，为您提供最专业的咨询服务
            </p>
          </Card>

          <Card className="p-6">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">精准服务</h3>
            <p className="text-muted-foreground">
              因地制宜，量身定制，为每位客户提供最适合的风水解决方案
            </p>
          </Card>

          <Card className="p-6">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">用心负责</h3>
            <p className="text-muted-foreground">
              以客户满意为宗旨，提供售后跟踪服务，确保效果达到预期
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-muted/50 text-center">
          <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            让风水智慧惠及每一个家庭和企业，帮助人们创造和谐美好的生活环境，实现身心健康与事业成功的平衡发展。
          </p>
        </Card>
      </div>
    </div>
  )
}
