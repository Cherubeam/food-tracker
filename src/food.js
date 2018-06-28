import uuidv4 from 'uuid/v4'
import moment from 'moment'
import { throwIfNotAString, throwIfNotANumber } from './errorMessages'

class Food {
    constructor(id, ean, createdAt, updatedAt, brand, name, calories, protein, carbohydrate, fat, saturatedFat, multipleUnsaturatedFat, basicUnsaturatedFat, transFat, cholesterol, natrium, potassium, fibers, sugar, portion, portionUnit, portionAmount, names, brands) {
        const timestamp = moment().valueOf()
        this._id = id || uuidv4()
        this._ean = ean || null
        this.createdAt = createdAt || timestamp
        this.updatedAt = updatedAt || timestamp
        this._brand = brand.trim()
        this._name = name.trim()
        this._calories = calories
        this._protein = protein
        this._carbohydrate = carbohydrate
        this._fat = fat
        this._saturatedFat = saturatedFat || null
        this._multipleUnsaturatedFat = multipleUnsaturatedFat || null
        this._basicUnsaturatedFat = basicUnsaturatedFat || null
        this._transFat = transFat || null
        this._cholesterol = cholesterol || null
        this._natrium = natrium || null
        this._potassium = potassium || null                             // Kalium
        this._fibers = fibers || null                                   // Ballaststoffe
        this._sugar = sugar || null
        this._portion = portion || null                                 // e.g. 100
        this._portionUnit = portionUnit || null                         // e.g. 'g'
        this._portionAmount = portionAmount || 1                                         
        this._names = names || []
        this._names.push(this._name)
        this._brands = brands || []
        this._brands.push(this._brand)
    }

    get id() {
        return this._id
    }

    get ean() {
        return this._ean
    }

    get brand() {
        return this._brand
    }

    get name() {
        return this._name
    }

    get calories() {
        return this._calories
    }

    get protein() {
        return this._protein
    }

    get carbohydrate() {
        return this._carbohydrate
    }

    get fat() {
        return this._fat
    }

    get saturatedFat() {
        return this._saturatedFat
    }

    get multipleUnsaturatedFat() {
        return this._multipleUnsaturatedFat
    }

    get basicUnsaturatedFat() {
        return this._basicUnsaturatedFat
    }

    get transFat() {
        return this._transFat
    }

    get cholesterol() {
        return this._cholesterol
    }

    get natrium() {
        return this._natrium
    }

    get potassium() {
        return this._potassium
    }

    get fibers() {
        return this._fibers
    }

    get sugar() {
        return this._sugar
    }

    get macronutrients() {
        return {
            protein: this._protein,
            carbohydrate: this._carbohydrate,
            fat: this._fat
        }
    }

    set ean(value) {
        if (typeof value === 'number') {
            this._ean = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('EAN')
        }
    }

    set brand(value) {
        if (typeof value === 'string') {
            this._brand = value.trim()
            this._brands.push(this._brand)
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'string') {
            throwIfNotAString('Brand')
        }
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value.trim()
            this._names.push(this._name)
            this.updatedAt = moment().valueOf()
        } else if (typeof valule !== 'string') {
            throwIfNotAString('Name')
        }
    }

    set calories(value) {
        if (typeof value === 'number') {
            this._calories = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Calories')
        }
    }

    set protein(value) {
        if (typeof value === 'number') {
            this._protein = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Protein')
        }
    }

    set carbohydrate(value) {
        if (typeof value === 'number') {
            this._carbohydrate = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Carbohydrate')
        }
    }

    set fat(value) {
        if (typeof value === 'number') {
            this._fat = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Fat')
        }
    }

    set saturatedFat(value) {
        if (typeof value === 'number') {
            this._saturatedFat = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Saturated Fat')
        }
    }

    set multipleUnsaturatedFat(value) {
        if (typeof value === 'number') {
            this._multipleUnsaturatedFat = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Multiple Unsaturated Fat')
        }    
    }

    set basicUnsaturatedFat(value) {
        if (typeof value === 'number') {
            this._basicUnsaturatedFat = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Basic Unsaturated Fat')
        }
    }  

    set transFat(value) {
        if (typeof value === 'number') {
            this._transFat = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Trans Fat')
        }
    }  

    set cholesterol(value) {
        if (typeof value === 'number') {
            this._cholesterol = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Cholesterol')
        }
    } 

    set natrium(value) {
        if (typeof value === 'number') {
            this._natrium = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Natrium')
        }
    } 

    set potassium(value) {
        if (typeof value === 'number') {
            this._potassium = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Potassium')
        }
    }

    set fibers(value) {
        if (typeof value === 'number') {
            this._fibers = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Fibers')
        }
    }

    set sugar(value) {
        if (typeof value === 'number') {
            this._sugar = value
            this.updatedAt = moment().valueOf()
        } else if (typeof value !== 'number') {
            throwIfNotANumber('Sugar')
        }
    }
}

export { Food as default }