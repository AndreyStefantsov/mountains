/*window.scrollTo(0, 0);
document.documentElement.style.scrollBehavior = 'auto';
document.body.style.scrollBehavior = 'auto';

window.onload = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
}*/

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 116) {
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';   
        setTimeout(() => location.reload(), 300);
    }
})

var images = [].slice.call(document.getElementsByTagName('img'));

var div = document.querySelector('.preloader__percents');
div.innerHTML = `0%`;

function hidePreloader() {
    var preloader = document.querySelector('.preloader');
    var top = document.querySelector('.preloader__circle_top');
    var middle = document.querySelector('.preloader__circle_middle');
    var bottom = document.querySelector('.preloader__circle_bottom');
    div.style.opacity = '0';
    setAnimation(top);
    setAnimation(middle);
    setAnimation(bottom);

    setTimeout(() => {
        document.body.style.overflow = 'auto';
        setTimeout(() => preloader.style.display = 'none', 1000);
        preloader.style.opacity = '0';
    }, 2000);
    
}

function setAnimation(item) {
    setTimeout(() => item.classList.add('down-left'), 100);
}

//var images = document.images;
var preloaderPercent = Math.trunc(100/images.length);

var progressBar = 0
var progress = 0;
var imgCount = 0;

for (var i = 0; i<images.length; i++) {
    var imgCopy = new Image();
    imgCopy.src = images[i].src;
    imgCopy.addEventListener('load', loading);
    imgCopy.addEventListener('error', loading); 
}

function loading() {
    window.scrollTo(0, 0);
    step = progress;
    progress += preloaderPercent;
    ++imgCount;

    if (imgCount === images.length)  {
        smoothIterate(100, preloaderPercent*10);
        setTimeout(() => hidePreloader(), 500);
    }
    else {
        smoothIterate(progress, preloaderPercent*10)
        
    }
}

function smoothIterate(limit, delay) {
    var timer = setInterval(() => { 
        if (step < limit) { 
            div.innerHTML = `${++step}%`
        } else {
            clearInterval(timer);
        };
    }, delay);
}
