var ogCSS = document
.querySelectorAll('style,link[rel="stylesheet"]');
var head = document.getElementsByTagName('head')[0]; 
var buttons = document.getElementsByTagName('button');
var cssRemove = false; 

function toggleCSS() {
    if(cssRemove == false) {
        ogCSS.forEach(item => item.remove());
        buttons[0].innerHTML = 'Add CSS';
        cssRemove = true; 
    } else {
        ogCSS.forEach(item => head.appendChild(item));
        buttons[0].innerHTML = 'HTML Only';
        cssRemove = false;
    }
}

function addDarkMode() {
    document.body.classList.toggle("dark-theme");
}
