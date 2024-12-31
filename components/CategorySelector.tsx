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
import { Button } from "./ui/button";

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
        <Button variant={"outline"} asChild>
          <div>
            {selectedCategory !== undefined && <span>Filtrar por:</span>}
            <div className="flex items-center gap-2">
              <span className="text-black group-hover:text-white text-xs md:text-sm transition-colors">
                {selectedCategory?.title || "Filtros"}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-zinc-400 group-hover:text-white transition-all duration-200",
                  isOpen && "transform rotate-180",
                )}
              />
            </div>
          </div>
        </Button>
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
