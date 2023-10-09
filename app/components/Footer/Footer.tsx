'use client'

import { Button, Badge, Divider, ButtonGroup } from "@nextui-org/react"
import { 
  Moon as MoonIcon, 
  Sun as SunIcon, 
  ShoppingCart as CartIcon,
  Info as InfoIcon, 
} from "lucide-react"
import NavSearchDrowpdown from "../NewNav/NavSearchDrowpdown"
import { useTheme } from "next-themes"
import { useState } from "react"
import { InfoModalAtom } from "../../stores/atoms"
import { useAtom } from "jotai"
import InfoModal from "../InfoModal/InfoModal"

const Footer = () => {
  const { theme, setTheme } = useTheme()
  const [cartItems, setCartItems] = useState(0)
  const [ infoModalOpen, setInfoModalOpen ] = useAtom(InfoModalAtom)

  const handleCartClick = () => {
    if(cartItems === 0) setCartItems(1)
    else setCartItems(0)
  }

  return (
    <>
      <footer className="absolute w-full bottom-0 px-2 py-1 bg-slate-900">
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
      <InfoModal />
    </>
  )
}

export default Footer
