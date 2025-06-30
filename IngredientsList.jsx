export default function IngredientsList(props) {
    const listIngredientS = props.useringredients.map(ingredient => 
        (<li key={ingredient}>{ingredient}</li>));
        
    return (
        <>
            {props.useringredients.length > 0 ? (
                <div className="Hand">
                    <h1 className="title2">Ingredients on hand:</h1>
                    <ul className="inglist">
                        {listIngredientS}
                    </ul>
                </div>
            ) : null}
            
            {props.useringredients.length > 3  &&
                <div className="getrecipe">
                    <div className="textparent" ref={props.ref}>
                        <h1>Ready for a recipe?</h1>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </>
    )
}