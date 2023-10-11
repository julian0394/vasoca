export const CATEGORIES = {
  premium: 'premium',
  tradicional: 'tradicional',
  lowCost: 'lowCost',
  salt: 'salt',
  insumos: 'insumos',
  equipos: 'equipos',
  // resistencias: 'resistencias',
  // usados: 'usados',
} as const

export const PRICES = {
  PREMIUM: {
    30: '2500',
    60: '4900',
    120: '9100',
  },
  TRADICIONAL: {
    30: '1700',
    60: '3200',
    120: '5500',
  },
  LOWCOST: {
    60: '1700',
  },
  SALT: {
    TRADICIONAL: '4400',
    PREMIUM: '6100',
  },
}
