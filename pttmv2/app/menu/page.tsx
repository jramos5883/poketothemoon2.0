import Navbar from "../components/navbar/navbar.comp";
import Footer from "../components/footer/footer.comp";
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
      <Footer />
    </div>
  );
};

export default Menu;
