// [rafc] is a shortcut for the boiler plate code of this app page.
import React from 'react'


// import Article from './components/Article/Article';
// import Brand from './components/Brand/Brand';
// import CTA from './components/CTA/CTA';
// import Feature from './components/Feature/Feature';
// import Navbar from './components/Navbar/Navbar';
// In the above lines of code we have imported all the components created for the project page.[1]
// Instead of importing them one-by-one we use js file of component to export all the components to the App as imported below in a single line.
// import { Article, Brand, CTA, Feature, Navbar} from './components'
// But here is a catch we will not import our component directly in the app we will import it inside the containers which are the bigger section of the page.



import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './components';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
