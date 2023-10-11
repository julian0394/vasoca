'use client'

import { useState } from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react"
import vasocaLogoSm from '../../assets/img/vvlogo2.png'
import Image from "next/image"
import NavUser from "./NavUser"
import NextLink from "next/link"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(false)

  const menuItems = [
    { label: 'Información', route: '/info' },
    { label: 'Líquidos Premium', route: '#premium' },
    { label: 'Líquidos Tradicionales', route: '#tradicional' },
    { label: 'Líquidos Nacionales', route: '#low-cost' },
    { label: 'Líquidos Cheap', route: '#cheap' },
    { label: 'Sales de nico', route: '#sales' },
    { label: 'Insumos', route: '#insumos' },
    { label: 'Equipos', route: '#equipos' },
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false} className="pb-2 bg-slate-100 dark:bg-slate-900">
      <NavbarContent>
        {/* Hamburguer menu toggle */}
        <NavbarMenuToggle className="px-5" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
        
        {/* Logo */}
        <NavbarBrand>
          <NextLink href='/'>
            <Image src={vasocaLogoSm} alt="Logo de Vasoca" height={60} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          { user
            ?
            <NavUser logout={setUser} />
            :
            <Button 
              variant="solid" 
              size="sm"
              radius="sm" 
              onClick={() => setUser( val => !val )} 
              className="dark:text-white"
            >
              Iniciar sesión
            </Button>
          }
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu className="overflow-hidden">
        { menuItems.map( item => (
          <NavbarMenuItem key={`menu-item-${item.label}`}>
            <Link
              className="w-full py-2"
              href={item.route}
              color="foreground"
              size="lg"
              as={NextLink}
              //todo: onClick={() => setIsMenuOpen( !isMenuOpen )}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        { user && 
          <NavbarMenuItem key='menu-item-logout'>
            <Link
              color="danger"
              className="w-full py-2"
              href='/logout'
              size="lg"
              as={NextLink}
              //todo: onClick={() => setIsMenuOpen( !isMenuOpen )}
            >
              Cerrar sesión
            </Link>
          </NavbarMenuItem>
        }
      </NavbarMenu>
    </Navbar>
  )
}

export default Nav
