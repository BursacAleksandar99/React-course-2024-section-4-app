// import reactImg from './assets/react-core-concepts.png';
import Header from './components/Header/Header.jsx';
import { useState, Fragment } from 'react';
import React from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';







// function CoreConcepts(props) {
//   return(
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }


function App() {

  // let tabContent = "Please click a button!";

  

  return (
    <Fragment>
      {/* <header>
        <h1>Hello World</h1>
      </header> */}
      <Header/>
      
      
      <main>
        <CoreConcepts/>
        <Examples/>
        
        
        {/* <section>
        <Card name="Maria Miles" button='BUTTONRANDOM'>
            <p>
                Maria is a professor of Computer Science at the University of
                Illinois.
            </p>
            <p>
                <a href="mailto:blake@example.com">Email Maria</a>
            </p>
            <button>BUTTON</button>
      </Card>
        </section> */}
        
      </main>
    </Fragment>
  );
}

export default App;

