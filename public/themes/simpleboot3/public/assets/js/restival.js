$define([], function() {
    var init = function(res){
        console.log(res)
        var fes = res.festival
        //飘雪
        renderFun(res.snow,'snow' + res.snow.effect)
        //挂灯
        renderFun(res.lamp,'lamp')
        //横幅
        renderFun(res.topBar,'topBar')
        //飘窗
        renderFun(res.window,'window')
        if(fes==2 || fes==3){//元旦 春节
            //对联
            renderFun(res.couplet,'couplet')
        }
        //方法
        function renderFun(obj,key){
            if($(document).width() <= 768 && key!="topBar"){
                return
            }
            if(!obj.isOpen){
                return
            }
            require(['/public/cjgj/commonjs/restival/' + key + '.js'],function(r){
                r.init(obj,fes)
            })
        }
    }
    return {
        init : init
    };
})