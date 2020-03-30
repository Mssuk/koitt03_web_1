function check(){
    var name_ch=/^[가-힣]{2,3}$/;
    var id_ch=/^[a-z]{1}[a-z0-9~!@#$%^&*()_+|<>?]{3,15}$/;
    var pwd_ch1=/(?=.*[a-z])(?=.*[0-9]){10,}/;
    var pwd_ch2=/(?=.*[a-z])(?=.*[~!@#$%^&*()_+|<>?]){10,}/;
    var pwd_ch3=/(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?]){10,}/;
    var pwd_ch4=/(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?]){8,}/;
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

    //아이디//
    if(form1.userid.value==""){
        alert("ID를 입력해주세요>>");
        form1.userid.focus();
        return false;
    }
    if(!(id_ch.test(form1.userid.value))){
        alert("ID 조건에 맞춰서 입력해 주세요>>");
        form1.userid.value="";
        form1.userid.focus();
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
    }

}