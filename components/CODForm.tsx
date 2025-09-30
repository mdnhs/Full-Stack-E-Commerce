"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FC, useState } from "react";

interface CODFormData {
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

interface CODFormProps {
  onSubmit: (data: CODFormData) => void;
  isLoading: boolean;
}

const CODForm: FC<CODFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<CODFormData>({
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<CODFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<CODFormData> = {};

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Formato de teléfono inválido';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es requerida';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es requerida';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'El código postal es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof CODFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <p className="text-sm text-yellow-800 font-medium">
            Pago Contra Entrega
          </p>
        </div>
        <p className="text-sm text-yellow-700 mt-1">
          Pagarás en efectivo cuando recibas tu pedido. Se aplicará un cargo adicional de $2.00 por servicio COD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <Label htmlFor="city">Ciudad *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="Tu ciudad"
            className={errors.city ? 'border-red-500' : ''}
          />
          {errors.city && (
            <p className="text-sm text-red-600 mt-1">{errors.city}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="address">Dirección Completa *</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Calle, número, colonia, referencias"
          className={errors.address ? 'border-red-500' : ''}
        />
        {errors.address && (
          <p className="text-sm text-red-600 mt-1">{errors.address}</p>
        )}
      </div>

      <div>
        <Label htmlFor="postalCode">Código Postal *</Label>
        <Input
          id="postalCode"
          value={formData.postalCode}
          onChange={(e) => handleInputChange('postalCode', e.target.value)}
          placeholder="12345"
          className={errors.postalCode ? 'border-red-500' : ''}
        />
        {errors.postalCode && (
          <p className="text-sm text-red-600 mt-1">{errors.postalCode}</p>
        )}
      </div>

      <div>
        <Label htmlFor="notes">Notas Adicionales (Opcional)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          placeholder="Instrucciones especiales para la entrega..."
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Procesando..." : "Confirmar Pedido COD"}
      </Button>
    </form>
  );
};

export default CODForm;