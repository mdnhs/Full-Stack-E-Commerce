"use client";
import {
  createCheckoutSession,
  type Metadata,
} from "@/actions/createCheckoutSession";
import AddToBasketButton from "@/components/AddToBasketButton";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { imageUrl } from "@/lib/imageUrl";
import useBasketStore from "@/store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import { InfoIcon } from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const BasketPage: FC = () => {
  const { getGroupedItems } = useBasketStore();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const groupedItems = getGroupedItems();

  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return <Loader />;
  }

  if (getGroupedItems().length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center h-auto justify-center ">
        <h1 className="text-2xl font-bold mb-6">Tu carrito esta vacio</h1>
        <p className="text-gray-600 text-lg">
          Comienza a añadir algunos productos a tu carrito
        </p>
      </div>
    );
  }

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName || "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress || "Unknown",
        clerkUserId: user!.id,
      };

      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.log("Error checking out:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-sm font-medium mb-4">
        Envíos gratis por pedidos superiores a $800.00
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {getGroupedItems()?.map((item) => (
            <div
              key={item.product._id + item.product._createdAt}
              className=" p-4 first:border-t border-b hover:bg-gray-100/55 hover:transition-colors flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0 "
                onClick={() =>
                  router.push(`/product/${item.product.slug?.current}`)
                }
              >
                <div className="size-20 sm:size-24 flex-shrink-0 mr-4">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name || "Product Image"}
                      className="size-full border object-cover rounded-xl"
                      width={96}
                      height={96}
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-medium sm:text-xl truncate">
                    {item.product.name}
                  </h2>
                  {/* <p className="text-sm sm:text-base text-gray-600">
                    ${((item.product.price ?? 0) * item.quantity).toFixed(2)}
                  </p> */}
                  <p className="text-sm sm:text-base text-gray-500 font-medium">
                    Variante: US
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-5 flex-shrink-0">
                <AddToBasketButton product={item.product} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 lg:sticky lg:top-4  bg-white p-6  rounded order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
          <h3 className="text-xl font-medium">Detalles del pedido</h3>
          <div className="mt-4  flex flex-col gap-2">
            <Separator className="my-4" />
            <div className="flex justify-between text-gray-600 text-sm">
              <p className="flex items-center">
                <span>Subtotal</span>
                <InfoIcon className="size-5 text-white fill-gray-400" />
              </p>
              <span>
                ${useBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </div>
            <p className="flex justify-between text-gray-600 text-sm">
              <span>Envío gratuito</span>
              <span>$0.00</span>
            </p>
            <div className="flex justify-between text-gray-600 text-sm ">
              <p>
                <span>Taxes</span>
                <span className="text-gray-400 ml-1">(Incluido)</span>
              </p>
              <span>$0.00</span>
            </div>
            <Separator className="mt-4" />
            <div>
              <p className="flex justify-between text-lg font-medium py-2">
                <span>Total:</span>
                <span className="font-semibold">
                  ${useBasketStore.getState().getTotalPrice().toFixed(2)}
                </span>
              </p>
            </div>
            <Separator className="my-3" />
          </div>
          {/* Checkout */}
          {isSignedIn ? (
            <Button
              variant={"default"}
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-4 w-full"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </Button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Sign in to checkout
              </button>
            </SignInButton>
          )}
        </div>
        <div className="h-64 lg:h-0" />
      </div>
    </div>
  );
};

export default BasketPage;
