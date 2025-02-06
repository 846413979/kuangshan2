// script.js
$(document).ready(function() {
    //起重吨位
    $('.info_right_box .info_right_capacity .info_right_capacity_list .info_right_capacity_list_item').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    })

    /********** 起重高度滑块 START *********/
    if ($('.info_right_height').length){
        var $slider = $('.dual-range-slider');
        var $rangeBar = $('.range-bar');
        var $minHandle = $('#minHandle');
        var $maxHandle = $('#maxHandle');
        var $minValue = $('#minValue');
        var $maxValue = $('#maxValue');

        var min = 0;
        var max = parseFloat($maxValue.text());
        var sliderWidth = $slider.width();
        var handleSize = $maxHandle.width();

        function updateValues() {
            var minPos = 0;
            var maxPos = $maxHandle.offset().left - $slider.offset().left;

            var minValue = parseFloat(((minPos / (sliderWidth - handleSize)) * (max - min)).toFixed(1)) + min;
            var maxValue = parseFloat(((maxPos / (sliderWidth - handleSize)) * (max - min)).toFixed(1)) + min;

            if (minValue < min) minValue = min;
            if (maxValue > max) maxValue = max;
            if (minValue > maxValue) minValue = maxValue;

            $minValue.text(minValue);
            $maxValue.text(maxValue);

            $rangeBar.css('width', (maxPos - minPos) + handleSize);
            $rangeBar.css('left', minPos);
            if (maxValue>=100) {
                if (Number.isInteger(maxValue)){
                    $(".maxHandle_text").css('width','64px');
                }else{
                    $(".maxHandle_text").css('width','76px');
                }
            }else if(maxValue<100 && maxValue>=10){
                if (Number.isInteger(maxValue)){
                    $(".maxHandle_text").css('width','52px');
                }else{
                    $(".maxHandle_text").css('width','64px');
                }
            }else{
                if (Number.isInteger(maxValue)){
                    $(".maxHandle_text").css('width','40px');
                }else{
                    $(".maxHandle_text").css('width','52px');
                }
            }
            if (minValue<10) {
                if (Number.isInteger(minValue)){
                    $(".minHandle_text").css('width','40px');
                }else{
                    $(".minHandle_text").css('width','52px');
                }
            } else if (minValue>=10 && minValue<100) {
                if (Number.isInteger(minValue)){
                    $(".minHandle_text").css('width','52px');
                }else{
                    $(".minHandle_text").css('width','64px');
                }
            } else{
                if (Number.isInteger(minValue)){
                    $(".minHandle_text").css('width','64px');
                }else{
                    $(".minHandle_text").css('width','76px');
                }
            }
        }

        function moveHandle(e, handle, minValueFunc, maxValueFunc) {

            var newLeft = e.pageX - $slider.offset().left - handleSize / 2;

            if (newLeft < 0) newLeft = 0;
            if (newLeft > sliderWidth - handleSize) newLeft = sliderWidth - handleSize;
            var otherHandle = (handle === $minHandle) ? $minHandle : $maxHandle;

            var otherLeft = otherHandle.offset().left - $slider.offset().left;
            if (newLeft > otherLeft - handleSize / 2 && newLeft < otherLeft + handleSize / 2) {
                newLeft = otherLeft;
            } else if (newLeft < otherLeft) {
                otherHandle.css('left', newLeft + handleSize);
                maxValueFunc();
            } else {
                otherHandle.css('left', newLeft - handleSize);
                minValueFunc();
            }

            handle.css('left', newLeft);
            updateValues();
        }

        $minHandle.on('mousedown', function(e) {
            $(document).on('mousemove.slider', function(e) {
                moveHandle(e, $minHandle, updateMinValue, function() {});
            });

            $(document).on('mouseup.slider', function() {
                $(document).off('.slider');
            });

            e.preventDefault();
        });

        $maxHandle.on('mousedown', function(e) {

            $(document).on('mousemove.slider', function(e) {
                moveHandle(e, $maxHandle, function() {}, updateMaxValue);
            });

            $(document).on('mouseup.slider', function() {
                $(document).off('.slider');
            });

            e.preventDefault();
        });

        function updateMinValue() {
            var minLeft = $minHandle.offset().left - $slider.offset().left;
            $minValue.text(Math.round((minLeft / (sliderWidth - handleSize)) * (max - min)) + min);
        }

        function updateMaxValue() {
            var maxLeft = $maxHandle.offset().left - $slider.offset().left;
            $maxValue.text(Math.round((maxLeft / (sliderWidth - handleSize)) * (max - min)) + min);
        }

        // Initialize values
        updateValues();
        // $rangeBar.css('width', '100%');
        // $rangeBar.css('left', 0);
    }


    /********** 起重高度滑块 END *********/



    /********** 跨度 START *********/
    if ($('.info_right_span').length){
        var $slider_span = $('.dual-range-slider_span');
        var $rangeBar_span = $('.range-bar_span');
        var $minHandle_span = $('#minSpanHandle');
        var $maxHandle_span = $('#maxSpanHandle');
        var $minValue_span = $('#minSpanValue');
        var $maxValue_span = $('#maxSpanValue');

        var min_span = parseFloat($minValue_span.text());
        var max_span = parseFloat($maxValue_span.text());
        var sliderWidth_span = $slider_span.width();
        var handleSize_span = $minHandle_span.width();
        // Initialize values
        updateValues_span();
        // $rangeBar_span.css('width', '100%');
        // $rangeBar_span.css('left', 0);

        function updateValues_span() {
            var minPos_span = $minHandle_span.offset().left - $slider_span.offset().left;
            var maxPos_span = $maxHandle_span.offset().left - $slider_span.offset().left;

            var minValue_span = parseFloat(((minPos_span / (sliderWidth_span - handleSize_span)) * (max_span - min_span)).toFixed(1)) + min_span;
            var maxValue_span = parseFloat(((maxPos_span / (sliderWidth_span - handleSize_span)) * (max_span - min_span)).toFixed(1)) + min_span;


            if (minValue_span < min_span) minValue_span = min_span;
            if (maxValue_span > max_span) maxValue_span = max_span;
            if (minValue_span > maxValue_span) minValue_span = maxValue_span;

            $minValue_span.text(minValue_span);
            $maxValue_span.text(maxValue_span);

            $rangeBar_span.css('width', (maxPos_span - minPos_span) + handleSize_span);
            $rangeBar_span.css('left', minPos_span);

            if (maxValue_span>=100) {
                if (Number.isInteger(maxValue_span)){
                    $(".maxHandle_span_text").css('width','64px');
                }else{
                    $(".maxHandle_span_text").css('width','76px');
                }
            }else if(maxValue_span<100 && maxValue_span>=10){
                if (Number.isInteger(maxValue_span)){
                    $(".maxHandle_span_text").css('width','52px');
                }else{
                    $(".maxHandle_span_text").css('width','64px');
                }
            }else{
                if (Number.isInteger(maxValue_span)){
                    $(".maxHandle_span_text").css('width','40px');
                }else{
                    $(".maxHandle_span_text").css('width','52px');
                }
            }

            if (minValue_span<10) {
                if (Number.isInteger(minValue_span)){
                    $(".minHandle_span_text").css('width','40px');
                }else{
                    $(".minHandle_span_text").css('width','52px');
                }
            } else if (minValue_span>=10 && minValue_span<100) {
                if (Number.isInteger(minValue_span)){
                    $(".minHandle_span_text").css('width','52px');
                }else{
                    $(".minHandle_span_text").css('width','64px');
                }
            } else{
                if (Number.isInteger(minValue_span)){
                    $(".minHandle_span_text").css('width','64px');
                }else{
                    $(".minHandle_span_text").css('width','76px');
                }
            }
        }

        function moveHandle_span(e, handle, minValueFunc, maxValueFunc) {

            var newLeft_span = e.pageX - $slider_span.offset().left - handleSize_span / 2;

            if (newLeft_span < 0) newLeft_span = 0;
            if (newLeft_span > sliderWidth_span - handleSize_span) newLeft_span = sliderWidth_span - handleSize_span;
            var otherHandle_span = (handle === $minHandle_span) ? $minHandle_span : $maxHandle_span;

            var otherLeft_span = otherHandle_span.offset().left - $slider_span.offset().left;
            if (newLeft_span > otherLeft_span - handleSize_span / 2 && newLeft_span < otherLeft_span + handleSize_span / 2) {
                newLeft_span = otherLeft_span;
            } else if (newLeft_span < otherLeft_span) {
                otherHandle_span.css('left', newLeft_span + handleSize_span);
                maxValueFunc();
            } else {
                otherHandle_span.css('left', newLeft_span - handleSize_span);
                minValueFunc();
            }

            handle.css('left', newLeft_span);
            updateValues_span();
        }

        /*$minHandle_span.on('mousedown', function(e) {
            $(document).on('mousemove.slider_span', function(e) {
                moveHandle_span(e, $minHandle_span, updateMinValue_span, function() {});
            });

            $(document).on('mouseup.slider_span', function() {
                $(document).off('.slider_span');
            });

            e.preventDefault();
        });*/

        $maxHandle_span.on('mousedown', function(e) {

            $(document).on('mousemove.slider_span', function(e) {
                moveHandle_span(e, $maxHandle_span, function() {}, updateMaxValue_span);
            });

            $(document).on('mouseup.slider_span', function() {
                $(document).off('.slider_span');
            });

            e.preventDefault();
        });

        function updateMinValue_span() {
            var minLeft_span = $minHandle_span.offset().left - $slider_span.offset().left;
            $minValue_span.text(Math.round((minLeft_span / (sliderWidth_span - handleSize_span)) * (max_span - min_span)) + min_span);
        }

        function updateMaxValue_span() {
            var maxLeft_span = $maxHandle_span.offset().left - $slider_span.offset().left;
            $maxValue_span.text(Math.round((maxLeft_span / (sliderWidth_span - handleSize_span)) * (max_span - min_span)) + min_span);
        }
    }




    /********** 跨度滑块 END *********/


    //工作等级
    $('.info_right_box .info_right_job .info_right_job_list .info_right_job_list_item').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    })



    //可配吊具
    $('.info_available .info_available_list .info_available_list_item').click(function (){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('img.available_img').show();
            $(this).find('img.available_img_active').hide();
        }else{
            $(this).addClass('active');
            $(this).find('img.available_img').hide();
            $(this).find('img.available_img_active').show();
        }
    })


    // 描述
    $('.info_content .info_content_title .info_content_item').click(function (){
        var n = $(this).index();
        if($(this).hasClass('active')){
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        $('.info_content_content .info_content_content_item').eq(n).show().siblings().hide();

    })

    $('#inquiry').click(function (){
        $('#feedback_type').val(1);
        $('.popover_wrap').show();
    })

    $('#download').click(function (){
        $('#feedback_type').val(1);
        $('#file').val($(this).data('href'));
        $('.popover_wrap').show();
    })


    // 产品图片
    var $mainImg = $('#main-img');
    var $thumbnails = $('.thumbnail-gallery-item');
    var $thumbnailGallery = $('.thumbnail-gallery-list');
    var $prevBtn = $('.prev-btn');
    var $nextBtn = $('.next-btn');

    var currentIndex = 0;

    function updateMainImage(index) {
        $mainImg.attr('src', $thumbnails.eq(index).data('main-src'));
    }

    function updateThumbnailSelection() {
        $thumbnails.removeClass('active').eq(currentIndex).addClass('active');
    }

    $thumbnails.on('click', function() {
        currentIndex = $thumbnails.index(this);
        updateMainImage(currentIndex);
        updateThumbnailSelection();
    });

    $prevBtn.on('click', function() {
        currentIndex = (currentIndex - 1 + $thumbnails.length) % $thumbnails.length;
        $thumbnailGallery.scrollLeft(currentIndex * $thumbnails.eq(0).width());
        updateMainImage(currentIndex);
        updateThumbnailSelection();
    });

    $nextBtn.on('click', function() {
        currentIndex = (currentIndex + 1) % $thumbnails.length;
        $thumbnailGallery.scrollLeft(currentIndex * $thumbnails.eq(0).width());
        updateMainImage(currentIndex);
        updateThumbnailSelection();
    });

    // 初始化
    updateMainImage(currentIndex);
    updateThumbnailSelection();

    $prevBtn.hover(function() {
        $('.prev-img').hide()
        $('.prev-img-active').show()
    }, function() {
        $('.prev-img').show()
        $('.prev-img-active').hide()
    })

    $nextBtn.hover(function() {
        $('.next-img').hide()
        $('.next-img-active').show()
    }, function() {
        $('.next-img').show()
        $('.next-img-active').hide()
    })


    $('.info_btn img').hover(function (){
        var active_img = $(this).data('active_img');
        $(this).attr('src',active_img);
    },function (){
        var unactive_img = $(this).data('unactive_img');
        $(this).attr('src',unactive_img);
    })

    $('#consult').click(function (){
        $('#zsiq_chat_wrap').addClass('chat-iframe-open');
        $('#zsiq_float').addClass('zsiq-toggle').find('#zs_fl_close').attr('tabindex',0);
        $('#zs_fl_logo').hide();
    })

});