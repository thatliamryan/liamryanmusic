fetch("header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navigation = document.getElementById("navigation");
    const closeMenu = document.getElementById("close-menu");

    hamburger.addEventListener("click", function() {
        navigation.classList.toggle("open");
    });

    closeMenu.addEventListener("click", function() {
        navigation.classList.remove("open");
    });

    const smallScreen = window.matchMedia("(max-width: 1100px)");

    smallScreen.addEventListener("change", function(event) {
        if (!event.matches) {
            navigation.classList.remove("open");
        }
    });
});