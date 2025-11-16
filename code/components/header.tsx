'use client'

import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, User } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">风水</span>
          <span>咨询</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            服务项目
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
            产品商城
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
            AI咨询
          </Link>
          <Link href="/consultation" className="text-sm font-medium hover:text-primary transition-colors">
            预约咨询
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            关于我们
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="/account">
              <User className="w-5 h-5" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors">
                  服务项目
                </Link>
                <Link href="/products" className="text-lg font-medium hover:text-primary transition-colors">
                  产品商城
                </Link>
                <Link href="/chat" className="text-lg font-medium hover:text-primary transition-colors">
                  AI咨询
                </Link>
                <Link href="/consultation" className="text-lg font-medium hover:text-primary transition-colors">
                  预约咨询
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                  关于我们
                </Link>
                <Link href="/account" className="text-lg font-medium hover:text-primary transition-colors">
                  个人中心
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
