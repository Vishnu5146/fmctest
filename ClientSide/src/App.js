import React from 'react';
import { Route, Switch, BrowserRouter as Router, useRouteMatch } from 'react-router-dom'

//IMPORTING PAGES
import HomePageView from './Pages/HomePage.View'
import HeaderView from './Components/Header/Header.View'

//IMPORTING THE PAGES
import AboutUsView from "./Pages/AboutUs.View";
import ContactUsView from "./Pages/ContactUs.View";
import LocateUsView from "./Pages/LocateUs.View";
import HowItWorks from "./Pages/HowItWorks.View";
import DetailedServicesView from "./Pages/DetailedServices.View"
import ServicesPageView from './Pages/ServicesPage.View'

function App() {



  return (
    <div className="app">
      <Router>
        <HeaderView />
        <Switch>
          <Route exact path="/" render={() => <HomePageView />} />
          <Route exact path="/aboutus" component={AboutUsView} />
          <Route exact path="/contactus" component={ContactUsView} />
          <Route exact path="/locateus" component={LocateUsView} />
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/allservices" component={ServicesPageView} />
          <Route exact path="/detailedServices/:service/:id" component={DetailedServicesView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
