'use client'

import NextLink from "next/link"
import { 
  Accordion,
  AccordionItem,
  Button, 
  Divider, 
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react"
import { infoModalAtom } from "../../stores/atoms"
import { useAtom } from "jotai"
import { 
  X as CloseIcon, 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon, 
  Phone as PhoneIcon
} from "lucide-react"
import Image from "next/image"
import mapImg from '../../assets/img/img1.jpg'
import codeImg from '../../assets/img/img2.jpg'

const InfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(infoModalAtom)

  const itemClasses = {
    base: "py-0 w-full",
    title: "text-sm py-2",
    trigger: "data-[hover=true]:bg-default-100 rounded-lg",
    indicator: "text-medium",
    content: "text-small px-2 tracking-wide",
  }

  return (
    <Modal 
      isOpen={isModalOpen} 
      hideCloseButton 
      onClose={() => setIsModalOpen(false)} 
      placement="center"
      scrollBehavior="inside"
      defaultOpen={true}
    >
      <ModalContent className="pb-3">
        <ModalHeader className="flex items-center justify-between text-md">
          Información útil
          <Button 
            onClick={() => setIsModalOpen(false)}
            isIconOnly
            size="sm"
            className="text-slate-200"
            aria-label="cerrar modal"
          >
            <CloseIcon size={18} />
          </Button>
        </ModalHeader>
        <ModalBody>
          <span className="text-center font-semibold text-sm">Lunes a viernes de 9 a 14 hs</span>
          
          <Divider />
          
          <div className="flex flex-col gap-2">
            <Button 
              size="md"
              aria-label="ir a instagram"
              className="bg-gradient-to-r from-pink-600 to-fuchsia-600 font-medium text-xs text-white"
              as={NextLink}
              href='https://www.instagram.com/vasocavapecentral/'
            >
              <InstagramIcon size={18} />
              Vasoca Vape Central
            </Button>
            <Button 
              size="md"
              aria-label="ir a instagram"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 font-medium text-xs text-white"
              as={NextLink}
              href='https://api.whatsapp.com/send/?phone=5491123898137'
            >
              <PhoneIcon size={18} />
              11 2389-8137
            </Button>
            <Button 
              size="md"
              aria-label="ir a instagram"
              className="bg-gradient-to-r from-sky-600 to-blue-600 font-medium text-xs text-white"
              as={NextLink}
              href='https://www.facebook.com/vasocavape/'
            >
              <FacebookIcon size={18} />
              Vasoca Vape
            </Button>
          </div>

          <Divider />

          <Image className="rounded-lg" src={mapImg} alt="mapa de envios" />
          <Image className="rounded-lg" src={codeImg} alt="mapa de envios" />
          
          <Divider />

          <h3 className="text-sm">Preguntas frecuentes</h3>
          <Accordion
            variant='bordered'
            itemClasses={itemClasses}
            selectionMode="multiple"
            isCompact
          >
            <AccordionItem key="1" title="Cuándo tengo que hacer mi pedido para recibirlo en el día?">
              <p className="mb-5 font-thin text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos dolorem optio? Dolorum molestiae dolores ex delectus nostrum unde nesciunt.</p>
            </AccordionItem>
            <AccordionItem key="2" title="Cuál es la diferencia entre líneas premium y tradicionales?">
              <p className="mb-5 font-thin text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, a minima aut esse ipsum voluptas, est inventore quos enim dolorem voluptatem amet quam sint, asperiores odio natus perferendis ut voluptate velit? Aut aperiam dolorem deleniti, laborum ab quis nihil error!</p>
            </AccordionItem>
            <AccordionItem key="3" title="Tienen productos sin nico?">
              <p className="mb-5 font-thin text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus commodi illo esse! Tempore nulla obcaecati eius iusto vero id quis quaerat sunt libero dolor adipisci iste, fugit neque assumenda quas?</p>
            </AccordionItem>
            <AccordionItem key="4" title="Qué son las sales de nico?">
              <p className="mb-5 font-thin text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus commodi illo esse! Tempore nulla obcaecati eius iusto vero id quis quaerat sunt libero dolor adipisci iste, fugit neque assumenda quas?</p>
            </AccordionItem>
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default InfoModal
