export default function Card(props){
    return(
        <article>

                <h1>{props.name}</h1>
                <h2>{props.children}</h2>
                <button>{props.button}</button>

        </article>
        
    )
}