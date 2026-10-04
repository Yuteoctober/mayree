import '../css/Bodytwo.css';
import micelin from '../assets/picture/micel2.png';

function Bodytwo() {
  return (
    <>
        <div className="micellin_cntainer">
            <div className="michelin_pic_container">
                <img src={micelin} alt="Michelin Guide" />
            </div>
            
            <div className="micellin_text_container">
                <h1>Michelin Starred</h1>
                <p>Recognized by the Michelin Guide, MayRee Thai Kitchen brings the authentic flavors of Southern Thailand to the heart of Manhattan’s East Village. Our menu is inspired by traditional Southern Thai cuisine, featuring bold spices, fresh ingredients, aromatic herbs, and recipes rooted in Thai culinary traditions.</p>
                <br />
                <p>At MayRee, we invite guests to experience the rich and vibrant flavors of Southern Thailand in a warm, welcoming setting. Each dish is carefully prepared to showcase the balance, depth, and character that make Thai cuisine so distinctive.</p>
            </div>
        </div>


        <div className="bodytwo_container">
        <div className="bodytwo_text">
            <h1>Bespoke Cocktails in East Village</h1>
            <p>Whether you’re craving signature Southern curries, flavorful noodles, or craft cocktails, MayRee delivers an experience that locals and critics alike agree is one of the best in NYC.</p>
        </div>
        <div className="bodytwo_text">
            <h1>Authentic Southern Thai</h1>
            <p>Our chefs combine traditional recipes with fresh, high-quality ingredients to create dishes that are bold, spicy, and unforgettable.</p>
        </div>
        </div>
    </>
  )
}

export default Bodytwo
