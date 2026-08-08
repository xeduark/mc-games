
import type {
  PlatformPrices,
  PlatformType
} from '../data/games';


/**
 * Busca los precios de una plataforma específica.
 */
export function getPlatformPrices(
  platforms: PlatformPrices[],
  platform: PlatformType
): PlatformPrices | undefined {
  return platforms.find(
    (item) => item.name === platform
  );
}


/**
 * Comprueba si un juego tiene una plataforma.
 */
export function hasPlatform(
  platforms: PlatformPrices[],
  platform: PlatformType
): boolean {
  return platforms.some(
    (item) => item.name === platform
  );
}


/**
 * Comprueba si el juego tiene PS4 y PS5.
 */
export function isDualPlatform(
  platforms: PlatformPrices[]
): boolean {
  return (
    hasPlatform(platforms, 'PS4') &&
    hasPlatform(platforms, 'PS5')
  );
}


/**
 * Comprueba si PS4 y PS5 tienen exactamente
 * los mismos precios.
 *
 * PS4 Primaria === PS5 Primaria
 * PS4 Secundaria === PS5 Secundaria
 */
export function hasSamePlatformPrices(
  platforms: PlatformPrices[]
): boolean {

  const ps4 = getPlatformPrices(
    platforms,
    'PS4'
  );

  const ps5 = getPlatformPrices(
    platforms,
    'PS5'
  );


  if (!ps4 || !ps5) {
    return false;
  }


  return (
    ps4.pricePrimaria === ps5.pricePrimaria &&
    ps4.priceSecundaria === ps5.priceSecundaria
  );
}


/**
 * Determina si un juego puede aparecer
 * dentro del filtro "Todos".
 */
export function showInAllFilter(
  platforms: PlatformPrices[]
): boolean {

  return (
    isDualPlatform(platforms) &&
    hasSamePlatformPrices(platforms)
  );
}


/**
 * Obtiene el precio según plataforma
 * y tipo de cuenta.
 */
export function getGamePrice(
  platforms: PlatformPrices[],
  platform: PlatformType,
  accountType: 'primaria' | 'secundaria'
): number | undefined {

  const platformData =
    getPlatformPrices(
      platforms,
      platform
    );


  if (!platformData) {
    return undefined;
  }


  return accountType === 'primaria'
    ? platformData.pricePrimaria
    : platformData.priceSecundaria;
}


/**
 * Formatea un precio en pesos colombianos.
 */
export function formatCOP(
  amount: number
): string {

  return new Intl.NumberFormat(
    'es-CO',
    {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ).format(amount);

}


/**
 * Obtiene el precio mínimo de Primaria.
 *
 * Esta función se conserva por compatibilidad
 * con otras partes del proyecto.
 *
 * IMPORTANTE:
 * No utilizarla para mostrar el precio de una
 * plataforma concreta.
 */
export function getMinPrimaryPrice(
  platforms: PlatformPrices[]
): number {

  if (!platforms.length) {
    return 0;
  }


  return Math.min(
    ...platforms.map(
      (platform) => platform.pricePrimaria
    )
  );

}


/**
 * Obtiene los nombres de plataformas.
 */
export function getPlatformNames(
  platforms: PlatformPrices[]
): string {

  return platforms
    .map((platform) => platform.name)
    .join(' / ');

}

