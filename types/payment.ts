export type PaymentMethod = 'stripe' | 'cod';

export interface PaymentOption {
  id: PaymentMethod;
  name: string;
  description: string;
  icon: string;
}

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'stripe',
    name: 'Tarjeta de Crédito/Débito',
    description: 'Pago seguro con tarjeta',
    icon: 'credit-card'
  },
  {
    id: 'cod',
    name: 'Pago Contra Entrega',
    description: 'Paga cuando recibas tu pedido',
    icon: 'banknote'
  }
];