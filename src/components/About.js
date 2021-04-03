import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="five columns">

               <img className="profile-pic"  src="images/profilepicture.jpg" alt="profile" />
               <img className="profile-pic2"  src="images/profilepicture2.jpg" alt="profile" />

            </div>

            <div className="seven columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span> Casablanca</span>
                    <span> 25 Years old</span>
       					   </p>
                         <span> Profile : <a href={resumeData.socialLinks[0].url}>{resumeData.socialLinks[0].name}</a></span><br></br>
                         <span> Profile : <a href={resumeData.socialLinks[1].url}>{resumeData.socialLinks[1].name}</a></span><br></br>
                         <span> Profile : <a href={resumeData.socialLinks[2].url}>{resumeData.socialLinks[2].name}</a></span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}