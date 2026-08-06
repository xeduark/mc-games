// src/utils/gameUtils.ts
import type { Game } from '../types';

// Formato de moneda COP (Pesos Colombianos)
export const formatCOP = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount);
};

export const formatPrice = formatCOP;

export const getMinPrimaryPrice = (platforms: Game['platforms']): number => {
  if (!platforms || platforms.length === 0) return 0;
  return Math.min(...platforms.map(p => p.pricePrimaria));
};

export const getPlatformNames = (platforms: Game['platforms']): string => {
  if (!platforms || platforms.length === 0) return '';
  return platforms.map(p => p.name).join(' / ');
};