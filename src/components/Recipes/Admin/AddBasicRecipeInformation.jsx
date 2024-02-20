import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'

const AddBasicRecipeInformation = () => {

    //recipe title
    const [title, setTitle] = useState('')

    //recipe preparation time
    const [prepTime, setPrepTime] = useState(0)

    //recipe cooking time
    const [cookTime, setCookTime] = useState(0)

    //recipe number of servings
    const [servings, setServings] = useState(0)

    //number of steps needed to complete the recipe
    //cannot be 0!
    const [stepsCount, setStepsCount] = useState(1)

    //an ingredient being typed in order to get added to the list of ingredients
    const [ingredient, setIngredient] = useState('')

    //list of ingredients needed for recipe
    const [listItems, setListItems] = useState([])

    //list of cuisines for select in form
    const [cuisines, setCuisines] = useState([])

    //a particular cuisine being selected by user
    const [cuisine, setCuisine] = useState(1)

    //recipe levels
    const [recipeLevels, setRecipeLevels] = useState([])

    //a particular level being selected by user
    const [recipeLevel, setRecipeLevel] = useState(1)

    /**
     * Function which formats time in order to comply with the mysql TIME data type
     * 
     * @param {*} timeType 
     * @param {*} value 
     */
    const formatTime = (timeType, value) => {
        if (value < 60) {
            
            let returnString = "00:" + value + ":00"
            switch (timeType) {
                case "prepTime": 

                    setPrepTime(returnString);
                    break;

                case "cookTime":
                    setCookTime(returnString);
                    break;
            }
        }

        else {
            let hours = Math.floor(value/60);
            let minutes = value % 60;
            let returnString = hours.toString() + ":" + minutes.toString() + ":00";

            switch (timeType) {
                case "prepTime": 
                    setPrepTime(returnString);
                    break;

                case "cookTime":
                    setCookTime(returnString);
                    break;
            }
        }
      }

      /**
       * Steps count validator. If something unacceptable here, then it defaults to 1, otherwise returns the real value
       * 
       * @param {*} value 
       */
      const validateStepsCount = (value) => {
        if (value <= 0) {
            setStepsCount(1)
        }

        else {
            setStepsCount(value)
        }
      }

      /**
       * Gets all of the cuisines from server
       */
      const getCuisines = async () => {
        const response = await fetch("http://localhost:3000/recipes/getCuisines")

        const result = await response.json()

        setCuisines(result)
      }

      const getRecipeLevels = async () => {
        const response = await fetch("http://localhost:3000/recipes/getRecipeLevels")

        const result = await response.json()

        setRecipeLevels(result)
      }



      //gets cuisines upon the first component mount
    useEffect(() => {
        getCuisines()
        getRecipeLevels()
    })



    let stateObject = {
        oTitle:         title,
        oPrepTime:      prepTime,
        oCookTime:      cookTime,
        oServings:      servings,
        oStepsCount:    stepsCount,
        oIngredients:   listItems,
        oCuisines:      cuisine,
        oRecipeLevel:   recipeLevel
    }

   
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3000/recipes/add/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify JSON content type
            },
            body: JSON.stringify(stateObject) 
        });

        const res = await response.json();
        document.querySelector('.result').innerHTML = JSON.stringify(res)
        setListItems([...listItems, ingredient])        
        setIngredient('')
    }

    const addIngredient = (e) => {
        setIngredient(e.target.value)
    }

    const appendIngredient = () => {
        document.querySelector('#ingredient').value = ''
        document.querySelector('#ingredient').focus()
        setListItems([...listItems, ingredient])
    }


    const deleteItem = (event, itemToRemove) => {
        if (confirm("Really delete the item " + itemToRemove + "?")) {
            const updatedListItems = listItems.filter(item => item !== itemToRemove);
            setListItems(updatedListItems);
        }
      };

    return (
        <div className='container'>
            <h1>Add recipe</h1>
            <p>
                This form consists of 4 steps. Please take into account, that the data being entered on each step is validated and
                saved. The actual insertion in the database occurs by the end of this form.
            </p>
            <Form id="addRecipeForm" name="addRecipeForm" method="post" action="http://localhost:3000/recipes/add/" onSubmit={handleSubmit}>
                <h2>Main recipe data</h2>
                <Form.Group className='mb-3'>
                    <Form.Label>Please enter recipe title*: </Form.Label>
                    <Form.Control 
                        placeholder="Please enter recipe title" 
                        name="recipeTitle" 
                        id="recipeTitle" 
                        required 
                        onChange={(e) => {setTitle(e.target.value)}}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Please select an appropriate cuisine for this dish</Form.Label>                   
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Select id="cuisinesForm" name="cuisinesForm" onChange={(e) => {setCuisine(e.target.value)}}>
                        {cuisines.map((cuisine) => {
                            return <option key={cuisine.id} name={cuisine.cuisine_name} value={cuisine.id}>{cuisine.cuisine_name}</option>
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Please enter the time, needed for preparation (in minutes): </Form.Label>
                    <Form.Control 
                        id="preparationTime" 
                        name="preparationTime" 
                        type="number"
                        onChange={(e) => {formatTime("prepTime", e.target.value)}}
                        />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Please enter the time, needed for cooking (in minutes)*: </Form.Label>
                    <Form.Control 
                        id="cookingTime" 
                        name="cookingTime" 
                        type="number" 
                        onChange={(e) => {formatTime("cookTime", e.target.value)}}
                        required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>How many servings do you plan to have?* </Form.Label>
                    <Form.Control 
                        id="servingsNumber" 
                        name="servingsNumber" 
                        type="number" 
                        required
                        onChange={(e) => {setServings(e.target.value)}}
                        />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Please enter the difficulty level of this recipe: </Form.Label>
                    <Form.Select id="recipeLevel" name="recipeLevel" onChange={(e) => {setRecipeLevel(e.target.value)}}>
                        {recipeLevels.map((recipeLevel) => {
                            return <option name="recipeLevel" value={recipeLevel.id}>{recipeLevel.level_name}</option>
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>How many steps are there to cook this dish?</Form.Label>
                    <Form.Control 
                        id="stepsCount"
                        name="stepsCount"
                        type="number"
                        required
                        onChange={(e) => validateStepsCount(e.target.value)}
                        />
                </Form.Group>

                <h2>Ingredients</h2>
                <p>
                    Let's enter ingredients, which are needed for cooking this dish. Please enter every ingredients
                    as a plain text, so if you were to write it down. For example: <pre>3 teaspoons of sugar</pre> After entering an ingredient,
                    press the "Add ingredient" button to have this ingredient added. 
                </p>

                <p>
                    In order to delete an item from the ingredients list, just left-click it and say "OK" in the confirmation window.
                </p>
                <Form.Group className='mb-3'>
                    <Form.Label>Please enter an ingredient: </Form.Label>
                    <Form.Control 
                        id="ingredient" 
                        name="ingredient" 
                        type="text" 
                        className="mb-3"
                        onChange={addIngredient}
                        />
                    <Button variant="outline-info" onClick={appendIngredient}>Add ingredient</Button>
                </Form.Group>

                <Form.Group>
                    <ListGroup name="listIngredients" id="listIngredients">
                        {listItems.map((item, index) => {
                            return <ListGroup.Item key={index} onClick={(event) => deleteItem(event,item)}>{item}</ListGroup.Item>
                        })}
                    </ListGroup>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                    <Button variant="primary" type="submit" className="p-2">Submit data</Button>
                    <Button variant="outline-light" type="reset">Reset data</Button>
                </Stack>
            </Form>
            <div className="result">
                Here will be the result.
            </div>
        </div>
    )
}

export default AddBasicRecipeInformation