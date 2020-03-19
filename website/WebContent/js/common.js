$(function(){
    
	//icon_check//
	var aa=false;
	$('.ok_sign').click(function(){
		aa=!aa;
		if(aa==true){
			$(this).css('background-position','-29px -40px');
		}
		else{
			$(this).css('background-position','-1px -40px');
	    }
    });
	var cc=false;
	$('.ok_sign2').click(function(){
		cc=!cc;
		if(cc==true){
			$(this).css('background-position','-29px -40px');
		}
		else{
			$(this).css('background-position','-1px -40px');
	    }
    });
	
	$('.s_text').click(function(){
		aa=!aa;
		if(aa==true){
			$('.ok_sign').css('background-position','-29px -40px');
		}
		else{
			$('.ok_sign').css('background-position','-1px -40px');
	    }
    });
    ////////////////////////// footer ////////////////////////////
	$('#hide_menu').hide();
	var bb=false;
	
	$('#f_menubtn').click(function(){
		bb=!bb;
		if(bb==false){
			$('#hide_menu').hide();
		}
		else{
	        $('#hide_menu').show();
	    }
    });
    ////////////////////////// section ////////////////////////////
    
    // tap//
    
    $('.btn1').addClass('on');
        
    $('.btn1').on('click',function(){
        $('.btn2').removeClass('on');
        $(this).addClass('on');
        $('.btn1_div').show();
        $('.btn2_div').hide();
    });   
    
    $('.btn2').on('click',function(){
        $('.btn1').removeClass('on');
        $(this).addClass('on');
        $('.btn1_div').hide();
        $('.btn2_div').show();
    }); 
    
    
});