'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Download, Clock, CheckCircle2 } from 'lucide-react'

// Mock order data
const ORDERS = [
  {
    id: 'FS12345678',
    date: '2025-01-15',
    status: 'delivered',
    total: 656,
    items: [
      { name: '罗盘专业版', type: 'physical', quantity: 1, price: 388 },
      { name: '招财摆件', type: 'physical', quantity: 1, price: 268 }
    ]
  },
  {
    id: 'FS87654321',
    date: '2025-01-10',
    status: 'completed',
    total: 776,
    items: [
      { name: '风水布局图', type: 'virtual', quantity: 1, price: 188 },
      { name: '在线课程', type: 'virtual', quantity: 1, price: 588 }
    ]
  }
]

export default function OrdersPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600">已完成</Badge>
      case 'delivered':
        return <Badge className="bg-blue-600">已送达</Badge>
      case 'shipping':
        return <Badge className="bg-yellow-600">配送中</Badge>
      case 'processing':
        return <Badge className="bg-orange-600">处理中</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">我的订单</h1>

        <div className="space-y-6">
          {ORDERS.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">订单号: {order.id}</h3>
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    下单时间: {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">订单总额</div>
                  <div className="text-2xl font-bold text-primary">¥{order.total}</div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {item.type === 'physical' ? (
                        <Package className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Download className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.type === 'physical' ? '实物产品' : '虚拟产品'} × {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold">¥{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 flex gap-2 justify-end">
                <Button variant="outline" size="sm">
                  查看详情
                </Button>
                {order.status === 'delivered' && (
                  <Button size="sm">确认收货</Button>
                )}
                {order.items.some(item => item.type === 'virtual') && (
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    下载
                  </Button>
                )}
              </div>
            </Card>
          ))}

          {ORDERS.length === 0 && (
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">暂无订单</h3>
              <p className="text-muted-foreground mb-6">
                您还没有任何订单记录
              </p>
              <Button asChild>
                <a href="/products">开始购物</a>
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
