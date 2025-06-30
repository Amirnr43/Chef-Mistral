import ReactMarkdown from 'react-markdown'

export default function Chefclaude(props){
  return(
        <section className="suggest-wrapper">
            <ReactMarkdown>
              {props.recipe}
              </ReactMarkdown>
        </section>
 
  )
}