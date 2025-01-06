import "./Footer.scss"
import facebook from "./dist/facebook.png"
import linkedin from "./dist/linkedin.png"
import google from "./dist/google.png"

export default function Footer(){

    return (
        <>
        <div className="footer">

            <div className="social">
                <h4>Social</h4>
                <ul>
                    <li><img src={facebook} />Facebook</li>
                    <li><img src={linkedin} />Linkedin</li>
                    <li><img src={google} />Google+ </li>
                </ul>
            </div>
            <div className="explore">
                <h4>Explore</h4>
                <ul>
                    <li>Service</li>
                    <li>Team</li>
                    <li>Client</li>
                </ul>
            </div>
            <div className="contact">
                <h4>Contact</h4>
                <ul>
                    <li>Lorem Ipsum dummy address</li>
                    <li>used for diaplay</li>
                    <li>1234567890</li>
                </ul>
            </div>
            <div className="email">
                <h4>Email</h4>
                <ul>
                    <li>mendlesoncommunication@email.com</li>
                    <li>&nbsp;</li>
                    <li> &nbsp;</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright 2018 Mendleson Communication Pty Ltd </p>
        </div>
        </>
    )
}