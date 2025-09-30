"use server";

import { backendClient } from "@/sanity/lib/backendClient";
import type { BasketItem } from "@/store";

export type CODMetadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes?: string;
};

export async function createCODOrder(
  items: BasketItem[],
  metadata: CODMetadata,
) {
  try {
    // Check if any items don't have a price
    const itemsWithoutPrice = items.filter((item) => !item.product.price);

    if (itemsWithoutPrice.length > 0) {
      throw new Error("Some items do not have a price");
    }

    // Calculate total price
    const totalPrice = items.reduce(
      (total, item) => total + (item.product.price! * item.quantity),
      0
    );

    // Create products array for Sanity
    const sanityProducts = items.map((item) => ({
      _key: crypto.randomUUID(),
      product: {
        _type: "reference",
        _ref: item.product._id,
      },
      quantity: item.quantity,
    }));

    // Create order in Sanity
    const order = await backendClient.create({
      _type: "order",
      orderNumber: metadata.orderNumber,
      customerName: metadata.customerName,
      email: metadata.customerEmail,
      clerkUserId: metadata.clerkUserId,
      phone: metadata.phone,
      address: metadata.address,
      city: metadata.city,
      postalCode: metadata.postalCode,
      notes: metadata.notes,
      products: sanityProducts,
      totalPrice,
      currency: "USD",
      amountDiscount: 0,
      status: "pending",
      paymentMethod: "cod",
      orderDate: new Date().toISOString(),
    });

    return {
      success: true,
      orderNumber: metadata.orderNumber,
      orderId: order._id,
    };
  } catch (error) {
    console.error("Error creating COD order:", error);
    throw new Error("Failed to create order");
  }
}