let button = document.querySelector("button");
let counter = document.querySelector(".counter");
let total = document.getElementsByClassName("total")[0];
let man = document.querySelector(".man");
let count = localStorage.count || 0;
let totalCount = Number(localStorage.total) || 0;

display(count)
button.addEventListener("click", () => {
    if (count < 100) {
    display(++count);
    localStorage.count = count;
    } else {
        totalCount += count;
        localStorage.total = totalCount;
        count = 0;
        total.innerText = `${totalCount}`;
        display(count);
    }
})

function display(count) {
    counter.innerText = `${count}`;
    man.style.cssText = `left: ${count * .75}%`
    total.innerText = `${totalCount}`;
}


