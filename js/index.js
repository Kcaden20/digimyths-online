var ogCSS = document
.querySelectorAll('style,link[rel="stylesheet"]');
var head = document.getElementsByTagName('head')[0]; 
var buttons = document.getElementsByTagName('button');
var cssRemove = false; 
var lightMode = true;
var localStorageName = 'mode'
var localStorageArray = ['noCSS', 'CSS', 'Dark', 'Light']
var buttonsInnerHTML = ['Add CSS', 'No CSS', 'Light Mode', 'Dark mode']
var mode = localStorage.getItem("mode");

//Helper Functions
function setLocalStorage(x) {
    localStorage.setItem(localStorageName, localStorageArray[x]);
}

function changeButtonText(a,b) {
    buttons[a].innerHTML = buttonsInnerHTML[b];
}

function cssDel() {
    ogCSS.forEach(item => item.remove());
    changeButtonText(0, 0);
    cssRemove = true;
    setLocalStorage(0);
}

function cssAdd() {
    ogCSS.forEach(item => head.appendChild(item));
    changeButtonText(0, 1);
    cssRemove = false;
    setLocalStorage(1);
}

function cssDark(){
    changeButtonText(1, 2);
    document.querySelector('body').classList.add('dark-theme');
    lightMode = false;
    setLocalStorage(2);
}

function cssLight(){
    changeButtonText(1,3);
    document.querySelector('body').classList.remove('dark-theme');
    lightMode = true;
    setLocalStorage(3);
}
//Main Functions
function toggleCSS() {
    if(cssRemove == false) {
        cssDel();
    } else {
        cssAdd();
    }
}

function darkMode(){
    if (cssRemove == false) {
        if(lightMode == true) {
            cssDark();
        } else {
            cssLight();
        }
    }
}

switch (mode) {
    case localStorageArray[0]:
        console.log('0');
        cssDel();
        break;
    case localStorageArray[1]:
        console.log('1')
        cssAdd();
        break;
    case localStorageArray[2]:
        console.log('3')
        cssDark();
        break;
    case localStorageArray[3]:
        console.log('4')
        cssLight();
        break;
    default:
}
