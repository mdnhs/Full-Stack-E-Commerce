"use client";

import { PAYMENT_OPTIONS, type PaymentMethod } from "@/types/payment";
import { Banknote, CreditCard } from "lucide-react";
import { FC } from "react";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

const PaymentMethodSelector: FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onMethodChange,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'credit-card':
        return <CreditCard className="w-5 h-5" />;
      case 'banknote':
        return <Banknote className="w-5 h-5" />;
      default:
        return <CreditCard className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-gray-900">Método de Pago</h3>
      <div className="space-y-2">
        {PAYMENT_OPTIONS.map((option) => (
          <label
            key={option.id}
            className={`
              flex items-center p-4 border rounded-lg cursor-pointer transition-colors
              ${
                selectedMethod === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={option.id}
              checked={selectedMethod === option.id}
              onChange={() => onMethodChange(option.id)}
              className="sr-only"
            />
            <div className="flex items-center space-x-3">
              <div className={`
                p-2 rounded-full
                ${selectedMethod === option.id ? 'text-blue-600' : 'text-gray-400'}
              `}>
                {getIcon(option.icon)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{option.name}</div>
                <div className="text-sm text-gray-500">{option.description}</div>
              </div>
            </div>
            <div className="ml-auto">
              <div className={`
                w-4 h-4 rounded-full border-2 flex items-center justify-center
                ${
                  selectedMethod === option.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }
              `}>
                {selectedMethod === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;