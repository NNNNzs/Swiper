window.onload = function(){
    const Swiper = document.getElementById("Swiper");//轮播图内容
    const img = Swiper.firstElementChild;//轮播图
    const imgWidth = img.offsetWidth;//图片的宽度
    const imgs = Swiper.children.length;
    var xScroll = setInterval(function(){pre();console.log(whichIndex());},1300);

    function next() {
        let newLeft =  offsetleft();
        newLeft -=imgWidth;//新的左边距
        if(newLeft !== -imgWidth*imgs)//是否是最后一个图片
        {Swiper.style.left = newLeft + 'px';}//每次左移一个图片的宽度
        else{Swiper.style.left = "0px";}//返回到第一个
    };
    function pre(){
        newLeft = offsetleft();
        newLeft += imgWidth;//新的左边距
        if(newLeft === imgWidth )//是否是第一张图片
        {Swiper.style.left = -imgWidth*(imgs-1) + "px"}//返回到最后一个
        else{Swiper.style.left = newLeft + 'px';}//每次右移一个图片的宽度
    };
    function offsetleft(){//判断左边距
        return Swiper.style.left!==""?parseInt(Swiper.style.left):parseInt(Swiper.offsetLeft);
    }
    
    function whichIndex(){//判断当前是第几张图片
        return ~~-offsetleft()/imgWidth;
    }
    //yes
}