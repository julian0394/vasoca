import Image, { StaticImageData } from "next/image";
import ProductCard from "../components/ProductCard/ProductCard"
import { productList } from "../models/products"
import { Category } from "../models/products/types"
import { v4 as uuid } from 'uuid';

interface CategoryArgs {
  category: Category
  banner: StaticImageData
}

const renderCategory = ({ category, banner }: CategoryArgs) => {
  return (
    <div className='flex flex-col mb-5'>
      <Image src={banner} alt={`banner categoria ${category}`} className='mb-2 select-none' />
      <div className='grid grid-cols-2 gap-1'>
        { productList[category].map( prod => (
          <ProductCard key={uuid()} product={prod} /> ) 
        )}
      </div>
    </div>
  )
}

export default renderCategory
