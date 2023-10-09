import { useAtom } from "jotai"
import { Button, Input, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Search as SearchIcon } from "lucide-react"
import { searchAtom } from "../../stores/atoms"

const NavSearchDrowpdown = () => {
  const [search, setSearch] = useAtom(searchAtom)

  return (
    <NavbarItem>
      <Popover placement="bottom" showArrow offset={10}>
        <PopoverTrigger>
          <Button variant="light" isIconOnly>
            <SearchIcon size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          <Input
            value={search}
            onValueChange={setSearch}
            placeholder="Buscar"
            description='Buscar en todos los productos'
            variant="bordered"
            className="py-3"
            autoFocus
            isClearable
          />
        </PopoverContent>
      </Popover>
    </NavbarItem>
  )
}

export default NavSearchDrowpdown
