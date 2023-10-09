'use client'

import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react"
import Image from "next/image"
import { X as CloseIcon } from "lucide-react"
import { ProductModalAtom } from "../../stores/atoms"
import { useAtom } from "jotai"
import { Product } from "../../models/products/types"

interface Props {
  product: Product
}

const ProductModal = ({ product }: Props) => {
  const [isModalOpen, setIsModalOpen] = useAtom(ProductModalAtom)

  return (
    <Modal 
      isOpen={isModalOpen} 
      hideCloseButton 
      onClose={() => setIsModalOpen(false)} 
      placement="center"
      scrollBehavior="inside"
      size="xs"
    >
      <ModalContent className="pb-3">
        <ModalHeader className="flex items-center justify-between text-md">
          {product.name}
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
          {/* <Image className="rounded-lg" src={codeImg} alt="mapa de envios" /> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal
