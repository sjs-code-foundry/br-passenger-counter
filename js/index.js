let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let countCurr = 0
let countTot = 0

function increment() {
    console.log("Increment button clicked.")
    countCurr += 1
    countEl.textContent = countCurr

    message = "Current count: " + countCurr
    console.log(message)
}

function save() {
    console.log("Save button clicked.")
    let countStr = countCurr + " - "
    saveEl.textContent += countStr
    countTot += countCurr
    totalEl.textContent = countTot
    countEl.textContent = 0
    countCurr = 0

    message = "Total counted: " + countTot
    console.log(message)
}

function reset() {
    console.log("Reset button clicked.")
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    totalEl.textContent = 0
    countCurr = 0
    countTot = 0

    message = "Current Count & Total Count: " + countCurr + " - " + countTot
    console.log(message)
}
