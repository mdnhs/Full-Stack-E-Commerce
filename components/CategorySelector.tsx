"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Category } from "@/sanity.types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

interface CategorySelectorProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategorySelectorProps) {
  const slug = useParams().slug;
  const router = useRouter();
  const initialValue = categories.find(
    (category) => category.slug?.current === slug,
  );
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(initialValue);

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "group flex items-center gap-3 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            "bg-black text-white hover:bg-zinc-800",
            "border border-zinc-800 hover:border-zinc-700",
            "focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2",
            isOpen && "bg-zinc-800 border-zinc-700",
          )}
        >
          {selectedCategory !== undefined && <span>Filtrar por:</span>}
          <div className="flex items-center gap-2">
            <span className="text-white group-hover:text-white transition-colors">
              {selectedCategory?.title || "Todas las categorías"}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-zinc-400 group-hover:text-white transition-all duration-200",
                isOpen && "transform rotate-180",
              )}
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 max-h-[400px] overflow-auto rounded-lg border border-zinc-200 bg-white p-1 shadow-lg"
        align="start"
      >
        {categories.map((category) => (
          <DropdownMenuItem
            key={category._id}
            className={cn(
              "text-sm cursor-pointer rounded-md transition-colors px-3 py-2",
              "text-zinc-600 hover:text-black hover:bg-zinc-100",
              "focus:text-black focus:bg-zinc-100 focus:outline-none",
              selectedCategory?._id === category._id &&
                "bg-zinc-100 text-black font-medium",
            )}
            onClick={() => {
              setSelectedCategory(category);
              setIsOpen(false);
              router.push(`/categories/${category.slug?.current}`);
            }}
          >
            {category.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
