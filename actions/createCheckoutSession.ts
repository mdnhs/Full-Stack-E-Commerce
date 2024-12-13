'use server';

import type { BasketItem } from '@/store';

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem['product'];
  quantity: number;
};

export async function createCheckoutSession(
  items: BasketItem[],
  metadata: Metadata
) {
  try {
    //    check if any grouped items dont have a price
    const itemsWithoutPrice = items.filter((item) => !item.product.price);

    if (itemsWithoutPrice.length > 0) {
      throw new Error('Grouped items do not have a price');
    }
  } catch (error) {
    console.log('Error creating checkout session:', error);
  }
}
