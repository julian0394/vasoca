'use client'
import { useState } from "react"
import { Button, Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import { X as CloseIcon } from "lucide-react"
import { useAtom } from "jotai"
import { sessionAtom } from "../../stores/atoms"
import FormLogin from "./FormLogin"

const SessionModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(sessionAtom)
  const [tabSelected, setTabSelected] = useState('login')
  
  return (
    <Modal
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      placement="center"
      size="md"
      scrollBehavior="inside"
      hideCloseButton
    >
      <ModalContent className="pb-3">
        <ModalHeader className="flex items-center justify-between text-md">
          Acceso a cuenta
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
          <Tabs
            classNames={{
              tabContent: 'dark:text-white dark:group-data-[selected=true]:text-white',
              tabList: 'dark:bg-slate-700',
              cursor: "dark:group-data-[selected=true]:bg-slate-600"
            }}
            fullWidth
            selectedKey={tabSelected}
            onSelectionChange={setTabSelected}
          >
            <Tab key="login" title="Iniciar sesión">
              {/* content */}
            </Tab>
            <Tab key="signup" title="Registrarse">
              {/*content  */}
            </Tab>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SessionModal
