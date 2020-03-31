let available = false;


const id_check_db = () => {
    //정규식 확인

    const id_ch = /^[a-z][a-z0-9~!@#$%^&*()_+|<>?].{3,15}$/;
    const $ch_id = $('#ch_id');

    if ($ch_id.val() === "") {
        alert("ID를 입력해주세요>>");
        $ch_id.focus();
        return false;
    }
    if (!(id_ch.test($ch_id.val()))) {
        alert("ID 조건에 맞춰서 입력해 주세요>>");
        $ch_id.val('');
        $ch_id.focus();
        return false;
    }


    //db와 연동 후 아이디가 있는지 확인하는 형태
    $('#ch_text').html = '아이디 사용가능합니다.';
    available = true;
};


function join_datainput() {
    if (available) {
        opener.document.getElementById('id').value = document.getElementById('ch_id').value;
        window.close();
    } else{
        document.getElementById('ch_text').innerHTML= `<p style='color:red'>확인을 먼저하세요</p>`
    }
}