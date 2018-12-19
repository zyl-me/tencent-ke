$(function() {
    var bannerIndex = 0;
    var timer = null;
    var $bannerList = $(".banner .content li");
    var $bannerBtns = $(".banner .btns li");

    $(".banner section > .left").click(function(argument) {
        // body...
        bannerChanger(-1);
    }).hover(function() {
        clearInterval(timer)
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        autoPlay();
    });;
    $(".banner section > .right").click(function(argument) {
        // body...
        bannerChanger(1);
    }).hover(function() {
        clearInterval(timer);
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        autoPlay();
    });;
    $bannerBtns.click(function(event) {
        /* Act on the event */
        $(this).addClass("active").siblings().removeClass('active');
        $bannerList.eq($(this).index()).addClass('active').siblings().removeClass('active');
    }).hover(function() {
        clearInterval(timer);
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        autoPlay();
    });;
    autoPlay();
    function autoPlay() {
        timer = setInterval(function() {
           bannerChanger(1);
           
        }, 4000);
    }
    function bannerChanger(num) {
        bannerIndex += num;
         if(bannerIndex == $bannerList.length) {
                bannerIndex = 0;
        } else if (bannerIndex < 0) {
            bannerIndex = $bannerList.length - 1;
        }
        $bannerList.eq(bannerIndex).addClass("active").siblings().removeClass('active');
        $bannerBtns.eq(bannerIndex).addClass("active").siblings().removeClass('active');
}
})