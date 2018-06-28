import Food from './food'
import { throwIfIndexNotFound } from './errorMessages'

let foods = []

/**
 * @description CRUD foods
 */

// Load foods from localStorage
const loadFoods = () => {
    const foodsJSON = localStorage.getItem('foods')

    try {
        if (foodsJSON) {
            const parsedJSON = JSON.parse(foodsJSON)
            let foods = []

            parsedJSON.forEach((foodObject) => {
                let _id, _ean, createdAt, updatedAt, _brand, _name, _calories, _protein, _carbohydrate, _fat, _saturatedFat, _multipleUnsaturatedFat, _basicUnsaturatedFat, _transFat, _cholesterol, _natrium, _potassium, _fibers, _sugar, _portion, _portionUnit, _portionAmount, _names, _brands

                ({ _id, _ean, createdAt, updatedAt, _brand, _name, _calories, _protein, _carbohydrate, _fat, _saturatedFat, _multipleUnsaturatedFat, _basicUnsaturatedFat, _transFat, _cholesterol, _natrium, _potassium, _fibers, _sugar, _portion, _portionUnit, _portionAmount, _names, _brands } = foodObject.food)

                const food = new Food(_id, _ean, createdAt, updatedAt, _brand, _name, _calories, _protein, _carbohydrate, _fat, _saturatedFat, _multipleUnsaturatedFat, _basicUnsaturatedFat, _transFat, _cholesterol, _natrium, _potassium, _fibers, _sugar, _portion, _portionUnit, _portionAmount, _names, _brands)

                const meal = foodObject.meal // !!! Has to be removed since "meal" has to bereomved from create Food etc. and has renamed to "dish" !!!

                foods.push({
                    food,
                    meal
                })
                console.log(foods)
            })
            return foods

        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

// Save foods into localStorage
const saveFoods = () => {
    localStorage.setItem('foods', JSON.stringify(foods))
}

// Add food to the foods object
const createFood = food => {
    foods.push(food)

    saveFoods()
    return food._id
}

// Update a food
const updateFood = (foodId, elementId, newValue) => {
    const foodIndex = foods.findIndex(index => index.food._id === foodId)
    console.log(foods)
    console.log('Food index: ' + foodIndex)
    console.log('Food ID: ' + foods[foodIndex].food._id)


    if (foodIndex === -1) {
        throwIfIndexNotFound()
        return
    }

    switch (elementId) {
        case 'edit-ean':
            foods[foodIndex].food.ean = newValue
            break

        case 'edit-brand-name':
            foods[foodIndex].food.brand = newValue
            break

        case 'edit-food-name':
            foods[foodIndex].food.name = newValue
            break

        case 'edit-calories':
            foods[foodIndex].food.calories = parseFloat(newValue)
            break

        case 'edit-protein':
            foods[foodIndex].food.protein = parseFloat(newValue)
            break

        case 'edit-carbohydrate':
            foods[foodIndex].food.carbohydrate = parseFloat(newValue)
            break

        case 'edit-fat':
            foods[foodIndex].food.fat = parseFloat(newValue)
            break

        case 'edit-saturated-fat':
            foods[foodIndex].food.saturatedFat = parseFloat(newValue)
            break

        case 'edit-multiple-unsaturated-fat':
            foods[foodIndex].food.multipleUnsaturatedFat = parseFloat(newValue)
            break

        case 'edit-basic-unsaturated-fat':
            foods[foodIndex].food.basicUnsaturatedFat = parseFloat(newValue)
            break

        case 'edit-trans-fat':
            foods[foodIndex].food.transFat = parseFloat(newValue)
            break

        case 'edit-cholesterol':
            foods[foodIndex].food.cholesterol = parseFloat(newValue)
            break

        case 'edit-natrium':
            foods[foodIndex].food.natrium = parseFloat(newValue)
            break

        case 'edit-potassium':
            foods[foodIndex].food.potassium = parseFloat(newValue)
            break

        case 'edit-fibers':
            foods[foodIndex].food.fibers = parseFloat(newValue)
            break

        case 'edit-sugar':
            foods[foodIndex].food.sugar = parseFloat(newValue)
            break

        default:
            throw new Error('Mapping between input field and object property seems to be not defined!')
    }
    saveFoods()
}

// Remove a food
const removeFood = foodId => {
    const foodIndex = foods.findIndex(index => index.food._id === foodId)

    if (foodIndex > -1) {
        foods.splice(foodIndex, 1)
        saveFoods()
    }
}

// Get the foods object
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