import {
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
} from './imports';
import './MealImage.css';

function MealImage() {
  return (
    <div className="box__container">
      <div className="box__container_image">
        <img src={customer1} alt="customer photo" />
        <img src={customer2} alt="customer photo" />
        <img src={customer3} alt="customer photo" />
        <img src={customer4} alt="customer photo" />
        <img src={customer5} alt="customer photo" />
        <img src={customer6} alt="customer photo" />
      </div>

      <p className="box__container_text">
        <span>250,000+</span> meals delivered within last year!
      </p>
    </div>
  );
}

export default MealImage;
