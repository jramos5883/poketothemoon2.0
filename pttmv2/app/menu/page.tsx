import Navbar from "../components/navbar/navbar.comp";
import Image from "next/image";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Image
        src="/images/pokemenu.png"
        alt="Menu"
        layout="responsive"
        width={772}
        height={1000}
      />
    </div>
  );
};

export default Menu;
