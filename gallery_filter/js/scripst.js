$(document).ready(function(){
    const list = document.querySelectorAll('.list');
    list[0].classList.add('active');
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.itemBox').show(500);
        }else{
            $('.itemBox').not('.'+value).hide(500);
            $('.itemBox').filter('.'+value).show(500);
        }

        //add active class on selected items
        $(this).addClass('active').siblings().removeClass('active');
        
    })
})