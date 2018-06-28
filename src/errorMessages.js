// Throw an error if foodName is not provided
const throwIfFoodNameMissing = () => {
    throw new Error('Required parameter not found! Please provide a name for the food.')
}

// Throw an error if mealName is not provided
const throwIfDishNameMissing = () => {
    throw new Error('Required parameter not found! Please provide a name for the dish.')
}

// Throw an error if calories is not provided
const throwIfCaloriesMissing = () => {
    throw new Error('Required parameter not found! Please provide calories for the food.')
}

// Throw an error if protein is not provided
const throwIfProteinMissing = () => {
    throw new Error('Required parameter not found! Please provide protein for the food.')
}

// Throw an error if carbohydrate is not provided
const throwIfCarbohydrateMissing = () => {
    throw new Error('Required parameter not found! Please provide carbohydrate for the food.')
}

// Throw an error if fat is not provided
const throwIfFatMissing = () => {
    throw new Error('Required parameter not found! Please provide fat for the food.')
}

// Throw an error if provided value is not a string
const throwIfNotAString = (functionName) => {
    throw new Error(`Not supported data type for ${functionName} detected. Please provide a string.`)
}

// Throw an error if provided value is not a number
const throwIfNotANumber = (functionName) => {
    throw new Error(`Not supported data type for ${functionName} detected. Please provide a number.`)
}

// Throw an error if an index is not found
const throwIfIndexNotFound = (variableName) => {
    throw new Error(`The index for ${variableName} was not found. Please make sure that the data exists.`)
}

// Throw an error if provided meal value is invalid
const throwIfMealInvalid = () => {
    throw new Error('Invalid value for meal. Please provide breakfast, lunch, dinner or snacks as value.')
}

export { throwIfFoodNameMissing, throwIfDishNameMissing, throwIfCaloriesMissing, throwIfProteinMissing, throwIfCarbohydrateMissing, throwIfFatMissing, throwIfNotAString, throwIfNotANumber, throwIfIndexNotFound, throwIfMealInvalid }