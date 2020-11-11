let slides = document.querySelector('.slider-items').children,
    nextSlide = document.querySelector('.right-slide'),
    prevSlide = document.querySelector('.left-slide'),
    totalSlides = slides.length,
    index = 0;

nextSlide.onclick=function(){
    next('next');
}

prevSlide.onclick=function(){
    next('prev');
}

function next(direction){
    if(direction == 'next'){
        index++;
        if(index == totalSlides){
            index = 0;
        }
    }
    if(direction == 'prev'){
        index--;
        if(index <= -1){
            index = totalSlides-1;
        }
    }
    for(i=0; i<totalSlides; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');   
}