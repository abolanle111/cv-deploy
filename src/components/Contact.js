import React from 'react'
import { GrMapLocation, GrContactInfo, GrMail, GrGithub } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
        <h1 className='App-name'>
            OJO <br /><span> AYOMIDE</span>
        </h1>


        <div className="app-contact-de">
            <div className="row">
                <GrMapLocation  className="icon" />
                <p>11,Lanchester street Onike,Lagos State</p>
            </div>

            <div className="row">
                <GrContactInfo  className="icon"/>
                <p>+234-708-920-1275</p>
            </div>

            <div className="row">
               <GrMail  className="icon"/>
                <p>ojoayomide571@gmail.com</p>
            </div>

            <div className="row">
                <GrGithub className='icon'/>
                <p>ojoayomide571@gmail.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Contact