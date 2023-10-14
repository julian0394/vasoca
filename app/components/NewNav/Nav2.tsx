'use client'
import Image from "next/image"
import NextLink from "next/link"
import vasocaLogoSm from '../../assets/img/vvlogo2.png'
import { useState } from "react"
import NavUser from "./NavUser"
import { Button } from "@nextui-org/react"
import NavProductDropdown from "./NavProductDropdown"
import { useAtom } from "jotai"
import { sessionAtom } from "../../stores/atoms"

const Nav2 = () => {
  const [ user, setUser ] = useState(false)
  const [ , setSessionModalOpen ] = useAtom(sessionAtom)
  
  return (
    <header className="flex items-center justify-between px-3 py-2 h-16 bg-slate-100 dark:bg-slate-900">
      <div className="flex items-center gap-5">
        <NavProductDropdown />

        <NextLink href='/'>
          <Image src={vasocaLogoSm} alt="Logo de Vasoca" height={40} />
        </NextLink>
      </div>

      <div>
        { user
          ?
          <NavUser logout={setUser} />
          :
          <Button 
            variant="solid" 
            size="sm"
            radius="sm" 
            // onClick={() => setUser( val => !val )} 
            onClick={() => setSessionModalOpen(true)} 
            className="dark:text-white"
          >
            Iniciar sesión
          </Button>
        }
      </div>
    </header>
  )
}

export default Nav2
