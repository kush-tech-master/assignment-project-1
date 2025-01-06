import "./Client.scss"
import client1 from "./dist/client1.png"
import client2 from "./dist/client2.png"
import client3 from "./dist/client3.png"
import client4 from "./dist/client4.png"
import client5 from "./dist/client5.png"
import client6 from "./dist/client6.png"
import client7 from "./dist/client7.png"
import client8 from "./dist/client8.png"
import client9 from "./dist/client9.png"

export default function Client(){

    return (
        <>
        <div className="client">
             <div className="client-title">  
                        
                    <h1 >OUR CLIENTS</h1>
                    <div className="service-underline-1 mt-4 ">

                    </div>
                    <div className="service-underline-2 ">

                    </div>
            </div>
            <div className="client-photos mt-28">
                <div className="client-photo-1">
                    <img src={client1}/>
                </div>
                <div className="client-photo-2">
                    <img src={client2} />
                </div>
                <div className="client-photo-3">
                    <img src={client3} />
                </div>
                <div className="client-photo-4">
                    <img src={client4} />
                </div>
                <div className="client-photo-5">
                    <img src={client5} />
                </div>
                <div className="client-photo-6">
                    <img src={client6} />
                </div>
                <div className="client-photo-7">
                    <img src={client7} />
                </div>
                <div className="client-photo-8">
                    <img src={client8} />
                </div>
                <div className="client-photo-9">
                    <img src={client9} />
                </div>
            </div>

        </div>
        
        </>
    )
}