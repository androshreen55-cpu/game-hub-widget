var menuItems = ["GAMES", "WEB APPS", "TOOLS", "SETTINGS"];
var selected = 0;
var page = "main";

function draw() {
    var menu = document.getElementById("menu");
    var html = "";

    if (page == "main") {

        for (var i = 0; i < menuItems.length; i++) {
            if (i == selected) {
                html += "<div style='background:white;color:black;padding-left:5px;'>";
                html += "> " + menuItems[i];
                html += "</div>";
            } else {
                html += "<div>> " + menuItems[i] + "</div>";
            }
        }

    } else if (page == "games") {

        var games = ["TETRIS", "SNAKE", "2048", "BACK"];

        for (var i = 0; i < games.length; i++) {
            if (i == selected) {
                html += "<div style='background:white;color:black;padding-left:5px;'>";
                html += "> " + games[i];
                html += "</div>";
            } else {
                html += "<div>> " + games[i] + "</div>";
            }
        }

    } else {

        html = "<div style='text-align:center;margin-top:40px;'>";
        html += "<b>COMING SOON</b><br><br>";
        html += "This section is<br>under development.";
        html += "</div>";
    }

    menu.innerHTML = html;
}

document.addEventListener("keydown", function(e) {

    if (e.key == "ArrowDown") {
        selected++;

        if (page == "main" && selected >= menuItems.length) {
            selected = 0;
        }

        if (page == "games" && selected >= 4) {
            selected = 0;
        }

        draw();
    }

    if (e.key == "ArrowUp") {
        selected--;

        if (selected < 0) {
            if (page == "main") {
                selected = menuItems.length - 1;
            } else {
                selected = 3;
            }
        }

        draw();
    }

    if (e.key == "Enter") {

        if (page == "main") {

            if (selected == 0) {
                page = "games";
                selected = 0;
            } else {
                page = "other";
            }

        } else if (page == "games") {

            if (selected == 3) {
                page = "main";
                selected = 0;
            } else {
                page = "other";
            }
        }

        draw();
    }

    if (e.key == "Escape" || e.key == "Backspace") {
        page = "main";
        selected = 0;
        draw();
    }
});

draw();
