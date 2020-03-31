function check(){
    var name_ch=/^[가-힣].{2,3}$/;

    var pwd_ch1=/(?=.*[a-z])(?=.*[0-9]).{10,}/;
    var pwd_ch2=/(?=.*[a-z])(?=.*[~!@#$%^&*()_+|<>?]).{10,}/;
    var pwd_ch3=/(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?]).{10,}/;
    var pwd_ch4=/(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?]).{8,}/;
    //이름//

    if(form1.name.value==""){
        alert("이름을 입력해주세요>>");
        form1.name.focus();
        return false;
    }
    if(!(name_ch.test(form1.name.value))){
        alert("최소 2~3글자의 이름을 입력해주세요>>");
        form1.name.value="";
        form1.name.focus();
        return false;
    }

    //비밀번호////
    if(form1.pwd1.value==""){
        alert("비밀번호를 입력해주세요>>");
        form1.pwd1.focus();
        return false;
    }

    if(!((pwd_ch1.test(form1.pwd1.value))||(pwd_ch2.test(form1.pwd1.value))||(pwd_ch3.test(form1.pwd1.value))||(pwd_ch4.test(form1.pwd1.value)))){
        alert("비밀번호를 조건에 맞게 입력해주세요>>");
        form1.pwd1.focus();
        return false;
    }
    // 비밀번호 확인 //

    if(form1.pwd2.value==""){
        alert("비밀번호 확인란에 비밀번호를 입력해주세요.");
        form1.pwd2.focus();
        return false;
    }
    if(!(form1.pwd1.value == form1.pwd2.value)){
        alert("비밀번호가 일치하지 않습니다.");
        form1.pwd2.value = '';
        form1.pwd1.focus();
        return false;
    }
    // 이메일 //
    if(form1.email1.value==""){
        alert("이메일 란을 채워주세요.");
        form1.email1.focus();
        return false;
    }

    if(form1.email2.value==""){
        alert("이메일 란을 채워주세요.");
        form1.email2.focus();
        return false;
    }
    //주소//
    if(form1.address.value==""){
        alert("주소 란을 입력해주세요.");
        form1.zip1.focus();
        return false;
    }
    if(form1.address2.value==""){
        alert("상세주소 란을 입력해주세요.");
        form1.zip2.focus();
        return false;
    }
    //전화번호//
    if(form1.t_num1.value==""){
        alert("전화번호를 올바르게 입력해주세요.");
        form1.t_num1.focus();
        return false;
    }
    if(form1.t_num2.value==""){
        alert("전화번호를 올바르게 입력해주세요.");
        form1.t_num1.focus();
        return false;
    }
    if(form1.t_num3.value==""){
        alert("전화번호를 올바르게 입력해주세요.");
        form1.t_num1.focus();
        return false;
    }

    return true;





















}