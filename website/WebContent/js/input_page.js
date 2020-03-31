$(document).ready(function () {
    //문의 내용 , 답변알림 체크 안되있을때
    $("#bottom>a>button").click(function () {
        if(document.getElementById("textarea").value==""){
            alert("문의 내용을 입력해 주세요.");
            return false;
        }
        if((xx===false)&&(yy===false)){
            alert("답변알림) 하나는 선택해야 합니다.");
            return false;
        }

    });

    //답변알림
    //이메일
    var xx=false;
    $('.ok_sign').click(function(){
        xx=true;
        if($('.ok_sign').click(function () {
            xx=!xx;
        }));
        $("#bottom>a>button").click(function () {
            if(xx==true&&document.getElementById("email").value==""){
                alert("체크한 목록에 이메일을 입력해 주세요.");
                return false;
            }
        });

    });
    //SMS
    var yy=false;
    $('.ok_sign2').click(function(){
        yy=true;
        if($('.ok_sign2').click(function () {
            yy=!yy;
        }));
        $("#bottom>a>button").click(function () {
            if(yy==true&&document.getElementById("sms").value==""&&document.getElementById("sms2").value==""){
                alert("체크한 목록에 번호를 입력해 주세요.");
                return false;
            }
        });
    });



});