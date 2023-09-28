/**
 * this custom input element is used to remove browser autocomplete
 */
class MyInput extends HTMLInputElement {
    constructor(...args) {
        super(...args);
        const attr = this.attributes;
        this.setAttribute("readonly", "true");
        this.addEventListener("focus", () => {
            this.removeAttribute("readonly");
        });
    }
}
customElements.define("my-input", MyInput, {
    extends: "input",
});

// yyyy-mm-dd hh:ii:ss
function dateTimeStr() {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length == 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    minute = "" + now.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function openNav() {
    document.getElementById("appSidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("appSidenav").style.width = "0";
}
function openSubMenu(e) {
    const submenu = e.target.nextSibling.nextSibling;
    if (submenu.style.display == 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}