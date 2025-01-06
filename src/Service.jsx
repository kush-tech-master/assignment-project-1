import "./Service.scss"
import service1 from "./dist/service1.png"
import service2 from "./dist/service2.png"
import service3 from "./dist/service3.png"
import service4 from "./dist/service4.png"
import service5 from "./dist/service5.png"
import asset6 from  "./dist/Asset6.png"
import asset5 from  "./dist/Asset5.png"
import asset7 from  "./dist/Asset7.png"
import asset82 from "./dist/Asset8.2.png"


export default function Service(){

    return (
        <>
            <img src={asset6} id="asset6" />
        <div className="service ">
            <div className="service-title">
                <h1>SERVICES</h1>
                <div className="service-underline-1 mt-4">

                </div>
                <div className="service-underline-2 ">

                </div>

            </div>

            <div className="service-1 ">
                <div className="service-1-content mr-40 mt-24">
                    <h1>ENGAGEMENT</h1>
                  <p>We love what we do and are driven by achieving great results for our clients. 
                    Our awards and impressive client list are testament to our high quality approach.
                     We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                     We specialise in infrastructure development, energy and natural resources.
                     </p>
                </div>
                <img src={service1} id="service-1"  />
            </div>

            <div className="service-2 mt-8">
                <img src={service2} id="service-2"  />
                <div className="service-2-content ml-44 mt-16">
                    <h1>COMMUNICATION</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci.
                     Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. 
                     </p>
                </div>
            </div>

            <div className="service-3 mt-8">
            <div className="service-3-content mr-40 mt-20">
                    <h1>FACILITATION</h1>
                  <p>We love what we do and are driven by achieving great results for our clients. 
                    Our awards and impressive client list are testament to our high quality approach.
                     We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                     We specialise in infrastructure development, energy and natural resources.
                     </p>
                </div>
                <img src={service3} id="service-3"  />
            </div>
           

            <div className="service-4 mt-8">
                <img src={service4} id="service-4"  />
                <div className="service-4-content ml-44 mt-32">
                    <h1>CONSULTATION AND RESEARCH   </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci.
                     Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. 
                     </p>
                </div>
            </div>
            
            <div className="service-5 mt-8">
            <div className="service-5-content mr-48 mt-5">
                    <h1> TRAINING AND MONITORING </h1>
                  <p>We love what we do and are driven by achieving great results for our clients. 
                    Our awards and impressive client list are testament to our high quality approach.
                     We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                     We specialise in infrastructure development, energy and natural resources.
                     </p>
                </div>
                <img src={service5} id="service-5"  />
            </div>
        </div>
        <img src={asset82}  id="asset82"/>
        <img src={asset7} id="asset7" />
            <img src={asset5} id="asset5-2" />
        </>
    )
}