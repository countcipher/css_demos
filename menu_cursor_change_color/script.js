const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    
    //console.log(e.pageX, e.pageY);
});