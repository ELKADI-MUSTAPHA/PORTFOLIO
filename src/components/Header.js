import React, { Component } from 'react';

export default class Header extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state={
        show:true,
        windowWidth: window.innerWidth,
        disable: true
    }
  }

  handleResize = (e) => {
    if(window.innerWidth > 767 ){
      this.setState({show: true, disable: false})
    }else{
      this.setState({show: false, disable: true})
    }
    this.setState({ windowWidth: window.innerWidth });

   };
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
   }
   componentWillUnMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
   }
   handleClick () {
     if(this.state.disable){
      this.setState({ show: false });
     }
      return null;
   }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
           <button className="toggle-btn" onClick={()=>{this.setState({show:!this.state.show})}}><i className={resumeData.barClassName}></i></button>
            {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            {this.state.show? <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home"  onClick={this.handleClick}>Home</a></li>
               <li><a className="smoothscroll" href="#about" onClick={this.handleClick}>About</a></li>
               <li><a className="smoothscroll" href="#resume" onClick={this.handleClick}>Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio" onClick={this.handleClick}>Works</a></li>
               <li><a className="smoothscroll" href="#testimonials" onClick={this.handleClick}>Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact" onClick={this.handleClick}>Contact</a></li>
            </ul> : null}
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
           
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map((item, index) =>{
                      return(
                              <li  key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}