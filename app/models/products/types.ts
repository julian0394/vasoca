import { StaticImageData } from "next/image"
import { CATEGORIES } from "../constants"

export interface Product {
  name: string
  category: Category
  descrption: string
  shortDesc: string
  hasMint?: boolean
  flavor?: Flavor
  img: StaticImageData
  soldOut: boolean
  isNew: boolean
  isFavorite: boolean
  price: Price[]
}

export interface AllProducts {
  premium: Product[]
  tradicional: Product[]
  lowCost: Product[]
  salt: Product[]
  insumos: Product[]
  equipos: Product[]
  // resistencias?: Product[]
  // usados?: Product[]
}

export interface Price {
  key: string
  price: string
}

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES]
// 'premium' | 'tradicional' | 'salt' | 'lowCost' | 'insumos' | 'equipos' | 'usados' | 'resistencias'

export type Flavor = 'postre' | 'tabaquil' | 'frutal' | 'mentolado'
