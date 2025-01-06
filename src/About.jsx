import aboutus from "./dist/aboutus.png"
import engagement from "./dist/enagagement.png"
import communication from "./dist/coomunication.png"
import "./About.scss"
import asset5 from "./dist/Asset5.png"

export default function About(){
    return (
        <>
        <div className="aboutus">
            
            <img src={aboutus} id="aboutus-img" />
           
            <div className="aboutus-content">
                <div className="aboutus-title">
                <h1>ABOUT US</h1>
                <div className="aboutus-underline-1">

                </div>
                <div className="aboutus-underline-2">

                </div>

                </div>
                <p className="mt-3">We love what we do and are driven by achieving great results for our clients.
                     Our awards and impressive client list are testament to our high quality approach.
                     We deliver value, creaKvity, results and excepKonal 
                    levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                </p>
                <div className="aboutus-engage-commu">
                    <div className="aboutus-engagement">
                        <div className="engagement-title">

                           <img src={engagement}  />
                           <h1  className="mt-6">ENGAGEMENT</h1>
                           
                        </div>
                        <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                        READ MORE</p>
                    </div>
                    <div className="aboutus-communication md:ml-28">
                        <div className="communication-title">

                          <img src={communication}  />
                          <h1 className="mt-6">COMMUNICATION</h1>

                        </div>
                        <p >We are award-winning leaders in communications and campaign management.
                        READ MORE</p>
                    </div>
                </div>
            </div>
        </div>
        <img src={asset5} id="asset5" />
        </>
    )
}