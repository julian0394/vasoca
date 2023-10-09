'use client'

import { useAtom } from 'jotai'
import { searchAtom } from './stores/atoms'
import ProductCard from './components/ProductCard/ProductCard'
import { productList } from './models/products'
import { v4 as uuid } from 'uuid';
import FilterCard from './components/FilterCard/filterCard'
import Image from 'next/image'
import bannerPremium from './assets/img/bannerPremium.jpg'
import bannerTradicional from './assets/img/bannerTradicional.jpg'
import bannerLowCost from './assets/img/bannerLowCost.jpg'
import bannerSalt from './assets/img/bannerSalt.jpg'
import bannerInsumos from './assets/img/bannerInsumos.jpg'
import bannerEquipos from './assets/img/bannerEquipos.jpg'
import { Product } from './models/products/types'
import renderCategory from './utils/renderCategory'
import { CATEGORIES } from './models/constants'

export default function Home() {
  const [search] = useAtom(searchAtom)

  const renderSearchProducts = () => {
    const filteredProducts = Object.values(productList)
    .flatMap((category: Product[]) => category.filter( product =>
      product.name.toLowerCase().includes(search.toLowerCase().trim())
    ))

    if(filteredProducts.length > 0) {
      return (
        <div className='grid grid-cols-2 gap-1'>
          { filteredProducts.map( prod => <ProductCard key={uuid()} product={prod} /> ) }
        </div>
      ) 
    }
    else {
      return (
        <div>
          { filteredProducts.length === 0 && <span className=' block text-center italic text-slate-300 mt-5'>Sin resultados</span> }
        </div>
      )
    }
  }

  const renderAllProducts = () => {
    return (
      <div className='flex flex-col'>
        <Image src={bannerPremium} alt='banner categoria premium' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.PREMIUM) }

        <Image src={bannerTradicional} alt='banner categoria tradicional' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.TRADICIONAL) }

        <Image src={bannerLowCost} alt='banner categoria low cost' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.LOWCOST) }

        <Image src={bannerSalt} alt='banner categoria nic salt' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.SALT) }

        <Image src={bannerInsumos} alt='banner categoria insumos' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.INSUMOS) }

        <Image src={bannerEquipos} alt='banner categoria equipos' className='mt-3 mb-1' />
        { renderCategory(CATEGORIES.EQUIPOS) }
      </div>
    )
  }
  
  return (
    <main className='mt-2 mx-5 pb-20 h-[90vh] overflow-y-scroll'>
      { search && <FilterCard /> }
      <div>
        { search 
          ? renderSearchProducts()
          : renderAllProducts()
        }
      </div>
    </main>
  )
}
