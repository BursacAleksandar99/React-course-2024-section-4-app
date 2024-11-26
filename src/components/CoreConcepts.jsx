import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts(){
    return(
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>  
              <CoreConcept key={conceptItem.title}{...conceptItem}/>)}
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
    )
}