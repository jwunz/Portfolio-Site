//Modal Script

// var modal = document.getElementById('myModal');
// var btn = document.getElementById('myBtn');
// var span = document.getElementsByClassName('close')[0];

// btn.onclick = function() {
//     modal.style.display = 'block';
// }

// span.onclick = function() {
//     modal.style.display = 'none';
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

//Slideshow Script

// var slideData;
// var slideRequest = new XMLHttpRequest();
// var slideIndex = 0;

// loadSlideData();

// function loadSlideData() {
//     slideRequest.open('GET', '../content/json/slideshow.json');
//     slideRequest.onload = createSlideshow;
//     slideRequest.send();
// }

// function createSlideshow(evt) {
//     slideData = JSON.parse(slideRequest.responseText);

//     for (var j = 0; j < slideData.length; j++) {
//         var text = '<div class="ps-slideshow-container">';
//         for (var i = 0; i < slideData[j].slides.imgs.length; i++) {
//             text += '<div class="ps-slide"><img src="' + slideData[j].slides.imgs[i].fileName + '"><div class="ps-slide-caption">' + slideData[j].slides.imgs[i].caption + '</div></div>';
//         }
        
//         text += '<a class=ps-prev onclick=plusSlides(-1)>&#10094;</a>';
//         text += '<a class=ps-next onclick=plusSlides(1)>&#10095;</a>';

//         text += '<div class="ps-slide-indicator-container">';
//         for (var i = 0; i < slideData[j].slides.imgs.length; i++) {
//             text += '<span class="ps-slide-indicator" onclick="currentSlide(' + ( i ) + ')"></span>';
//         }
//         text += '</div></div></div>'

//         var slideshow = document.getElementById(slideData[j].slideshowName);
//         slideshow.innerHTML = text;
//     }

//     showSlides(slideIndex);
// }


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("ps-slide");
//     var indicators = document.getElementsByClassName("ps-slide-indicator");
    
//     if (n >= slides.length) {
//         slideIndex = 0;
//     }

//     if (n < 0) {
//         slideIndex = slides.length - 1;
//     }
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < indicators.length; i++) {
//         indicators[i].className = indicators[i].className.replace(" active", "");
//     }

//     console.log(slides);
//     console.log(slides[0]);
//     console.log(slideIndex);

//     slides[slideIndex].style.display = "block";
//     indicators[slideIndex].className += " active";
// }

//Nav-builder script

var navRequest = new XMLHttpRequest();

loadNavData();

function loadNavData(){
    console.log('Loading Nav Data...');
    navRequest.open('GET', '../content/json/pages.json');
    navRequest.onload = buildNav;
    navRequest.send();
}

function buildNav(e){
    var navList = document.getElementById('ps-nav-list');
    console.log(navList);
    var navData = JSON.parse(navRequest.responseText);

    for(var i = 0; i < navData.length; i++){
        if(`..${window.location.pathname}` == navData[i].url){
            navList.innerHTML += `<li><a class="ps-btn ps-here" href="${navData[i].url}">${navData[i].name}</a></li>`;
        }
        else {
            navList.innerHTML += `<li><a class="ps-btn" href="${navData[i].url}">${navData[i].name}</a></li>`;
        }
    }
}