import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

// Dummy components for routes
// const Home = () => <div>Home Page</div>;
// // const About = () => <div> About Page </div>;
// const Services = () => <div>Services Page</div>;
// const Project = () => <div>Project Page</div>;
// const Contact = () => <div>Contact Page</div>;

function App() {
  return (
  
    <div>
      
      <Navbar />
      <Banner/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
     
    
  )
}

export default App;
