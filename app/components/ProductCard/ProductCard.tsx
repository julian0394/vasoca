import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import { Product } from '../../models/products/types'
import { Heart as HeartIcon, Snowflake as SnowflakeIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import FlavorChip from '../FlavorChip/FlavorChip'
import { productModalAtom, selectedProductAtom } from '../../stores/atoms'
import { useAtom } from 'jotai'

interface Props {
  product: Product
}

//!
//!
//! ########## Crear boton para agregar a favorito dentro de modal de producto (y icono de corazon tachado)
//  todo: Crear select
//  todo: Agregar iconos a inputs
//!
//!

const ProductCard = ({ product }: Props) => {
  const { name, img, shortDesc, flavor, hasMint, isNew, soldOut, isFavorite } = product
  const [ , setOpenProdModal ] = useAtom(productModalAtom)
  const [ , setSelectedProduct ] = useAtom(selectedProductAtom)
  
  return (
    <Card
      isPressable
      className={twMerge('relative', soldOut ? 'bg-gray-200 dark:bg-gray-700' : 'cursor-pointer')}
      onClick={() => {
        setSelectedProduct(product)
        setOpenProdModal(true)
      }}
    >      
      <CardBody className='p-3'>
        <h2 className={twMerge('text-center font-bold uppercase mb-2 text-sm', soldOut && 'text-slate-500')}>{name}</h2>
        <div className="relative">
          <Image src={img} className="rounded-lg select-none" alt="producto ilustrativo" />
          { isNew && <span className='absolute top-0 w-full rounded-t-lg text-center text-sm font-semibold text-white tracking-wide bg-gradient-to-br from-indigo-500 to-pink-500 border border-black/30 dark:border-white/50'>Novedad</span> }
          { isFavorite && <HeartIcon size={20} className={twMerge('text-rose-500 absolute top-1 right-1', isNew && 'top-6')} fill='red' /> }
          { soldOut &&
            <span className="absolute bottom-0 w-full rounded-b-lg text-sm text-center tracking-wide select-none text-white bg-red-700">Sin stock</span>
          }
        </div>
        <p className='text-xs pt-2'>{shortDesc}</p>
        <div className='flex justify-between items-center mt-3'>
          { flavor && <FlavorChip flavor={flavor} /> }
          { hasMint && <SnowflakeIcon size={18} className='text-sky-300' />}
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
