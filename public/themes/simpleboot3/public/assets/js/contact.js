$(function (){
    $('#submit').click(function (){
        let name = $('#popover-name').val();// 姓名
        let phone = $('#popover-phone').val();// 手机号
        let email = $('#popover-email').val();// 邮箱
        let content = $('#popover-content').val();// 内容

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
                    //谷歌点击转化
                    gtag_report_conversion();
                    alert('submit success');
                } else {
                    alert('submit failed:'+res.msg);
                }
            }
        })
    })
})