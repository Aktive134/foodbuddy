/* eslint-disable react/prop-types */
import './DescriptionImage.css'
function DescriptionImage(props) {
  const { src, alt } = props;
  return (
    <div className="step__imagebox">
      <img src={src} alt={alt} className="step__image" />
    </div>
  );
}

export default DescriptionImage;
