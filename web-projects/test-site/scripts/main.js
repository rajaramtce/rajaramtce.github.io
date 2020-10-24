const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc === "images/firefox.png"){
        myImage.setAttribute('src','images/chrome.jpg');
    }else{
        myImage.setAttribute('src','images/firefox.png');
    }
}

let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function(){
    setUserName();
}