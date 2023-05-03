import { images } from '../../constant';
import { DescriptionBox, DescriptionImage } from '../../component';
import './Work.css';
function Work() {
  return (
    <section className="work">
      <div className="work__container">
        <span className="work__subheading">How it works</span>
        <h2 className="work__text">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="work__container grid grid--cols-2">
          {/* step 01 */}
        <DescriptionBox
          number={'01'}
          title={'Tell us what you like (and what not)'}
          description={
            'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!'
          }
        />
        <DescriptionImage
          src={images.screenOne}
          alt={'iphone app preferences selection screen'}
        />
        {/* step 02 */}
        <DescriptionImage
          src={images.screenTwo}
          alt={'iphone app meal approving plan screen'}
        />
        <DescriptionBox
          number={'02'}
          title={'Approve your weekly meal plan'}
          description={
            'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.'
          }
        />
        {/* step 03 */}
        <DescriptionBox
          number={'03'}
          title={'Receive meals at convenient time'}
          description={
            'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!'
          }
        />
         <DescriptionImage
          src={images.screenThree}
          alt={'iphone app delivery screen'}
        />
      </div>
    </section>
  );
}

export default Work;
