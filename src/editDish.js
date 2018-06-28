import { initializeMealEditPage } from './views'

const mealId = location.hash.substring(1)

initializeMealEditPage(mealId)