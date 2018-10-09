$(document).ready(function () {

	var pic_ul=$('.panner ul').eq(0);
    var pic_img=pic_ul.find('li');
    var banner=pic_ul.find('.banner');

    var num=0,timmer=null;

    function Change(e){
        pic_img.eq(e).fadeIn(1000).siblings().fadeOut(1000);
        banner.eq(e).css('opacity','1').siblings().css('opacity','1');
    }
    function autoPlay(){
        timmer=setInterval(function(){
            if(num>2){
                num=0;
            }
            Change(num);
            num++;
        },2000);
    }
    autoPlay();

    pic_img.on('mouseover',function(){
        clearInterval(timmer);
    })
    .on('mouseout',function(){
        autoPlay();
    });

    var pre=$('.panner-pice .pre');
    var next=$('.panner-pice .next');

    pre.on('click',function(){
        clearInterval(timmer);
        num--;
        if(num<0){
            num=2;
        }
        Change(num);
        autoPlay();
    });
    next.on('click',function(){
        clearInterval(timmer);
        num++;
        if(num>2){
            num=0;
        }
        Change(num);
        autoPlay();
    });
})