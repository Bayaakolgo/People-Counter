//PSEUDO CODE

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count in the HTML to reflect the new count

let count = 0
function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
}

//create a funciton, save(), which logs out the count when it's called

function save(){
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    document.getElementById("count-el").textContent = 0
    count = 0
}