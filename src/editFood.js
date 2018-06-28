import { initializeFoodEditPage } from './views'
import { updateFood } from './foodFunctions'

const formElement = document.getElementById('edit-food')
const foodId = location.hash.substring(1)

initializeFoodEditPage(foodId)

formElement.addEventListener('input', e => {
    console.log(e)

    const elementId = e.target.attributes[0].nodeValue
    console.log(elementId)

    const newValue = e.target.value
    console.log(newValue)


    updateFood(foodId, elementId, newValue)
})