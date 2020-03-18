$(function(){
    
    ////////////////////////// footer ////////////////////////////
    
    $('#hide_menu').hide();
    
    
    $('#hide_menu').mouseenter(function(){
       
    });
    
    $('#hide_menu').mouseleave(function(){
        
    });
    
    ////////////////////////// contents ////////////////////////////
    
    // 로그인
    
    $('.titBtn1').addClass('on');
        
    $('.titBtn1').on('click',function(){
        $('.titBtn2').removeClass('on');
        $(this).addClass('on');
        $('.tableWrap').show();
        $('.galleryWrap').hide();
    });   
    
    $('.titBtn2').on('click',function(){
        $('.titBtn1').removeClass('on');
        $(this).addClass('on');
        $('.tableWrap').hide();
        $('.galleryWrap').show();
    }); 
    
    $('.tableWrap ul li:first').click(function(){
        $('.pupupWrap').show();
    });
    
    $('.pupupWrap .close').click(function(){
        $('.pupupWrap').hide();
    });
    
    // 배너, 바로가기
    
    


    
});