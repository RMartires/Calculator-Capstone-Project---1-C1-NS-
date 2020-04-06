
let keypadleft = document.getElementById("leftbuts");
let keypadright = document.getElementById("rightbuts");

let mainbuttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "/", "*", "-", "+"];
let sidebuttons = ["Del", "="];
let allbuttons = [...mainbuttons, ...sidebuttons];
let buttons = [];
let screen;
let str = '';
let history = '';
let ans = 0;


screen = document.getElementById("screen");
smallscreen = document.getElementById("smallsc");

screen.innerHTML = "0";
for (let i = 0; i < allbuttons.length; i++) {
    buttons.push(document.createElement('button'));
    buttons[i].innerText = allbuttons[i];
    buttons[i].id = `${allbuttons[i]}key`;
    if ((i >= 0 && i <= 10) || (i == 16)) {
        buttons[i].className = `leftbut`;
        keypadleft.appendChild(buttons[i]);
    } else {
        buttons[i].className = `rightbut`;
        keypadright.appendChild(buttons[i]);
    }

}
//eventlistener of main buts
for (let key of mainbuttons) {
    let keys = document.getElementById(`${key}key`);
    keys.addEventListener("click", () => {
        str = `${str}${keys.innerHTML}`;
        screen.innerHTML = str;
        trytoeval();
    });
}
//eventlistener of del but
document.getElementById(`${sidebuttons[0]}key`).addEventListener("click", () => {
    str = str.slice(0, str.length - 1);
    screen.innerHTML = str;
    if (str.length > 0) {
        trytoeval();
    } else {
        tempans = 0;
        tempstr = '';
        smallscreen.innerHTML = tempstr;
    }
});
//eventlistener of = but
document.getElementById(`${sidebuttons[1]}key`).addEventListener("click", () => {
    ans = eval(str);
    str = ans.toString();
    screen.innerHTML = str;
    tempans = 0;
    tempstr = '';
    smallscreen.innerHTML = tempstr;
});


function trytoeval() {
    try {
        tempans = eval(str);
        tempstr = tempans.toString();
        smallscreen.innerHTML = tempstr;
    } catch (e) {
        //donothing
    }

    return null;
}