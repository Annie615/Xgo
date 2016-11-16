/**
 * Created by admin on 2016/8/18.
 */
$(function(){

    //导航PC
    $(document).ready(function() {
        $( '.navpc li.marr' ).hover(
            function(){
                $(this).find("a").addClass("current");
                $(this).children('.box').fadeIn(400);
                $(this).parent().parent().parent().parent().find('.box1_bg').fadeIn(200);
            },
            function(){
                $(this).find("a").removeClass("current");
                $(this).children('.box').fadeOut(200);
                $(this).parent().parent().parent().parent().find('.box1_bg').fadeOut(100);
            }
        );
    });

    //导航WAP
    $("#menu_wap").click(function(e) {
        $("#Nav").animate({"right": "0px"}, 300);
        $("#showRight").show();
        e.stopPropagation(); //阻止冒泡
    });
    //点击浏览器窗口，任意位置，菜单要缩回�?
    $("#showRight").click(function(e) {
        $("#Nav").animate({"right": "-40%"}, 300);
        $("#showRight").hide();
    });
    $("#Nav").click(function(e) {
        e.stopPropagation(); //阻止冒泡
    });

    //浩��新�?
    /*    if($(window).width()>1024){
     $(".news_list .n_list").hover(function(){
     $(this).children('.cha').animate({"bottom":"20px"},500);
     },function(){
     $(this).children('.cha').animate({"bottom":"126px"},500);
     });
     }
     else if($(window).width()>768){
     $(".news_list .n_list").hover(function(){
     $(this).children('.cha').animate({"bottom":"20px"},500);
     },function(){
     $(this).children('.cha').animate({"bottom":"60px"},500);
     });
     }*/

    //返回顶部
    $(window).scroll(function(){
        if ($(window).scrollTop()>10){
            $(".gotop").parent().fadeIn(1500);
        }else{
            $(".gotop").parent().fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位?
    $(".gotop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    //

    //伪类
    if($(window).width()>490){
        $(".product_list li:nth-child(3n+1)").css({'padding-right': '2.5%'});
        $(".product_list li:nth-child(3n+2)").css({'padding-right': '2.5%','padding-left': '2.5%'});
        $(".product_list li:nth-child(3n)").css({'padding-left': '2.5%','border-right': '0'});
        $(".product_list li:nth-child(n+4)").css({'border-top': '1px solid #e4e9ea','padding-top': '40px','padding-bottom': '0px'});
        $(".parent li:nth-child(3n)").css({'border-right': '0'});
        $(".parent li:nth-child(-n+3)").css({'border-top': '0'});
        $(".smart_bm li:nth-child(3n)").css({'margin-right': '0'});
    }
});
