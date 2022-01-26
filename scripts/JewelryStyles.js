import { getStyles, setStyle, getState } from "./dataAccess.js"

const styles = getStyles()


export const JewelryStyles = () => {
    let html = "<ul>"

    const state = getState()
    let presetId = ""

    if(state.styleId) {
        presetId = state.styleId
    }

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        if(style.id === presetId) {
            return `<li>
            <input type="radio" name="style" value="${style.id}" checked /> ${style.style}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        }
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

