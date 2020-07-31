var images = [
    "images/ZoneTip (3).jpg",
    "images/ZoneTip (25).jpg",
    "images/ZoneTip (47).jpg",
    "images/ZoneTip (52).jpg",
    "images/ZoneTip (61).jpg",
    "images/ZoneTip (62).jpg",
    "images/ZoneTip (68).jpg",
    "images/ZoneTip (87).jpg"
]

var currentIndex = 0;

function increment() {
    currentIndex = (currentIndex + 1) % images.length;
}

function decrement() {
    if (currentIndex === 0)
        currentIndex = images.length;
    currentIndex -= 1;
}

document.addEventListener("DOMContentLoaded", () => {
    var next = document.querySelector("#next-button");
    var prev = document.querySelector("#prev-button");
    var img = document.querySelector('img');

    next.onclick = function() {
        increment();
        img.src = images[currentIndex];
    }

    prev.onclick = function() {
        decrement();
        img.src = images[currentIndex];
    }
})