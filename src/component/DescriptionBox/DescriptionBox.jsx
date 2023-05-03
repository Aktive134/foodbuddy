/* eslint-disable react/prop-types */
import './DescriptionBox.css'
function DescriptionBox(props) {
  const { number, title, description } = props;

  return (
    <>
      <div className="step_textbox">
        <p className="step__number">{number}</p>
        <h3 className="step__title">{title}</h3>
        <p className="step__description">{description}</p>
      </div>
    </>
  );
}

export default DescriptionBox;
