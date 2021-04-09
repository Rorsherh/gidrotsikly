$(document).ready(function(){

        $('.search-form__item-suptitle').on('click',function(){
        $(this).toggleClass('search-form__item-suptitle--active');
        $(this).next().slideToggle();
    })
});