"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useBasketStore from "@/store";
import { Banknote, Check, CreditCard, Download, Loader, Share2, Truck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const paymentMethod = searchParams.get("paymentMethod");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return <Loader />;
  }

  const isCOD = paymentMethod === 'cod';
  return (
    <div className=" bg-gray-100 flex items-start justify-center  min-h-dvh p-4">
      <Card className="w-full max-w-md bg-white mt-5 lg:mt-24 shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className={`mx-auto my-4 size-20 animate-pulse rounded-full flex items-center justify-center ${
            isCOD ? 'bg-blue-100' : 'bg-green-100'
          }`}>
            <div className={`p-1 rounded-full ${
              isCOD ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {isCOD ? (
                <Truck className="h-8 w-8 text-white" />
              ) : (
                <Check className="h-8 w-8 text-white" />
              )}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {isCOD ? '¡Pedido Confirmado!' : '¡Pago Exitoso!'}
          </h1>
          <p className="text-gray-500">
            {isCOD 
              ? 'Tu pedido ha sido registrado exitosamente' 
              : 'Transacción completada con éxito'
            }
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isCOD && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monto pagado</span>
              <span className="text-xl font-semibold">$1,200.00</span>
            </div>
          )}
          
          {isCOD && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Banknote className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">Pago Contra Entrega</span>
              </div>
              <p className="text-sm text-yellow-700">
                Pagarás en efectivo cuando recibas tu pedido. Nuestro repartidor se pondrá en contacto contigo.
              </p>
            </div>
          )}
          
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Fecha</span>
              <span className="text-gray-700 flex items-center">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Hora</span>
              <span className="text-gray-700 flex items-center">
                {new Date().toLocaleTimeString() ?? "00:00"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Método de pago</span>
              <span className="text-gray-700 flex items-center">
                {isCOD ? (
                  <>
                    <Banknote className="h-4 w-4 mr-1" />
                    Pago Contra Entrega
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-1" />
                    Visa terminada en 4242
                  </>
                )}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Número de referencia</span>
              <span className="text-gray-700 truncate">
                {(orderNumber ?? "").slice(0, 18)}
              </span>
            </div>
          </div>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Descargar recibo
          </Button>
          <Button variant="outline" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
