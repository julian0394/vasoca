'use client'

import { useAtom } from 'jotai'
import { searchAtom } from './stores/atoms'
import ProductCard from './components/ProductCard/ProductCard'
import { productList } from './models/products'
import { v4 as uuid } from 'uuid';

import { Product } from './models/products/types'
import renderCategory from './utils/renderCategory'
import { CATEGORIES } from './models/constants'
import { BANNERS } from './models/categories'
import FilterCard from './components/FilterCard/filterCard'

export default function Home() {
  const [search] = useAtom(searchAtom)

  const renderSearchProducts = () => {
    const filteredProducts = Object.values(productList)
    .flatMap((category: Product[]) => category.filter( product =>
      product.name.toLowerCase().includes(search.toLowerCase().trim())
    ))

    return filteredProducts.length > 0
    ? 
    <div className='grid grid-cols-2 gap-1'>
      { filteredProducts.map( prod => <ProductCard key={uuid()} product={prod} /> ) }
    </div>
    :
    filteredProducts.length === 0 && <div className='text-center italic text-slate-300 mt-5'>Sin resultados</div>
  }

  const renderAllProducts = () => (
    Object.values(CATEGORIES).map( category => (
      <div key={uuid()}>
        { renderCategory({ category, banner: BANNERS[category] }) }
      </div>
    ))
  )
  
  return (
    <main className='px-3 flex-1 overflow-y-auto'>
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
