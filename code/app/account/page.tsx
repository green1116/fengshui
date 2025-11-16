'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AccountPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">个人中心</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">用户名</h2>
            <p className="text-sm text-muted-foreground mb-4">user@example.com</p>
            <Button variant="outline" size="sm">编辑资料</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/account/orders">
              <div className="flex flex-col items-center">
                <ShoppingBag className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">我的订单</h3>
                <p className="text-sm text-muted-foreground">查看订单历史</p>
              </div>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">收藏夹</h3>
              <p className="text-sm text-muted-foreground">我的收藏产品</p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">账户设置</h3>
              <p className="text-sm text-muted-foreground">管理账户信息</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-6">
          <h3 className="font-semibold mb-4">快速操作</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/consultation">预约咨询</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/chat">AI咨询</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
