const images = document.querySelectorAll('.img-12-min');
let count = 0;

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
const reset = document.querySelector(".reset");
reset.onclick = resFunction;

const imgMax = document.querySelector(".img-12-max");
function nextFunction() {
    if (count + 1 < images.length) {
        count++;
    }
    else {
        count = 0;
    }
    images.forEach(element => {
        element.classList.remove("active-img");
    })

    images[count].classList.add("active-img");

    imgMax.src = images[count].src;
}

function prevFunction() {
    if (count - 1 < 0) {
        count = images.length;
    }
    count--;
    images.forEach(item => {
        item.classList.remove("active-img");
    })
    images[count].classList.add("active-img");
    imgMax.src = images[count].src;
}

function resFunction () {
    count = 0;
    images.forEach(element => {
        element.classList.remove("active-img");
    })
    images[count].classList.add("active-img");
    imgMax.src = images[count].src;
}


next.addEventListener("click",nextFunction);
prev.addEventListener("click", prevFunction);