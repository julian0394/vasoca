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
import { useTheme } from "next-themes"
import NavDropdown from "./NavProductDropdown"
import vasocaLogoSm from '../../assets/img/vvlogo1.png'
import vasocaLogoLg from '../../assets/img/vvlogo2.png'
import Image from "next/image"
import NavUser from "./NavUser"
import { 
  Moon as MoonIcon, 
  Sun as SunIcon, 
  ShoppingCart as CartIcon, 
  Search as SearchIcon 
} from "lucide-react"
import RouteLink from "next/link"
import NavSearchDrowpdown from "./NavSearchDrowpdown"
import NextLink from "next/link"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(false)

  const { theme, setTheme } = useTheme()

  const menuItems = [
    { label: 'Información', route: '/info' },
    { label: 'Líquidos Premium', route: '#premium' },
    { label: 'Líquidos Tradicionales', route: '#tradicional' },
    { label: 'Líquidos Nacionales', route: '#low-cost' },
    { label: 'Líquidos Cheap', route: '#cheap' },
    { label: 'Sales de nico', route: '#sales' },
    { label: 'Insumos', route: '#insumos' },
    { label: 'Equipos', route: '#equipos' },
    { label: 'Cerrar sesión', route: '/logout' },
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-200 dark:bg-slate-700">
      <NavbarContent className="max-w-5xl mx-auto">
        {/* Hamburguer menu toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        {/* Logo */}
        <NavbarBrand>
          <RouteLink href='/'>
            <Image src={vasocaLogoSm} alt="Logo de Vasoca" className="cursor-pointer" />
          </RouteLink>
          {/* <Image src={vasocaLogoLg} alt="Logo de Vasoca" height={60} className="lg:hidden" /> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <NavDropdown />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="py-1 px-2 data-[hover=true]:bg-transparent"
            radius="sm"
            variant="light"
            as={NextLink}
            href="/informacion"
          >
            Información
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="py-1 px-2 data-[hover=true]:bg-transparent text-slate-800 dark:text-slate-100"
            radius="sm"
            variant="light"
            as={NextLink}
            href='/contacto'
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="ml-28">
        <NavbarItem>
          <Button variant="light" isIconOnly>
            <CartIcon size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NavSearchDrowpdown />
        </NavbarItem>
        <NavbarItem>
          <Button variant="light" onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark'  )} isIconOnly>
            { theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} /> }
          </Button>
        </NavbarItem>
        <NavbarItem>
          { user
            ?
            <NavUser logout={setUser} />
            :
            <Button variant="solid" onClick={() => setUser( val => !val )}>
              Iniciar sesión
            </Button>
          }
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu>
        { menuItems.map((item, index) => (
          <NavbarMenuItem key={`menu-item-${item.label}`}>
            <Link
              color={ index === menuItems.length - 1 ? "danger" : "foreground" }
              className="w-full"
              href={item.route}
              size="lg"
              as={NextLink}
              //todo: onClick={() => setIsMenuOpen( !isMenuOpen )}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Nav
