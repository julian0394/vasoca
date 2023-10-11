'use client'

import { Button, Badge, ButtonGroup } from "@nextui-org/react"
import { 
  Moon as MoonIcon, 
  Sun as SunIcon, 
  ShoppingCart as CartIcon,
  Info as InfoIcon, 
} from "lucide-react"
import NavSearchDrowpdown from "../NewNav/NavSearchDrowpdown"
import { useTheme } from "next-themes"
import { useState } from "react"
import { infoModalAtom } from "../../stores/atoms"
import { useAtom } from "jotai"

const Footer = () => {
  const { theme, setTheme } = useTheme()
  const [ cartItems, setCartItems ] = useState(0)
  const [ , setInfoModalOpen ] = useAtom(infoModalAtom)

  const handleCartClick = () => {
    if(cartItems === 0) setCartItems(1)
    else setCartItems(0)
  }

  return (
    <>
      <footer className="px-3 pb-1 pt-2 bg-slate-900">
        <ButtonGroup radius="lg" className="mx-auto w-[100%]">
          <Button isIconOnly onClick={handleCartClick} className='w-full dark:text-white' aria-label="carrito">
            <Badge content={cartItems} size="md" color="danger" isInvisible={cartItems === 0} className="ml-5">
              <CartIcon size={22} />
            </Badge>
          </Button>

          <NavSearchDrowpdown />

          <Button 
            onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark'  )} 
            className='w-full dark:text-white'
            isIconOnly
            aria-label="cambiar modo noche"
          >
            { theme === 'dark' ? <SunIcon size={22} /> : <MoonIcon size={22} /> }
          </Button>

          <Button isIconOnly className='w-full dark:text-white' onClick={() => setInfoModalOpen(true)} aria-label="informacion">
            <InfoIcon size={22} />
          </Button>
        </ButtonGroup>
      </footer>
    </>
  )
}

export default Footer
