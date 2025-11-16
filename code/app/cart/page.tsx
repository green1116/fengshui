'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Trash2, Plus, Minus, Package, Download } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold mb-4">购物车是空的</h1>
            <p className="text-muted-foreground mb-8">
              快去挑选您喜欢的风水产品吧
            </p>
            <Button size="lg" asChild>
              <Link href="/products">浏览产品</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">购物车</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          {item.type === 'physical' ? (
                            <><Package className="w-4 h-4" /> 实物产品</>
                          ) : (
                            <><Download className="w-4 h-4" /> 虚拟产品</>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          单价: ¥{item.price}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          ¥{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">订单摘要</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">商品小计</span>
                  <span>¥{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">运费</span>
                  <span>待计算</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">总计</span>
                    <span className="text-2xl font-bold text-primary">
                      ¥{total}
                    </span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/checkout">去结算</Link>
              </Button>

              <Button variant="outline" className="w-full mt-2" asChild>
                <Link href="/products">继续购物</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
