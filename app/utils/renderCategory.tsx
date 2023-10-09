import ProductCard from "../components/ProductCard/ProductCard"
import { productList } from "../models/products"
import { Category } from "../models/products/types"
import { v4 as uuid } from 'uuid';

const renderCategory = (category: Category) => {
  return (
    <div className='grid grid-cols-2 gap-1'>
      { productList[category].map( prod => <ProductCard key={uuid()} product={prod} /> ) }
    </div>
  )
}

export default renderCategory
