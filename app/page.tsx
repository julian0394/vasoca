'use client'
import * as Form from '@radix-ui/react-form'
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
import CustomInput from './components/FormComponents/CustomInput'
import CustomSelect from './components/FormComponents/CustomSelect'

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
      <Form.Root>
            <div className="flex flex-col gap-3">
              <CustomInput name={'lalala'} label='Input' helperText="helper" />
              <CustomInput name={'lololo'} label='Otro input' />
              <CustomSelect label="Select" name="lelile" allowClear options={[
                { value: 'value 1', label: 'Opción 1' },
                { value: 'value 2', label: 'Opción 2' },
                { value: 'value 3', label: 'Opción 3' },
                { value: 'value 4', label: 'Opción 4' },
                { value: 'value 5', label: 'Opción 5' },
                { value: 'value 6', label: 'Opción 6' },
                { value: 'value 22', label: 'Opción 22' },
                { value: 'value 33', label: 'Opción 33' },
                { value: 'value 44', label: 'Opción 44' },
                { value: 'value 55', label: 'Opción 55' },
                { value: 'value 66', label: 'Opción 66' },
              ]} />
            </div>
          </Form.Root>
      <div>
        { search 
          ? renderSearchProducts()
          : renderAllProducts()
        }
      </div>
    </main>
  )
}
