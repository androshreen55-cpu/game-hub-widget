document.addEventListener("keydown", function(e) {
    document.getElementById("screen").innerHTML =
        "<div class='item selected'>KEY: " + e.key + "</div>";
});
