import { Card, CardBody, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { Product } from '../../models/products/types'
import { Snowflake as SnowflakeIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import FlavorChip from '../Flavorchip/FlavorChip'
import { ProductModalAtom } from '../../stores/atoms'
import { useAtom } from 'jotai'
import ProductModal from '../ProductModal/ProductModal'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { name, img, shortDesc, flavor, hasMint, isNew, soldOut } = product
  const [ , setOpenProdModal ] = useAtom(ProductModalAtom)
  
  return (
    <>
      <Card isPressable={soldOut ? false : true} className='relative' onClick={() => setOpenProdModal(true)}>
      {/* <Card isPressable={soldOut ? false : true} className='relative' onClick={() => alert(product.name)}> */}
        { isNew && <Chip className='absolute top-1 left-1 bg-gradient-to-br from-indigo-500 to-pink-500 border border-white/50 text-xs font-semibold text-white' size='sm'>Novedad</Chip> }
        
        <CardBody>
          <h2 className={twMerge('text-center font-bold uppercase mb-2 text-sm', soldOut && 'text-slate-400', isNew && 'mt-4')}>{name}</h2>
          { soldOut 
            ?
            <div className="relative">
              <Image src={img} alt="producto ilustrativo" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <span className="text-red-500 bg-black/60 text-sm font-semibold tracking-wide">Sin stock</span>
              </div>
            </div>
            : 
            <Image src={img} className="rounded-lg" alt="producto ilustrativo" />
          }
          <p className='text-xs'>{shortDesc}</p>
          <div className='flex justify-between items-center mt-3'>
            { flavor && <FlavorChip flavor={flavor} /> }
            { hasMint && <SnowflakeIcon size={18} className='text-sky-300' />}
          </div>
        </CardBody>
      </Card>

      <ProductModal product={product} />
    </>
  )
}

export default ProductCard