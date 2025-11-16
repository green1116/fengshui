import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">风水咨询</h3>
            <p className="text-sm text-muted-foreground">
              专业的风水咨询服务，为您的生活与事业保驾护航
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/residential" className="text-muted-foreground hover:text-primary transition-colors">
                  住宅风水
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-muted-foreground hover:text-primary transition-colors">
                  商业风水
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors">
                  在线咨询
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">购物</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?type=physical" className="text-muted-foreground hover:text-primary transition-colors">
                  实物产品
                </Link>
              </li>
              <li>
                <Link href="/products?type=virtual" className="text-muted-foreground hover:text-primary transition-colors">
                  虚拟产品
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  购物车
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@fengshui.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>中国北京</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 风水咨询. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
