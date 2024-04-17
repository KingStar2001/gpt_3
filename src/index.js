import React from "react";
import ReactDOM from "react-dom";
// the above both will allow us to hook(merge or connect) the index.html page with this index.js page.


import App from './App';
import './index.css'; 


ReactDOM.render (<App />, document.getElementById('root'));
// the above line shows here to render the app (like hooking the html file) which has a single div with a ID named as 'root'.




