/**
 * Created by MinDah on 2016/9/14.
 */

$(function(){
$(".acrossremindeffecindex").mouseenter(function(){
    $(this).siblings(".acrossremindeffectout").addClass("acrossremindeffectoutho")
    $(this).siblings(".maindataspecialeffect").addClass("maindataspecialeffectct")
}).mouseleave(function(){
    $(".acrossremindeffectout").removeClass("acrossremindeffectoutho")
    $(".acrossremindeffectin").removeClass("acrossremindeffectinho")
    $(this).siblings(".maindataspecialeffect").removeClass("maindataspecialeffectct")
})

$(".popupboxclose").click(function(){
    $(".popuofunxtionbox").hide();
})
$(".aroundfunctioneffect").click(function(){
    $(".popuofunxtionbox").show();
})


})