import React, {Fragment} from 'react';
import Header from './components/Header'
//API = http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&APPID=0bdb1e207c717c85595c5fefa172e13d

function App() {
  return (
    <Fragment>
      <Header 
        titulo= 'Clima React App'
      />
    </Fragment>
  );
}

export default App;
