import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Check, CreditCard, Download, Share2 } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto my-4 bg-green-100 h-16 w-16 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">¡Pago Exitoso!</h1>
          <p className="text-gray-500">Transacción completada con éxito</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monto pagado</span>
            <span className="text-xl font-semibold">$1,200.00</span>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Fecha</span>
              <span className="text-gray-700 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                23 Nov 2023
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Método de pago</span>
              <span className="text-gray-700 flex items-center">
                <CreditCard className="h-4 w-4 mr-1" />
                Visa terminada en 4242
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Número de transacción</span>
              <span className="text-gray-700">TRX123456789</span>
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
