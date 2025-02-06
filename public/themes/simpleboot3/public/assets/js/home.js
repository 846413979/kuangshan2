$(document).ready(function () {
    // 热门产品了解更多
    $('.hot_product .hot_product_more img').hover(function () {
        $(this).attr('src', $(this).data('active_img'))
    }, function () {
        $(this).attr('src', $(this).data('normal_img'))
    })

    // 热门产品滑动
    if ($('.hot_product_line .hot_product_line_item').length === 2) {
        $('.hot_product_line').css('width', '58px')
    }
    $('.hot_product_line .hot_product_line_item').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index();
        $('.hot_product_list .hot_product_all').animate({
            marginLeft: -index * 100 + '%'
        })
    })

    $('.about_video .about_video_btn img').hover(function () {
        $(this).attr('src', $(this).data('active_img'))
    }, function () {
        $(this).attr('src', $(this).data('normal_img'))
    })

    $('.case_wrap .case_more img').hover(function () {
        $(this).attr('src', $(this).data('active_img'))
    }, function () {
        $(this).attr('src', $(this).data('normal_img'))
    })

})