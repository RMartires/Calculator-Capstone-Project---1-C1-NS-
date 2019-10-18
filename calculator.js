
let keypad = document.getElementById("keypad");
let mainbuttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "/", "*", "-", "+"];
let sidebuttons = ["Del", "="];
let allbuttons = [...mainbuttons, ...sidebuttons];
let buttons = [];
let screen;
let str = '';
let ans = 0;

screen = document.getElementById("screen");
screen.innerHTML = "0";
for (let i = 0; i < allbuttons.length; i++) {
    buttons.push(document.createElement('button'));
    buttons[i].innerText = allbuttons[i];
    buttons[i].id = `${allbuttons[i]}key`;
    keypad.appendChild(buttons[i]);
}
//eventlistener of main buts
for (let key of mainbuttons) {
    let keys = document.getElementById(`${key}key`);
    keys.addEventListener("click", () => {
        str = `${str}${keys.innerHTML}`;
        screen.innerHTML = str;
    });
}
//eventlistener of del but
document.getElementById(`${sidebuttons[0]}key`).addEventListener("click", () => {
    str = str.slice(0, str.length - 1);
    screen.innerHTML = str;
});
//eventlistener of = but
document.getElementById(`${sidebuttons[1]}key`).addEventListener("click", () => {
    ans = eval(str);
    str = ans.toString();
    screen.innerHTML = str;
});