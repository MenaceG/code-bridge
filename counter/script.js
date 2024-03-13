count = 0;

function decrease() {
    count = count - 1;
    document.getElementById("counter").innerHTML = count;
};

function reset() {
    count = 0;
    document.getElementById("counter").innerHTML = 0;
};

function increase() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
};