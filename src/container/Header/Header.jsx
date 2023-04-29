import { images } from '../../constant';
import { MealImage } from '../../component';
import './Header.css';

function Header() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__textbox">
          <h1 className="hero__text--primary">
            A healthy meal delivered to your door every single day.
          </h1>
          <p className="hero__description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className=" btn hero__button--primary margin-right-sm">
            Start eating well
          </a>
          <a href="#" className=" btn hero__button--secondary">
            Learn more &darr;
          </a>
          <MealImage />
        </div>
        <div className="hero__imagebox">
          <img
            src={images.hero}
            alt="woman enjoying food, meals in storage container, and bowls on a table"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
