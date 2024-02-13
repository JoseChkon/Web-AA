
import { Button, ButtonGroup } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const admin = true;

export default function ProductCard(props) {
    const navigate = useNavigate()
    const handleClick = (e) =>{
        e.preventDefault()
        navigate(`/products/${props.id}`)
    }
  
  return (
    <section className="p-2 ">
      <div className="w-[250px] ">
        <img
          src={`/imgs/${props.id}.jpg`}
          className="h-full object-cover"
        />
      </div>
      <div className="h-[100px] flex flex-col items-start">
        <div>
          <p className="text-black">Name</p>
          <p className="text-sm">(100) Disponibles</p>
        </div>

        <div className="flex justify-between w-full items-center">
          <p className="text-pale-brown font-bold">$0</p>
          {admin && (
            <div>
              <ButtonGroup>
                <Button
                onClick={handleClick}
                  className="bg-pale-brown"
                  variant="solid"
                  size="sm"
                >
                  Edit
                </Button>
                <Button color="danger" variant="solid" size="sm">
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
