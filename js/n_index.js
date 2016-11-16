/**
 * Created by admin on 2016/8/18.
 */
//内页tab
var result = false;
window.onload = function() {
    var mySwiper1 = new Swiper('.tab',{
        speed:500,
        freeMode : true,
        slidesPerView : 'auto'
    });
    $(".tabs a").on('touchstart mousedown',function(e){
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.slideTo( $(this).index() )
    });
    $(".tabs a").click(function(e) {
        e.preventDefault()
    });

    var pheight = $(".smar_fr img").height();
    if($(window).width()>545){
        $(".smar_fl").height(pheight/1.1);
    }
    $(window).bind("resize", resizeWindow);
    function resizeWindow( e ) {
        if($(window).width()>545){
            var pheight = $(".smar_fr img").height();
            $(".smar_fl").height(pheight/1.1);
        }
    }
};
$(document).ready(function(){
    var $tab_li = $('.tab .tab_div ');
    $tab_li.click(function(){
        $(this).addClass('selectedl').siblings().removeClass('selectedl');
        var index = $tab_li.index(this);
        $('div.tab_box').eq($(".tabs .active").index()).find('> div').eq(index).show().siblings().hide();
        $(window).bind("resize", resizeWindow);
        document.getElementById("DIV3").style.height=document.getElementById("DIV2").scrollHeight+"px";
        function resizeWindow( e ) {
            var newWindowHeight = $(window).height();
            document.getElementById("DIV3").style.height=document.getElementById("DIV2").scrollHeight+"px";
        }
    });
});

$(function(){
    $(".ulA3").bind("mouseover", function() {
        $(this).addClass("flipy");
    }).bind("mouseout", function() {
        $(this).removeClass("flipy");
    });
});

$(document).ready(function(){
    var $ch_tp_a = $('.xh_list a');
    $ch_tp_a.click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
});

$(document).ready(function(){
    var $tab_li = $('.product_menu a');
    $tab_li.hover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li.index(this);
        $('div.product_box > div').eq(index).show().siblings().hide();
    });
});

