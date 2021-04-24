$(document).ready(function(){
    // слайдер на index странице +++++ +++++   ++++++++ +++++ +++++   ++++
    if ($('section').is('.index-slider')) {
    
    $('.index-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
    }
    // слайдер на index странице -------- ------------ ----------- ---------

    //    ++++    фогрма поиска товаров  ++++++++++++++++++++++++++++++++++++++++++++++++
    if ($('.search-product').length !== 0) {
        $('.search-product__tab-item label').on('click', function(e) {
                e.preventDefault();
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
    
    //    ----    фогрма поиска товаров  ---------------------        ------------------ --------------

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

});