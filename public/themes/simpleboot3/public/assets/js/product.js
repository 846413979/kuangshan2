$(document).ready(function() {
    // 搜索
    $('.product_category').change(function (){
        change()
    })
    $('.product_tonnage').change(function (){
        change()
    })
    $('.product_industry .product_industry_list .product_industry_list_item').click(function (){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else {
            $(this).addClass('active')
        }
        change()
    })

    function change(){
        let industry = [];
        $('.product_industry .product_industry_list .product_industry_list_item.active').each(function (){
            industry.push($(this).data('id'))
        })

        const data = {
            weight: $('.product_tonnage').val(),
            profession_ids: industry.join(',')
        };
        let url = $('.product_category').find('option:selected').data('url');
        $.ajax({
            url: url,
            type: 'get',
            data:data,
            dataType: 'json',
            success: function (res) {
                if(res.code === 0){
                    alert(res.msg)
                }
                let list = res.data.list.data
                var html = '';
                for (var i = 0; i < list.length; i++) {
                    html += '<div class="e_box p_Product proList" dataid="'+list[i].id+'" data-dismoveable="" data-foreachitem="">'
                    html +=     '<div class="imgBox">'
                    html +=         '<img class="img" src="'+list[i].thumbnail+'" alt="'+list[i].title+'" title="'+list[i].title+'">'
                    html +=     '</div>'
                    html +=     '<h3 class="titleBox">'
                    html +=         list[i].title
                    html +=     '</h3>'
                    html +=     '<a class="link" href="'+list[i].url+'"></a>'
                    html += '</div>'
                }
                $('.p_productsSet').html(html)

                $('.pagination').html(res.data.page)
            }
        })
    }



    $('#feedback-submit').click(function (){
        let name = $('#feedback-name').val();// 姓名
        let phone = $('#feedback-phone').val();// 手机号
        let email = $('#feedback-email').val();// 邮箱
        let content = $('#feedback-content').val();// 内容

        let data = {
            name: name,
            phone: phone,
            email: email,
            content: content,
            type:2,
        }
        $.ajax({
            url: '/portal/index/inquiry',
            type: 'POST',
            data:data,
            dataType: 'json',
            success: function (res) {
                if (res.code == 1) {
                    alert('submit success');
                    $('.popover_wrap').hide();
                } else {
                    alert('submit failed:'+res.msg);
                }
            }
        })
    })



})