document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelector(".stars");
    const starsCross = document.querySelector(".stars-cross");
    const starsCrossAux = document.querySelector(".stars-cross-aux");

    if (!stars || !starsCross || !starsCrossAux) return;

    const nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

    const star0 = "<div class='star star-0' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;'></div>";
    const star1 = "<div class='star star-1 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;'></div>";
    const star2 = "<div class='star star-2 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;'></div>";
    const star4 = "<div class='star star-4 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;'></div>";
    const star5 = "<div class='star star-5' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;background-color:{{color}}'></div>";

    const star1pt = "<div class='star star-1 blink' style='top:{{top}}%;left:{{left}}%;animation-duration:{{duration}}s;background-color:{{color}};box-shadow:0px 0px 6px 1px {{shadow}}'></div>";
    const star2pt = "<div class='star star-2' style='top:{{top}}%;left:{{left}}%;animation-duration:{{duration}}s;background-color:{{color}};box-shadow:0px 0px 10px 1px {{shadow}};opacity:0.7'></div>";
    const blur    = "<div class='blur' style='top:{{top}}%;left:{{left}}%;background-color:{{color}}'></div>";

    function randColor() {
        return nightsky[Math.ceil(rand(0, nightsky.length - 1))];
    }

    for (var i = 0; i < 50; i++) {
        stars.insertAdjacentHTML("beforeend",
            star1.replace("{{top}}", rand(0, 40)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(2, 5))
        );
        stars.insertAdjacentHTML("beforeend",
            star2.replace("{{top}}", rand(20, 70)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(4, 8))
        );
    }

    for (var i = 0; i < 20; i++) {
        stars.insertAdjacentHTML("beforeend",
            star0.replace("{{top}}", rand(0, 50)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(1, 2.5))
        );
        stars.insertAdjacentHTML("beforeend",
            star1.replace("{{top}}", rand(0, 50)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(2.5, 4))
        );
        stars.insertAdjacentHTML("beforeend",
            star2.replace("{{top}}", rand(0, 50)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(4, 5))
        );
    }

    for (var i = 0; i < 15; i++) {
        stars.insertAdjacentHTML("beforeend",
            star0.replace("{{top}}", rand(40, 75)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(1, 3))
        );
        stars.insertAdjacentHTML("beforeend",
            star1.replace("{{top}}", rand(40, 75)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(2, 4))
        );
    }

    for (var i = 0; i < 30; i++) {
        stars.insertAdjacentHTML("beforeend",
            star0.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(1, 2))
        );
        stars.insertAdjacentHTML("beforeend",
            star1.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(2, 5))
        );
        stars.insertAdjacentHTML("beforeend",
            star2.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(1, 4))
        );
        stars.insertAdjacentHTML("beforeend",
            star4.replace("{{top}}", rand(0, 70)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(5, 7))
        );
    }

    for (var i = 0; i < 14; i++) {
        stars.insertAdjacentHTML("beforeend",
            star4.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{duration}}", rand(5, 7))
        );
        starsCross.insertAdjacentHTML("beforeend",
            blur.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{color}}", randColor())
        );
        starsCross.insertAdjacentHTML("beforeend",
            star1pt
                .replace("{{top}}", rand(0, 100))
                .replace("{{left}}", rand(0, 100))
                .replace("{{duration}}", rand(6, 12))
                .replace("{{color}}", randColor())
                .replace("{{shadow}}", randColor())
        );
    }

    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            stars.insertAdjacentHTML("beforeend",
                star5
                    .replace("{{top}}", rand(0, 50))
                    .replace("{{left}}", rand(0, 100))
                    .replace("{{duration}}", rand(5, 7))
                    .replace("{{color}}", randColor())
            );
        }
        starsCrossAux.insertAdjacentHTML("beforeend",
            blur.replace("{{top}}", rand(0, 100)).replace("{{left}}", rand(0, 100)).replace("{{color}}", randColor())
        );
        starsCrossAux.insertAdjacentHTML("beforeend",
            star2pt
                .replace("{{top}}", rand(0, 100))
                .replace("{{left}}", rand(0, 100))
                .replace("{{duration}}", rand(4, 10))
                .replace("{{color}}", randColor())
                .replace("{{shadow}}", randColor())
        );
    }
});

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
