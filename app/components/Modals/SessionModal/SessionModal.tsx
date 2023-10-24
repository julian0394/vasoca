'use client'
import { useState } from "react"
import { Button, Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import { X as CloseIcon } from "lucide-react"
import { useAtom } from "jotai"
import { sessionAtom } from "../../../stores/atoms"
import FormLogin from "./FormLogin"
import FormSignup from "./FormSignup"
import { ANIMATION_FROM_TOP } from "../../../models/constants"

const SessionModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(sessionAtom)
  const [tabSelected, setTabSelected] = useState<'login' | 'signup'>('login')

  return (
    <Modal
      isOpen={isModalOpen} 
      onClose={() => {
        setTabSelected('login')
        setIsModalOpen(false)
      }} 
      className="min-h-[35rem]"
      placement="center"
      size="md"
      scrollBehavior="inside"
      hideCloseButton
      motionProps={ANIMATION_FROM_TOP}
    >
      <ModalContent className="pb-3">
        <ModalHeader className="flex items-center justify-between text-lg tracking-wide">
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
          <Card>
            <CardBody className="bg-slate-700/30 w-full h-full">
              <Tabs
                className="mb-5"
                classNames={{
                  tabContent: 'dark:text-white dark:group-data-[selected=true]:text-white',
                  tabList: 'dark:bg-slate-700',
                  cursor: "dark:group-data-[selected=true]:bg-slate-600"
                }}
                fullWidth
                selectedKey={tabSelected}
                // @ts-ignore
                onSelectionChange={setTabSelected}
              >
                <Tab key="login" title="Iniciar sesión">
                  {/* <h3 className="font-medium mb-5 mt-3 tracking-wide">Bienvenido de nuevo!</h3> */}
                  <FormLogin />
                  <p className="text-sm mt-8">No tenés cuenta? <span className="text-sky-500 hover:text-blue-500 underline cursor-pointer" onClick={() => setTabSelected('signup')}>Registrate acá.</span></p>
                </Tab>
                <Tab key="signup" title="Registrarse">
                  {/* <h3 className="font-medium mb-5 mt-3 tracking-wide">Comenzá acá!</h3> */}
                  <FormSignup />
                  <p className="text-sm mt-8">Ya estás registrado? <span className="text-sky-500 hover:text-blue-500 underline cursor-pointer" onClick={() => setTabSelected('login')}>Ingresá acá.</span></p>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SessionModal
