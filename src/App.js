import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';


class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container" && ".center");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3000));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
        <div className="App">
           <Header resumeData={resumeData}/>
           <About resumeData={resumeData}/>
           <Resume resumeData={resumeData}/>
           <Portfolio resumeData={resumeData}/>
           <Testimonials resumeData={resumeData}/>
           <ContactUs resumeData={resumeData}/>
           <Footer resumeData={resumeData}/>
         </div>
    );
  }
}

export default App;