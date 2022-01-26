import { getTypes, setType, getState } from "./dataAccess.js"

const types = getTypes()



export const JewelryTypes = () => {
    let html = ""

    const state = getState()
    let presetId = ""

    if(state.typeId) {
        presetId = state.typeId
    }

    // Use .map() for converting objects to <li> elements
    const listItemsArray = types.map(type => {
        if(type.id === presetId) {
            return `<div>
            <input type="radio" name="type" value="${type.id}" checked /> ${type.type}
        </div>`
        } else {
        return `<div>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </div>`
        }
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}