import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ModalWindow() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={async () => {
          onOpenChange();
          setTimeout(() => {
            navigate("/products");
          }, 200);
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Product
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="text"
                    label="Product"
                    placeholder="name"
                    labelPlacement="outside"
                  />
                  <Input
                    type="number"
                    label="Price"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                  />
                  <Input
                    type="number"
                    label="Cantidad"
                    placeholder="***"
                    labelPlacement="outside"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={async () => {
                    onOpenChange();
                    setTimeout(()=>{
                      navigate("/products");
                    }, 200) 
                  }}
                >
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={async () => {
                    onOpenChange();
                    setTimeout(() => {
                      navigate("/products");
                    }, 200);
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
