"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useBasketStore from "@/store";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { AnnouncementBanner } from "./announcement-banner";
import UserProfileComponent from "./UserProfile";

const navigation = [
  { name: "Nuevo", href: "/" },
  { name: "Mujer", href: "/" },
  { name: "Hombre", href: "/" },
  { name: "Accesorios", href: "/" },
  { name: "Sale", href: "/" },
];

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="sticky top-0 z-50 bg-white">
      <AnnouncementBanner />
      <div className="border-b">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-zinc-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
            >
              SHOPER
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-zinc-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center md:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                <span className="sr-only">Buscar</span>
              </Button>

              <UserProfileComponent />

              <Button variant="ghost" size="icon" className="relative">
                <Link href={"/basket"}>
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Carrito</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Search bar */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${showSearch ? "max-h-16 opacity-100 mb-4" : "max-h-0 opacity-0"}
            `}
          >
            <div className="relative">
              <Form action="/search" className="w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <Input
                  type="search"
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-10 py-6 text-lg bg-zinc-50 border-zinc-300 focus:border-zinc-400 rounded-xl "
                />
              </Form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
