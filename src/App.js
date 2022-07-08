import { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import BannerIntro from './Components/BannerIntro';
import PrincipalCategories from './Components/PrincipalCategories';
import Slogan from './Components/Slogan';
import DesignFeatures from './Components/DesignFeatures';
import EcoFeatures from './Components/EcoFeatures';
import CallToAction from './Components/CallToAction';
import PrincipalFeatures from './Components/PrincipalFeatures';

function App() {
  return (
    <Fragment>
      <Header/>
      <Main>
        <BannerIntro/>
        <PrincipalCategories/>
        <Slogan/>
        <DesignFeatures/>
        <PrincipalFeatures/>
        <EcoFeatures/>
        <CallToAction/>
      </Main>
      <Footer/>
    </Fragment>
  );
}

export default App;
