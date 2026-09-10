fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const navigation = document.getElementById("navigation");

        hamburger.addEventListener("click", function() {
            navigation.classList.toggle("open");
        });

        const smallScreen = window.matchMedia("(max-width: 900px)");

        smallScreen.addEventListener("change", function(event) {
            if (!event.matches) {
                navigation.classList.remove("open");
            }
        });
    });