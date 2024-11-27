import React from 'react';
import logo from './logo.svg';


// Header import(s)
import Header from './modules/mainpage/header/Header'; 


// Body import(s)
import LiveWeather from './modules/mainpage/live_weather/LiveWeather';



// Footer import(s)
import Footer from './modules/mainpage/footer/Footer';



function App() {



  return (
    <div className="app-page">


      <div className="app-header">
        <Header />
      </div>


      <div className="app-body">
        <LiveWeather />
      </div>
        

      <div className="app-footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
// some comment