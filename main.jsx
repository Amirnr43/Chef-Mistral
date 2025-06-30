import React from "react"
import Chefclaude from "./chefclaude"
import IngredientsList from "./IngredientsList"
import { getRecipeFromai } from "./ai"
export default function Main(){
  const [useringredients,setuseringredients] = React.useState([])
  const [recipe,setrecipe] = React.useState("")
  const recipeSwitch = React.useRef(null)
  
  function handleSubmit(formData) {

    const newIngredient = formData.get("ingredient")
    setuseringredients(prevIng=>
      [...prevIng,newIngredient]
    )
    }
      async function getRecipe(){
          const aiRecipe = await getRecipeFromai(useringredients)
          setrecipe(aiRecipe)
      }
  React.useEffect(() =>{
    if(recipe !== ""&& recipeSwitch.current !== null){
      recipeSwitch.current.scrollIntoView({behavior:"smooth"})
    }
  },[recipe])
      

  return(
    <main>
      <div className="wrapped">

      <form className="searchbox" action={handleSubmit} >
      <input type="text" placeholder="e.g. oregano" className="Userfind" name="ingredient"/>
      <button className="addbutton">Add ingredient</button>
      </form>
        <IngredientsList useringredients={useringredients} getRecipe={getRecipe} ref={recipeSwitch}/>

         {recipe && <Chefclaude recipe={recipe}/>}
              
      </div>
    </main>
  )
}

