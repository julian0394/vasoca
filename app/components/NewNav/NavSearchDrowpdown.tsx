import { useAtom } from "jotai"
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Search as SearchIcon } from "lucide-react"
import { searchAtom } from "../../stores/atoms"

const NavSearchDrowpdown = () => {
  const [search, setSearch] = useAtom(searchAtom)

  const handleChange = (newValue: string) => {
    setSearch(newValue)
  }

  return (
      <Popover offset={10} placement='top'>
        <PopoverTrigger>
          <Button className='w-full dark:text-white' isIconOnly aria-label="buscar producto">
            <SearchIcon size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[94vw] mx-auto">
          <Input
            value={search}
            onValueChange={(value) => handleChange(value)}
            placeholder="Buscar"
            description='Buscar en todos los productos'
            variant="bordered"
            className="py-3"
            autoFocus
            isClearable
          />
        </PopoverContent>
      </Popover>
  )
}

export default NavSearchDrowpdown
