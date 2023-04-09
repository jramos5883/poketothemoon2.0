import Navbar from "../components/navbar/navbar.comp";
import Footer from "../components/footer/footer.comp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-pic-container container-fluid">
        <Image
          src="/images/pokeAboutUs.jpg"
          alt="Resturant Image"
          layout="responsive"
          width={4500}
          height={3000}
        />
      </div>
      <div className="aboutus-content-container container-fluid">
        <p>Delicous Poke only at Poke To The Moon</p>
        <h2>About Us</h2>
        <p>
          Welcome to Poke to the Moon, The ultimate destination for poke lovers
          in the city of Orange! Our unique poke shop is dedicated to brining
          you the most flavorful and satisfying poke bowls using the freshiest
          ingredients available. At Poke to the Moon, we take pride in our
          home-made signature sauces that are simply out of this world. Our Moon
          Sauce, a Cajun Garlic Butter, Ape Sauce, a Spicy Soy Garlic, and Doge
          Sauce, a Soy Sesame, are all uniquely crafted to elevate your poke
          bowl experience. Each sauce is carefully prepared with a perfect
          balance of flavors that will leave you wanting more.
        </p>
        <p>
          Our custom poke bowls allow you to create your own masterpiece with a
          wide range of fresh and healthy ingredients to choose from. We also
          offer boujee toppings such as bone marrow, salmon skin, and truffle to
          take your poke bowl to the next level. Located inside the Village
          mall, we offer a comfortable and welcoming atmosphere where you can
          enjoy your poke bowl with family and friends. Our friendly staff is
          dedicated to providing exceptional service and making sure that you
          leave our shop satisfied and happy.
        </p>
        <p>
          Thank you for choosing Poke to the Moon as your go-to poke spot. We
          look forward to serving you soon!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
