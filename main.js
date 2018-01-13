window.onload = function(){
    const Swiper = document.getElementById("Swiper");//轮播图内容
    const img = Swiper.firstElementChild;//轮播图
    const imgWidth = img.offsetWidth;//图片的宽度
    var xScroll = function xScroll(){
        setInterval(next,1500);
    }();

    function next() {
        newLeft = Swiper.style.left!==""?parseInt(Swiper.style.left):parseInt(Swiper.offsetLeft);//判断左边距
        newLeft -=imgWidth;//新的左边距
        if(newLeft !== -imgWidth*Swiper.children.length)//是否是最后一个图片
        {Swiper.style.left = newLeft + 'px';}//每次左移一个图片的宽度
        else{Swiper.style.left = "0px";}//返回到第一个
    }           

}