<script>
window.onload = function() {

    var selected = 0;
    var names = ["GAMES", "WEB APPS", "TOOLS", "SETTINGS"];

    function draw() {
        var text = "";

        for (var i = 0; i < names.length; i++) {
            if (i == selected) {
                text += "<div style='background:white;color:black;height:42px;line-height:42px;'>&gt; " + names[i] + "</div>";
            } else {
                text += "<div style='height:42px;line-height:42px;'>&nbsp;&nbsp; " + names[i] + "</div>";
            }
        }

        document.getElementById("test").innerHTML = text;
    }

    document.addEventListener("keydown", function(e) {

        if (e.key == "ArrowDown") {
            selected++;

            if (selected >= names.length) {
                selected = 0;
            }

            draw();
        }

        if (e.key == "ArrowUp") {
            selected--;

            if (selected < 0) {
                selected = names.length - 1;
            }

            draw();
        }
    });

    draw();
};
</script>
