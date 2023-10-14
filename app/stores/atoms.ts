import { atom } from 'jotai'
import { Product } from '../models/products/types'

export const searchAtom = atom('')

export const cartModalAtom = atom(false)
export const infoModalAtom = atom(true)
export const productModalAtom = atom(false)
export const sessionAtom = atom(false)

export const selectedProductAtom = atom<Product | null>(null)
