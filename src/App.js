import React, {Fragment} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
//API = http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&APPID=0bdb1e207c717c85595c5fefa172e13d

function App() {
  return (
    <Fragment>
      <Header 
        titulo= 'Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario/>
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
