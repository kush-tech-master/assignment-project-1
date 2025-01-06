import "./Header.scss"
import Asset1 from "./dist/Asset1.png"
import Asset2 from "./dist/Asset2.png"
import Asset3 from "./dist/Assets3.png"
import Asset4 from "./dist/Assets4.png"
import Graphic12 from "./dist/Graphic12.png"
import logo from "./dist/logo.png"
import Vectorsmart from "./dist/Vectorsmart-object.png"


export default function Header(){
    return ( 
      <> 
        
        <div className="header">
            <div className="navbar">
                <img src={logo} />
                <ul>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Team</li>
                    <li>Clients</li>
                    <li>Contact Us</li>
                </ul>
            </div >
               
            <div className="header_main-text">
                <p id="header_main-text-title" >
                    Mendleson
                    Communication &nbsp;
                    and Engagement</p>
                <p className="mt-6" id="header_main-text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>

            </div>
            <img src={Asset1} id="asset1" />
            <img src={Asset2} id="asset2" />
            <img src={Asset3} id="asset3" />
            <img src={Asset4} id="asset4" />
            <img src={Graphic12} id="graphic12"/>
            <img src={Vectorsmart} id="vector"/> 
               
        </div>
   
    </>  
      
    )
}