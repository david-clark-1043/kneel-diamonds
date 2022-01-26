import { getMetals, setMetal, getState } from "./dataAccess.js"

const metals = getMetals()



export const Metals = () => {
    let html = "<ul>"

    const state = getState()
    let presetId = ""

    if(state.metalId) {
        presetId = state.metalId
    }

    // This is how you have been converting objects to <li> elements
    // changed from for loop to map statement
    const metalArray = metals.map(metal => {
        if(metal.id === presetId) {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" checked /> ${metal.metal}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }

    })

    html += metalArray.join("")
    html += "</ul>"
    return html
}

