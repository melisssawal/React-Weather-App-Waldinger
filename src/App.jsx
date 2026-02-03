import React, { useState } from 'react';
import Weather from "./weather.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <div className= "App">
  <div className= "container">
<Weather defaultCity="Miami" />
</div>
</div>
  )
}

export default App
