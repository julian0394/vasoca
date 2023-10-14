import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, NavbarItem } from "@nextui-org/react"
import { BatteryCharging, ChevronDown, Flag, FlaskConical, Smartphone, Sparkles, Star, TrainTrack, Zap } from 'lucide-react'
import { List as MenuIcon } from "lucide-react"

const NavDropdown = () => {
  return (
    <Dropdown className="bg-slate-700">
      <DropdownTrigger>
        <Button
          className="p-2 data-[selected=true]:bg-red-500"
          radius="sm"
          variant="light"
          isIconOnly
        >
          <MenuIcon size={25} className="text-slate-600 dark:text-slate-100" />
        </Button>
      </DropdownTrigger>
      
      <DropdownMenu aria-label="Productos" className="w-[340px]" itemClasses={{ base: "gap-4" }}>
        <DropdownSection title="Líquidos" showDivider classNames={{heading: 'font-medium text-slate-300'}}>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Confeccionados con una gran cantidad de esencias importadas.'
            startContent={<Sparkles className="text-yellow-500" />}
          >
            Línea Premium
          </DropdownItem>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Esencias importadas pero en menor cantidad.'
            startContent={<Star className="text-emerald-400" />}
          >
            Línea Tradicionales
          </DropdownItem>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Elaborados con esencias nacionales.'
            startContent={<Flag className="text-sky-400" />}
          >
            Línea Low Cost
          </DropdownItem>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Producto especial solo para equipos específicos o PODS.'
            startContent={<FlaskConical className="text-violet-400" />}
          >
            Sales de nicotína
          </DropdownItem>
        </DropdownSection>
        
        <DropdownSection title="Otros productos" classNames={{heading: 'font-medium text-slate-300'}}>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Reparables o en blister.'
            startContent={<TrainTrack className="text-gray-400" />}
          >
            Resistencias
          </DropdownItem>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Baterias, cargadores, pirex, estuches, kits, etc.'
            startContent={<BatteryCharging className="text-rose-400" />}
          >
            Insumos
          </DropdownItem>
          <DropdownItem 
            className='py-3 data-[hover=true]:bg-slate-600' 
            key="autoscaling"
            description='Entonctrá equipos nuevos, usados o por encargo.'
            startContent={<Smartphone className="text-orange-400" />}
          >
            Equipos
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavDropdown
