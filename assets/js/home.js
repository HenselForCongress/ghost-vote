document.addEventListener("DOMContentLoaded", function () {
    const featuredUpdates =
        document.querySelectorAll(".updates-feed")[0].children.length;
    if (featuredUpdates < 6) {
        document.querySelector(".non-featured").style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const featuredUpdates =
        document.querySelectorAll(".issues-feed")[0].children.length;
    if (featuredUpdates < 6) {
        document.querySelector(".non-featured").style.display = "block";
    }
});
