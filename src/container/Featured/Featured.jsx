import { images } from "../../constant"
import "./Featured.css"
function Featured() {
  return (
    <section className="featured">
        <div className="featured__container">
            <h2 className="featured__heading">As featured in</h2>
            <div className="featured__logos">
                <img src={images.techcrunch} alt="Techcrunch logo"/>
                <img src={images.businessInsider} alt="businessInsider logo" />
                <img src={images.forbes} alt="forbes logo"/> 
                <img src={images.newYorkTimes} alt="New York Times logo"/>
                <img src={images.usaToday} alt="USA Today logo"/>
            </div>
        </div>
    </section>
  )
}

export default Featured