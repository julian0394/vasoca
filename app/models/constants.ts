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

export const ANIMATION_FROM_TOP =  {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }
}

export const ANIMATION_FROM_BOTTOM = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }
}

export const ANIMATION_OPACITY_CENTER = {
  variants: {
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }
}
