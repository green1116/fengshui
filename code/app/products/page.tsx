'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Package, Download } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'

const PRODUCTS = [
  {
    id: '1',
    name: '罗盘专业版',
    price: 388,
    type: 'physical',
    category: '风水工具',
    image: '/traditional-chinese-compass-luopan.jpg',
    description: '专业风水罗盘，精准测量方位，铜制外壳，手工制作'
  },
  {
    id: '2',
    name: '风水布局图',
    price: 188,
    type: 'virtual',
    category: '电子资料',
    image: '/feng-shui-bagua-diagram.jpg',
    description: '详细的住宅风水布局图纸，包含八卦方位解析'
  },
  {
    id: '3',
    name: '招财摆件',
    price: 268,
    type: 'physical',
    category: '风水摆件',
    image: '/chinese-lucky-ornament-gold.jpg',
    description: '纯铜招财摆件，开光加持，助力财运亨通'
  },
  {
    id: '4',
    name: '在线课程',
    price: 588,
    type: 'virtual',
    category: '教育培训',
    image: '/feng-shui-online-course.jpg',
    description: '风水入门到精通课程，20小时视频教学'
  },
  {
    id: '5',
    name: '五行水晶阵',
    price: 428,
    type: 'physical',
    category: '风水摆件',
    image: '/five-element-crystal-array.jpg',
    description: '天然水晶打造，五行能量平衡，适合家居办公'
  },
  {
    id: '6',
    name: '八字命理报告',
    price: 298,
    type: 'virtual',
    category: '电子资料',
    image: '/chinese-bazi-report.jpg',
    description: '个人八字详细分析报告，包含运势预测'
  },
  {
    id: '7',
    name: '风水罗盘初学版',
    price: 128,
    type: 'physical',
    category: '风水工具',
    image: '/basic-feng-shui-compass.jpg',
    description: '适合初学者的罗盘，简单易用，性价比高'
  },
  {
    id: '8',
    name: '家居风水电子书',
    price: 98,
    type: 'virtual',
    category: '电子资料',
    image: '/home-feng-shui-ebook.jpg',
    description: '200页家居风水实用指南，图文并茂'
  }
]

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | 'physical' | 'virtual'>('all')
  const { addItem } = useCart()

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.type === filter)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">风水产品商城</h1>
          <p className="text-muted-foreground">精选优质风水产品，助您改善运势</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            全部产品
          </Button>
          <Button 
            variant={filter === 'physical' ? 'default' : 'outline'}
            onClick={() => setFilter('physical')}
          >
            <Package className="w-4 h-4 mr-2" />
            实物产品
          </Button>
          <Button 
            variant={filter === 'virtual' ? 'default' : 'outline'}
            onClick={() => setFilter('virtual')}
          >
            <Download className="w-4 h-4 mr-2" />
            虚拟产品
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-2 right-2">
                  {product.type === 'physical' ? '实物' : '虚拟'}
                </Badge>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-muted-foreground mb-2">
                  {product.category}
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ¥{product.price}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => addItem(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    加入购物车
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
