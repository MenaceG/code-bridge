const countElmnt = document.getElementById("counter");
const buttons = document.querySelectorAll(".buttons button");

let count = parseInt(countElmnt.textContent);

buttons.forEach(button => button.addEventListener("click", () => {
    const operation = button.id;
    switch (operation) {
        case "dec": count --; break;
        case "res": count = 0; break;
        case "inc": count++; break;
    }
    countElmnt.textContent = count;
} ))