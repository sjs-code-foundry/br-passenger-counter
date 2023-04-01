let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let countCurr = 0
let countTot = 0

function increment() {
    countCurr += 1
    countEl.textContent = countCurr
}

function save() {
    let countStr = countCurr + " - "
    saveEl.textContent += countStr
    countTot += countCurr
    totalEl.textContent = countTot
    countEl.textContent = 0
    countCurr = 0
}

function reset() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    totalEl.textContent = 0
    countCurr = 0
    countTot = 0
}
