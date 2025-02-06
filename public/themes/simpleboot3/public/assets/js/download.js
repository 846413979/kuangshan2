$(function (){

    $('.download_content_main_list_li').click(function (){
        let session = $('#session').val();
        let url = $(this).data('url');
        if(session===''){
            $('#feedback_type').val(3);
            $('.popover_wrap').show();
            $('#file_url').val(url);
            return
        }

        window.open(url);
    })

})