const items = ["Games", "Web Apps", "Settings", "About"];

let selected = 0;
let page = "menu";

const screen = document.getElementById("screen");

function render() {
    if (page === "menu") {
        screen.innerHTML = "";

        items.forEach((name, i) => {
            const item = document.createElement("div");

            item.className = "item";

            if (i === selected) {
                item.className += " selected";
            }

            item.textContent = (i + 1) + ". " + name;

            screen.appendChild(item);
        });

    } else {

        screen.innerHTML =
            '<div class="message">' +
            '<b>' + page + '</b><br><br>' +
            'Coming soon<br><br>' +
            'Press BACK' +
            '</div>';
    }
}

document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (key === "ArrowUp") {

        selected--;

        if (selected < 0) {
            selected = items.length - 1;
        }

        render();
    }

    else if (key === "ArrowDown") {

        selected++;

        if (selected >= items.length) {
            selected = 0;
        }

        render();
    }

    else if (key === "Enter") {

        page = items[selected];

        render();
    }

    else if (
        key === "1" ||
        key === "2" ||
        key === "3" ||
        key === "4"
    ) {

        selected = Number(key) - 1;

        page = items[selected];

        render();
    }

    else if (
        key === "Escape" ||
        key === "Backspace"
    ) {

        page = "menu";

        render();
    }

});

render();
