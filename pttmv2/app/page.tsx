import Navbar from "../app/components/navbar/navbar.comp";
import Carousel from "../app/components/carousel/carousel.comp";
import Footer from "../app/components/footer/footer.comp";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="home-container container-fluid">
        <h3 className="text-indent">Delicous Poke only at Poke To The Moon!</h3>
        <h1 className="home-header">What is Poke?</h1>
        <h4 className="home-intro text-indent">
          A poke bowl is a Hawaiian dish that typically consists of marinated
          diced raw fish served over a bed of rice with various toppings such as
          vegatables, fruits, and sauces. It is a healthy and flavorful meal
          that has become popular globally for its unique taste and versatility.
          Here at Poke to the Moon, we emphasize poke`&apos;`s versatility with
          our boujee add ons that are unique to our poke place.
        </h4>
      </div>
      <Footer />
    </div>
  );
}
