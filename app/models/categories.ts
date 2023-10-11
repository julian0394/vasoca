import bannerPremium from '../assets/img/bannerPremium.jpg'
import bannerTradicional from '../assets/img/bannerTradicional.jpg'
import bannerLowCost from '../assets/img/bannerLowCost.jpg'
import bannerSalt from '../assets/img/bannerSalt.jpg'
import bannerInsumos from '../assets/img/bannerInsumos.jpg'
import bannerEquipos from '../assets/img/bannerEquipos.jpg'

export const BANNERS = {
  premium: bannerPremium,
  tradicional: bannerTradicional,
  lowCost: bannerLowCost,
  salt: bannerSalt,
  insumos: bannerInsumos,
  equipos: bannerEquipos,
} as const

const productInfo = {
  premium: [
    { key: '30ml', price: '2500', soldOut: false },
    { key: '60ml', price: '4900', soldOut: false },
    { key: '120ml', price: '9100', soldOut: false },
  ],
  // tradicional: [
  //   { key: '30ml', price: '1700', soldOut: false},
  //   { key: '60ml', price: '3200', soldOut: false},
  //   { key: '120ml', price: '5500', soldOut: false},
  // ],
  // lowCost: [
  //   { key: '60ml', price: '1700', soldOut: false },
  // ],
  // salt: [
  //   { key: '30ML-20MG', price: '1700', soldOut: false },
  //   { key: '30ML-0MG', price: '1700', soldOut: false },
  // ],
  // tradicional: [

  // ],
  // tradicional: [

  // ],
  // tradicional: [

  // ],
}