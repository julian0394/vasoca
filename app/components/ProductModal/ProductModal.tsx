'use client'

import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader, Radio, RadioGroup } from "@nextui-org/react"
import { X as CloseIcon } from "lucide-react"
import { productModalAtom, selectedProductAtom } from "../../stores/atoms"
import { useAtom } from "jotai"
import Image from "next/image"
import vasocaImg from '../../assets/img/vvlogo2.png'
import { twMerge } from "tailwind-merge"

const ProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(productModalAtom)
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom)

  const radioStyles = {
    base: twMerge(
      "inline-flex m-0 p-1 items-center justify-between border border-slate-600",
      "w-full cursor-pointer rounded-lg",
    ),
  }

  return (
    <Modal 
      isOpen={isModalOpen} 
      hideCloseButton 
      onClose={() => {
        setIsModalOpen(false)
        setSelectedProduct(null)
      }} 
      placement="center"
      scrollBehavior="inside"
      size="sm"
    >
      <ModalContent className="pb-3">
        <ModalHeader className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            { <span className="text-lg uppercase">{selectedProduct?.name}</span> ?? 'Sin nombre' }
            { selectedProduct?.soldOut && <span className="text-sm text-red-500/90 tracking-wide">Agotado</span> }
          </span>
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
          <Image src={selectedProduct?.img ?? vasocaImg} alt='portada de producto ilustrativa' />
          <p className="text-sm">{selectedProduct?.descrption ?? 'Sin descripción'}</p>
          
          <Divider />

          <div className="text-sm">
            <span>Opciones:</span>
            <RadioGroup
              color="secondary"
              defaultValue="london"
              size="sm"
            >
              <Radio classNames={radioStyles} value="buenos-aires">Buenos Aires</Radio>
              <Radio  value="sydney">Sydney</Radio>
              <Radio  value="san-francisco">San Francisco</Radio>
              <Radio  value="london">London</Radio>
              <Radio  value="tokyo">Tokyo</Radio>
            </RadioGroup>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal
