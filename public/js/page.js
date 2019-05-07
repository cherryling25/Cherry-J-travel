$(function(){

    /*导航条 */
    $(window).scroll(function() {
        if($(window).scrollTop() >= 400) {
        $(".header__logo_menu_wrap").addClass("header_fixed").slideDown();
        } else {
        $(".header__logo_menu_wrap").removeClass("header_fixed").css({"transition": "all 0.3s"});
        }
        })
     
       
       $(".onepage-menu a").click(function(){
           
            $(this).addClass("color");
           
            $(".onepage-menu a").not($(this)).removeClass("color");
       });


   /*返回顶部 */
        $(window).scroll(function() {
            $(".scrollTop").show();
            if ($(window).scrollTop()<=100) {
                $(".scrollTop").hide();
            }

        });
        $(".scrollTop").click(function(event) {
            //$(window).scrollTop(0);
            var that = $(this);
            $('html,body').animate({scrollTop: '0px'}, 700,function (){
                    that.hide();
                });      
        });


     // .two 图片放大
     $(".two .photoGraph").hover(function() {
        $(this).find('img').css({transform: 'scale(1.08)'});
        $(this).find(".box-image__info").stop().slideUp('slow');
    }, function() {
        $(this).find('img').css({transform: 'scale(1)'});
        $(this).find(".box-image__info").stop().slideDown('slow');
    })


    $(".three .photoGraph").hover(function() {
        $(this).find('img').css({transform: 'scale(1.08)'});
        $(this).find(".box-image__info").stop();
    }, function() {
        $(this).find('img').css({transform: 'scale(1)'});
        $(this).find(".box-image__info").stop();
    })

    
    // 幻灯片
    $(".paging").show();
    $(".page_image:first").addClass("pagehover");
    $(".page_image:first span:first").show();

    //获取图像的大小,有多少图像，然后确定图像的大小
     var imageWidth = $(".window").width();   
     var imageSum = $(".image_reel img").width();   
     var imageReelWidth = imageWidth * imageSum;

     $(".image_reel").css({ "width":imageReelWidth });  //调整图像新的大小

     //分页和滑动
    rotate = function(){
        var triggerID = $active.attr("rel")-1;  //获得滑动的次数
        var image_reelPosition = triggerID*imageWidth;  //确定图像卷需要滑动的距离
        
        $(".page_image").removeClass("pagehover");   //删除所有active类
        $active.addClass("pagehover"); //正在显示的分页增加active类
        
        $(".page_image .spanborder").hide();
        $active.find(".spanborder").show();

        $(".image_reel").animate({  //滑动动画
            left: -image_reelPosition 
        }, 500);
    }

    //On Click
    $(".page_image").click(function() {
       $active = $(this);
       rotate();        //立即触发rotate函数
       return false;    //以防定时器是a链接，浏览器会跳转到链接
    });

    
    
    
   
}) 