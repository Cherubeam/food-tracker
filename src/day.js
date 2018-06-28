import moment from 'moment'
import { throwIfMealInvalid } from './errorMessages'

class Day {
    constructor(timestamp, day, week, month, year, date, meals) {
        this._timestamp = timestamp || moment().valueOf()
        this._day = day || moment().format('DD')
        this._weekday = day || moment().format('dddd')
        this._week = week || moment().format('W')
        this._month = month || moment().format('MM')
        this._year = year || moment().format('GGGG')
        this._date = date || `${this._day}.${this._month}.${this._year}`
        this._meals = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
        } || meals
    }

    get day() {
        return this._day
    }

    get weekday() {
        return this._weekday
    }

    get week() {
        return this._week
    }

    get month() {
        return this._month
    }

    get year() {
        return this._year
    }

    get date() {
        return this._date
    }

    get meals() {
        return this._meals
    }

    get fromNow() {
        return moment(this._timestamp).fromNow()
    }

    setMeal(food, meal) {
        switch(meal) {
            case 'Breakfast':
                this._meals.breakfast.push(food)
                break
            case 'Lunch':
                this._meals.lunch.push(food)
                break
            case 'Dinner':
                this._meals.dinner.push(food)
                break
            case 'Snack':
                this._meals.snack.push(food)
                break
            default:
                throwIfMealInvalid()
        }
    }
}

// const today = new Day()
// console.log(today)

// today.setMeals({
//     name: 'Lecker Essen'
// }, 'dinner')

// today.setMeals({
//     name: 'Lecker Snack'
// }, 'snacks')
// console.log(today)

// console.log(today.fromNow)

// console.log(today.year)

// console.log(today.date)

export { Day as default }