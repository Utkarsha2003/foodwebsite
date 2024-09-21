import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Assuming your CSS is linked here
import logo from './meh.jpg';
import service1 from './hh-removebg-preview.png';
import service2 from './bg.jpg';
import service3 from './dilvry-removebg-preview.png';
import client1 from './hp.jpg';
import client2 from './skype.jpg';
import client3 from './apple.jpg';
import client4 from './micrsft.jpg';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div>
      <nav id="navbar">
        <div id="logo">
          <img src={logo} alt="MyOnlineMeals.com" />
        </div>
        <ul>
          <li className="item"><a href="#home">Home</a></li>
          <li className="item"><a href="#services-container">Services</a></li>
          <li className="item"><a href="#client-section">Our Clients</a></li>
          <li className="item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1 className="h-primary">Welcome to MyOnlineMeal</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia velit illo reprehenderit aliquam. Cupiditate, neque! Nobis, sint quaerat. Quaerat ad inventore vero. Aperiam!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia velit illo reprehenderit aliquam. Cupiditate, neque! Nobis, sint quaerat. Quaerat ad inventore vero. Aperiam!</p>
        <button className="btn">Order Now</button>
      </section>

      <section id="services-container">
        <h1 className="h-primary center">Our Services</h1>
        <div id="services" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="box">
            <img src={service1} alt="Food Catering" />
            <h2 className="h-secondary center">Food Catering</h2>
            <p className="center">Lorem IndIndian dishes, including traditional favorites like dosas, idlis, vadas, sambar, rasam, and a variety of chutneys. These dishes are prepared using fresh ingredients and traditional cooking methods, ensuring an authentic and flavorful experience.

</p>
          </div>
          <div className="box">
            <img src={service2} alt="Bulk Ordering" />
            <h2 className="h-secondary center">Bulk Ordering</h2>
            <p className="center">Indian catering service that specializes in providing delicious and authentic South Indian cuisine for various events and occasions. With a strong emphasis on quality and taste, SriNidhi Catering aims to bring the flavors of South India to your table.
The catering service .</p>
          </div>
          <div className="box">
            <img src={service3} alt="Food Ordering" />
            <h2 className="h-secondary center">Food Ordering</h2>
            <p className="center">Lorenge of South Indian dishes, including traditional favorites like dosas, idlis, vadas, sambar, rasam, and a variety of chutneys. These dishes are prepared using fresh ingredients and traditional cooking methods, ensuring an authentic and flavorful experience.
</p>
          </div>
        </div>
      </section>

      <section id="client-section">
        <h1 className="h-primary_center">Our Clients</h1>
        <div id="clients">
          <div className="client-item">
            <img src={client1} alt="HP Logo" />
            <img src={client2} alt="Skype Logo" />
            <img src={client3} alt="Apple Logo" />
            <img src={client4} alt="Microsoft Logo" />
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 className="h-primary_center">Contact Us</h1>
        <div id="contact-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" placeholder="Enter your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail: </label>
              <input type="email" name="email" id="email" placeholder="Enter your e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone-Number: </label>
              <input type="tel" name="phone" id="phone" placeholder="Enter your Phone-Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>    

      <footer>
        <div className="center">
          Copyright &copy; www.myOnlineMeal.com. All rights reserved.
        </div>
      </footer>

      {/* Display the API data */}
      <div>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
