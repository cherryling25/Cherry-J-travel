$(function(){
    $(".paging").show();
    $(".paging a:first").addClass("active");

    //获取图像的大小,有多少图像，然后确定图像的大小
     var imageWidth = $(".window").width();      
     var imageSum = $(".image_reel img").width();   
     var imageReelWidth = imageWidth * imageSum;

     $(".image_reel").css({ "width":imageReelWidth });  //调整图像新的大小

     //分页和滑动
    rotate = function(){
        var triggerID = $active.attr("rel")-1;  //获得滑动的次数
        var image_reelPosition = triggerID*imageWidth;  //确定图像卷需要滑动的距离
        $(".paging a").removeClass("active");   //删除所有active类
        $active.addClass("active"); //正在显示的分页增加active类
        $(".image_reel").animate({  //滑动动画
            left: -image_reelPosition 
        }, 500);
    }
   
   //定时时间
     rotateSwitch = function() {
        play = setInterval(function() { //这个总过程每隔7秒重复一次
            $active = $(".paging a.active").next(); //移动到下一个分页
            if ($active.length === 0) {         // 如果分页准备结束
                $active = $(".paging a:first");  // 返回到第一个
            }
            rotate();     //触发分页和滑块函数
        }, 2000);   //每隔分页停留的定时器速度
    }
    rotateSwitch();

    //On Click
    $(".paging a").click(function() {
       $active = $(this);
       clearInterval(play);     //动画立即停止
       rotate();        //立即触发rotate函数
       rotateSwitch();  //重新开始rotateSwitch方法
       return false;    //以防定时器是a链接，浏览器会跳转到链接
    });

    //On hover
    $(".image_reel a").hover(function() {
        clearInterval(play);    //鼠标移进，停止play方法
    }, function() {
        rotateSwitch();     //  鼠标移走，重新开始rotateSwitch方法
    });
}) 