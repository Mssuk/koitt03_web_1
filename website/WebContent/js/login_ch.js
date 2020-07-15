
function check_login(){
	var testid="test1234";
	var testpw="test12345@";

	
	if(login_form.m_id.value==""){
		alert('아이디를 입력해주세요');
		login_form.m_id.focus();
		return false;
	}
	
	if(login_form.m_pw.value==""){
		alert('비밀번호를 입력해주세요');
		login_form.m_pw.focus();
		return false;
	}
	
	if(!(testid==login_form.m_id.value&&testpw==login_form.m_pw.value)){
		alert('일치하는 정보가 없습니다. 확인후 입력하세오.');
		login_form.m_id.focus();
		return false;
	}
	alert('로그인성공');
	return login_form.submit();
	
}

function no_member(){
	var test_num="ck123456789";
	var test_pw="123456789";
	
	if(login_form2.sail_number.value==""){
		alert('주문번호를 입력해주세요');
		login_form2.sail_number.focus();
		return false;
	}
	if(login_form2.sail_pw.value==""){
		alert('비밀번호를 입력해주세요');
		login_form2.sail_pw.focus();
		return false;
	}
	if(!(test_num==login_form2.sail_number.value&&test_pw==login_form2.sail_pw.value)){
		alert('일치하는 정보가 없습니다. 확인후 입력하세오');
		login_form2.sail_number.focus();
		return false;
	}
	alert('주문내역 :황태동태찌개 2ea 이용해주셔서 감사합니다');
	location.href="login.html";
}

function admin_log(){
	var testid1="admin";
	var testpw1="12345";
	var testid2="teacher1";
	var testpw2="a12345!@";
	
	if(admin_login.ad_id.value==""){
		alert('아이디를 입력해주세요');
		admin_login.ad_id.focus();
		return false;
	}
	if(admin_login.ad_pw.value==""){
		alert('비밀번호를 입력해주세요');
		admin_login.ad_pw.focus();
		return false;
	}
	if(admin_login.login_level.value==""){
		alert('권한을 선택해주세요');
		admin_login.login_level.value="EMPLOYE";
		return false;
	}
	if(!(testid1==admin_login.ad_id.value&&testpw1==admin_login.ad_pw.value&&admin_login.login_level.value=="EMPLOYE"||testid2==admin_login.ad_id.value&&admin_login.login_level.value=="TEACHER"&&testpw2==admin_login.ad_pw.value)){
		alert('일치하는 정보가 없습니다.');
		login_form.ad_id.focus();
		return false;
	}
	alert('로그인성공');
	return admin_login.submit();
	
}