$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        // model box
        $('#open-box').on('click',function(){
            $('#box-container').show();
        });
        //Photo Viewer
        $('#img-container img').on({
            mouseover: function(){
                $(this).css({
                    'cursor':'pointer',
                    'border-color':'red'
                });
            },
            mouseout:function(){
                $(this).css({
                    'cursor':'default',
                    'border-color':'grey'
                });
            },
            click:function(){
                let imgURL = $(this).attr('src');
                $('main-image').fadeOut(100,function(){
                    $(this).attr('src', imgURL);
                }).fadeIn(100);
            }
        });

        //slider
        $('.next').on('click',function(){
            let currentImg = $('.active');
            let nextImg = currentImg.next();
            if(nextImg.length){
                currentImg.removeClass('active').css
                ('z-index', -10);
                    nextImg.addClass('active').css
                ('z-index', 10);
            }
        });
        $('.prev').on('click',function(){
            let currentImg = $('active');
            let prevImg = currentImg.prev();
            if(prevImg.length) {
                currentImg.removeClass('active').css
            ('z-index', -10);
                    prevImg.addClass('active').css
            ('z-index', 10);
            }
        });

        //set a timer so it run by itself nonstop
        //both sides ever 4 sec

        let timer= setInterval(function(){
            let currentImg = $('.active');
            let nextImg = currentImg.next();
            if(nextImg.length) {
                currentImg.removeClass('active')
            .css('z-index', -10);
                nextImg.addClass('active').css
            ('z-index', 10);
            }else{
                let prevImg = currentImg.prev();
                prevImg.addClass('active').css
            ('z-index', 10);
            }
        },4000 );

        $('img-active').on('click',function() {
            clearInterval(timer);
        });
    });
});

