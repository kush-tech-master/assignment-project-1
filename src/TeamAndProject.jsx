import person1 from "./dist/person1.png"
import person2 from "./dist/person2.png"
import person3 from "./dist/person3.png"
import project1 from "./dist/project-1.png"
import project2 from "./dist/project-2.png"
import project3 from "./dist/project-3.png"
import asset8 from"./dist/Asset8.png"
import "./TeamAndProject.scss"


export default function TeamAndProject(){

    return (
        <>
        <div className="team-and-project">
            <div className="team">
                <div className="team-title">  
                    
                        <h1>OUR TEAM</h1>
                        <div className="service-underline-1 mt-4">

                        </div>
                        <div className="service-underline-2 ">

                        </div>
                 </div>
                <div className="team-photos mt-24">
                    <div className="team-photo-1">
                        <img src={person1} />
                        <p className="text-center mt-12">Jessica D’suza</p>
                    </div>
                    <div className="team-photo-2">
                        <img src={person2} />
                        <p className="text-center mt-12">Johny Williams</p>
                    </div>
                    <div className="team-photo-3">
                        <img src={person3} />
                        <p className="text-center mt-12">Sanya R,</p>
                    </div>
                </div>
            </div>
            <img src={asset8} id="asset8" />
            <div className="project">
                <div className="project-title">  
                        
                        <h1 >OUR PROJECTS</h1>
                        <div className="service-underline-1 mt-4 ">

                        </div>
                        <div className="service-underline-2 ">

                        </div>
                </div>
                
                <div className="project-photos mt-28">
                    <div className="project-photo-1">
                        <img src={project1} />
                    </div>
                    <div className="project-photo-2">
                        <img src={project2} />
                        <img src={project3} />
                    </div>
                </div>
            </div>








        </div>

        </>
    )
}