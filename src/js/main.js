$(document).ready(function(){
    // слайдер на index странице start +++++ +++++   ++++++++ +++++ ++++
    if ($('section').is('.index-slider')) {
    
    $('.index-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
    }
    // слайдер на index странице end ------------ ----------- ---------

    //    ++++    фогрма поиска товаров start +++++  +++++++  ++++++  +++++++++++
    if ($('.search-product').length !== 0) {
        $('.search-product__tab-item label').on('click', function(e) {
            let idTabActive = $(this).attr('for');
            if (String(idTabActive) == 'tab-1') {
                $('.search-product__input-text').prop('placeholder', 'Введите номер');
            }
            else if  (String(idTabActive) == 'tab-2') {
                $('.search-product__input-text').prop('placeholder', 'Введите марку');
            } 
            else if (String(idTabActive) == 'tab-3'){
                $('.search-product__input-text').prop('placeholder', 'Введите название товара');
            }
        })
        
        
    }
    
    //    ----    фогрма поиска товаров  end --------------   ---------- --------

    //  +++ ++++ +++++++  слайдер товаров  start   +++++++++ ++++++++++++++++        ++++++++++
    if ($('.products__slider').length !== 0) {
        $('.products__slider').slick({
            infinity: false,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    }
    // ------ --------- слайдер товаров end ------- ---------- -------- -------- 

//    ++++    ++++  карточка товаров start  ++++    ++++
if ($('.product-card').length !==0) {
    $('.product-card__favorite').on('click',function(){
        $(this).toggleClass('product-card__favorite--active');
    });
}
//    ----    ---- карточка товаров end  ----    ----



    // кастомные чекбоксы ++++++++++++++++ +++++++++++++++++ ++++++++++++++++++ ++++++++++
        $('.search-form__item-suptitle').on('click',function(){
        $(this).toggleClass('search-form__item-suptitle--active');
        $(this).next().slideToggle();
    })
    // кастомные чекбоксы end ------------------- ----------------------- ------------------

    // ползунок  start +++++++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++++++++++
    var $range = $(".js-range-slider");
    var $inputFrom = $("#example_2_input_from");
    var $inputTo = $("#example_2_input_to");
    var instance;
    var min = 0;
    var max = 4000000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        skin: 'round',
        type: "double",
        min: min,
        max: max,
        from: 100000,
        to: 1500000,
        step: 10000,
        grid: false,             // show/hide grid
        force_edges: false,     // force UI in the box
        hide_min_max: true,    // show/hide MIN and MAX labels
        hide_from_to: true,    // show/hide FROM and TO labels
        block: false,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs            // block instance from changing
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });
    // ползунок end ------------- ------------------ ---------------- ---  - ---

    // Кнопки акций start ++++++++++++++++++++++++++++++++++++++++
    $('.search-form__action-item').on('click',function(){
        $(this).toggleClass('search-form__action-item--active');
    })
    // Кнопки акций end ---------- ------------- ------------- ------------------- -------------- -


    //  Страница товара

    if ($('.product-description').length !== 0) {
        $('.product-description__tabs-wrapper').each(function() {
            let ths = $(this);
            ths.find('.product-description__tab-item').not(':first').hide();
            ths.find('.product-description__tab').click(function() {
                ths.find('.product-description__tab').removeClass('product-description__tab--active').eq($(this).index()).addClass('product-description__tab--active');
                ths.find('.product-description__tab-item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('product-description__tab--active');
        });

        $("#rateYo").rateYo({
            starWidth: "23px",
            spacing: "7px",
            normalFill: "#C4C4C4",
            ratedFill: "#1C62CD"
          });
    }

    
});