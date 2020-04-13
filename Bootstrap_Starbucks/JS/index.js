(function() {
    let scrollPosition; // 记录滚动条位置点

    $('#showBtn').click(function() {
        $('.menu').removeClass('hide').addClass('show');
        shadowMenu();
    });
    $('.icon-close').click(function() {
        $('.menu').removeClass('show').addClass('hide');
        shadowMenu();
    });

    $(window).resize(function() {
        shadowMenu();
        if ($(document).scrollTop()) {
            scrollPosition = $(document).scrollTop();
        }
        if ($('.menu').hasClass('show') && $(window).outerWidth() <= 992) {
            $(document).scrollTop(0);
        } else if ($('.menu').hasClass('show')) {
            $(document).scrollTop(scrollPosition);
        }
    });

    // 全屏菜单弹出，隐藏 body 滚动条
    // 全屏菜单隐藏，显示 body 滚动条
    function shadowMenu() {
        if ($(window).outerWidth() <= 992 && $('.menu').hasClass('show')) {
            $(document.body).css({
                overflow: 'hidden'
            });
        } else {
            $(document.body).css({
                overflow: 'auto'
            });
        }
    }

    // 最下侧 咖啡星讲堂左右按钮
    $('.scroll-wrap span.icon-arrow_left').click(function() {
        // console.log('left');
        // if ()
    });

    $('.scroll-wrap span.icon-arrow_right').click(function() {
        // console.log('right');
    });
}())