// import reactImg from './assets/react-core-concepts.png';
import conceptImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import React from 'react';







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

  const [selectedTopic, setSelectedTopic] = useState();
  

  function handleClick(selectedButton){ 
    // selectedButton => components, jsx, props, state
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    
    
}

  return (
    <div>
      {/* <header>
        <h1>Hello World</h1>
      </header> */}
      <Header/>
      
      
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>  
              <CoreConcepts key={conceptItem.title}{...conceptItem}/>)}
            {/* <CoreConcepts 
            title="Components" 
            description="The core UI building block."
            image={conceptImg}/>

            <CoreConcepts 
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}/>

            <CoreConcepts {...CORE_CONCEPTS[2]}/>

            <CoreConcepts
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}/> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
            
          </menu>
          {/* {tabContent} */}
          {/* {selectedTopic} */}
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
          </div> : null}
          

        </section>
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
    </div>
  );
}

export default App;

