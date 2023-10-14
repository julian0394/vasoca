import { Card, CardBody, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { Product } from '../../models/products/types'
import { Snowflake as SnowflakeIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import FlavorChip from '../Flavorchip/FlavorChip'
import { productModalAtom, selectedProductAtom } from '../../stores/atoms'
import { useAtom } from 'jotai'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { name, img, shortDesc, flavor, hasMint, isNew, soldOut } = product
  const [ , setOpenProdModal ] = useAtom(productModalAtom)
  const [ , setSelectedProduct ] = useAtom(selectedProductAtom)
  
  return (
    <Card
      isPressable
      className={twMerge('relative', !soldOut && 'cursor-pointer')}
      onClick={() => {
        setSelectedProduct(product)
        setOpenProdModal(true)
      }}
    >
      { isNew && <Chip className='absolute top-1 left-1 bg-gradient-to-br from-indigo-500 to-pink-500 border border-white/50 text-xs font-semibold text-white' size='sm'>Novedad</Chip> }
      
      <CardBody>
        <h2 className={twMerge('text-center font-bold uppercase mb-2 text-sm', soldOut && 'text-slate-400', isNew && 'mt-4')}>{name}</h2>
        <div className="relative">
          <Image src={img} className="rounded-lg select-none" alt="producto ilustrativo" />
          { soldOut &&
            <span className="absolute top-0 w-full text-center text-xs text-white bg-red-500/70 text-sm tracking-wide select-none rounded-t-lg">Sin stock</span>
          }
        </div>
        <p className='text-xs'>{shortDesc}</p>
        <div className='flex justify-between items-center mt-3'>
          { flavor && <FlavorChip flavor={flavor} /> }
          { hasMint && <SnowflakeIcon size={18} className='text-sky-300' />}
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
