
var slideIndex,slides,smallSlides,captionText;
function initGallery(){
    slides=document.getElementsByClassName("imageHolder");
    smallSlides=[];
    var smallSlidesContainer=document.getElementById("smallSlidesContainer");
    captionText=document.querySelector(".captionTextHolder .captionText");
    slideIndex = 0;
    slides[slideIndex].style.opacity=1;
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;
    if(slides.length<2){
        var nextPrevBtn=document.getElementsByClassName("nextPrevBtn");
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }
    var i;
    for (i = 0; i < slides.length; i++) {
        var smallSlide=document.createElement("span");
        smallSlide.classList.add("smallSlides");
        var imgElement=document.createElement("img");
        imgElement.src=slides[i].querySelector("img").src;
        smallSlide.append(imgElement);
        smallSlidesContainer.append(smallSlide);
        smallSlide.setAttribute("onclick","moveSlide("+i+")");
        smallSlides.push(smallSlide);
    }
    smallSlides[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            smallSlides[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        smallSlides[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}