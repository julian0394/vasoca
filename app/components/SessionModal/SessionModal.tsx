'use client'
import { Button, Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Input, Card, CardBody } from "@nextui-org/react"
import { X as CloseIcon } from "lucide-react"
import { useAtom } from "jotai"
import { sessionAtom } from "../../stores/atoms"
import { useState } from "react"

const SessionModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(sessionAtom)
  const [selected, setSelected] = useState("photos");
  
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
          Inicio de sesión
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
          <Tabs>
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SessionModal
