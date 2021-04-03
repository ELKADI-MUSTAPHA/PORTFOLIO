import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color: "white"}}>
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Available Now :</h4>
                <ul>
                  {resumeData.infos.map((item, index) => {
                      return <li key={index}><span>{item.name} </span>: {item.info}</li>
                    })}
                </ul>
                  
              </div>
            </aside>
          </div>
        </section>
        );
  }
}