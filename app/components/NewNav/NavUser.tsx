import { NavbarContent, DropdownTrigger, DropdownMenu, DropdownItem, Dropdown, Avatar } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"

interface Props {
  logout: Dispatch<SetStateAction<boolean>>
}

const NavUser = ({ logout }: Props) => {
  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Cuenta:</p>
            <p className="font-semibold italic">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">Configuración de cuenta</DropdownItem>
          <DropdownItem key="team_settings">Pedido favorito</DropdownItem>
          <DropdownItem key="analytics">Carrito actual</DropdownItem>
          <DropdownItem className="text-red-500" key="logout" color="danger" onClick={() => logout(false)}>
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}

export default NavUser
