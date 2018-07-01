import Food from './food'
import { throwIfIndexNotFound } from './errorMessages'

let foods = []

/**
 * @description CRUD foods
 */

// Load foods from localStorage
const loadFoods = () => {
    const foodsJSON = localStorage.getItem('foods')

    /**
     * @description The data loaded from localStorage have to be parsed again through the class constructor function to restore the Getters / Setters – all the logic – for each food instance.
     */
    try {
        if (foodsJSON) {
            const parsedJSON = JSON.parse(foodsJSON)
            let foods = []

            parsedJSON.forEach(foodObject => {
                let { _id, _ean, createdAt, updatedAt, _brand, _name, _calories, _protein, _carbohydrate, _fat, _saturatedFat, _multipleUnsaturatedFat, _basicUnsaturatedFat, _transFat, _cholesterol, _natrium, _potassium, _fibers, _sugar, _portion, _portionUnit, _portionAmount, _names, _brands } = foodObject

                const food = new Food(_id, _ean, createdAt, updatedAt, _brand, _name, _calories, _protein, _carbohydrate, _fat, _saturatedFat, _multipleUnsaturatedFat, _basicUnsaturatedFat, _transFat, _cholesterol, _natrium, _potassium, _fibers, _sugar, _portion, _portionUnit, _portionAmount, _names, _brands)

                foods.push(food)
            })
            
            return foods

        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

// Create a food instance and save it into foods array
const saveFoods = () => {
    localStorage.setItem('foods', JSON.stringify(foods))
}

// Add a food to the foods array
const createFood = food => {
    foods.push(food)

    console.log(food)
    saveFoods()
    return food._id
}

// Update a food
const updateFood = (foodId, elementId, newValue) => {
    const foodIndex = foods.findIndex(food => food.id === foodId)
    console.log(foods)
    console.log('Food index: ' + foodIndex)
    console.log('Food ID: ' + foods[foodIndex].id)


    if (foodIndex === -1) {
        throwIfIndexNotFound()
        return
    }

    switch (elementId) {
        case 'edit-ean':
            foods[foodIndex].ean = parseInt(newValue)
            break

        case 'edit-brand-name':
            foods[foodIndex].brand = newValue
            break

        case 'edit-food-name':
            foods[foodIndex].name = newValue
            break

        case 'edit-calories':
            foods[foodIndex].calories = parseFloat(newValue)
            break

        case 'edit-protein':
            foods[foodIndex].protein = parseFloat(newValue)
            break

        case 'edit-carbohydrate':
            foods[foodIndex].carbohydrate = parseFloat(newValue)
            break

        case 'edit-fat':
            foods[foodIndex].fat = parseFloat(newValue)
            break

        case 'edit-saturated-fat':
            foods[foodIndex].saturatedFat = parseFloat(newValue)
            break

        case 'edit-multiple-unsaturated-fat':
            foods[foodIndex].multipleUnsaturatedFat = parseFloat(newValue)
            break

        case 'edit-basic-unsaturated-fat':
            foods[foodIndex].basicUnsaturatedFat = parseFloat(newValue)
            break

        case 'edit-trans-fat':
            foods[foodIndex].transFat = parseFloat(newValue)
            break

        case 'edit-cholesterol':
            foods[foodIndex].cholesterol = parseFloat(newValue)
            break

        case 'edit-natrium':
            foods[foodIndex].natrium = parseFloat(newValue)
            break

        case 'edit-potassium':
            foods[foodIndex].potassium = parseFloat(newValue)
            break

        case 'edit-fibers':
            foods[foodIndex].fibers = parseFloat(newValue)
            break

        case 'edit-sugar':
            foods[foodIndex].sugar = parseFloat(newValue)
            break

        default:
            throw new Error('Mapping between input field and object property seems to be not defined!')
    }
    saveFoods()
}

// Remove a food
const removeFood = foodId => {
    const foodIndex = foods.findIndex(food => food.id === foodId)

    if (foodIndex > -1) {
        foods.splice(foodIndex, 1)
        saveFoods()
    }
}

// Expose foods from module
const getFoods = () => foods

// Reset food input form
const resetFoodForm = (e) => {
    e.target.elements.brandName.value = ''
    e.target.elements.foodName.value = ''
    e.target.elements.calories.value = ''
    e.target.elements.protein.value = ''
    e.target.elements.carbohydrate.value = ''
    e.target.elements.fat.value = ''
}

foods = loadFoods()

export { createFood, updateFood, removeFood, getFoods, resetFoodForm }