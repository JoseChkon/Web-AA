
import Header from "../layouts/General/Header";
import Footer from "../layouts/General/Footer";
import Gallery from "../layouts/Products/Gallery";
import { useParams } from "react-router-dom";
import ModalWindow from "../layouts/Products/ModalWindow";

export default function Products() {
  const param = useParams();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header TOF={false} />
      {param.id ? (
        <>
          <ModalWindow />
          <div className="px-10">
            <Gallery />
          </div>
        </>
      ) : (
        <div className="px-10">
          <Gallery />
        </div>
      )}
      <Footer />
    </div>
  );
}
