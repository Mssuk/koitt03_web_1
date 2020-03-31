const articles = [];


const articleInfo0 = {
    writer:'관리자',
    date:'2019-03-29 08:08:31',
    subject:'사이트 오픈 이벤트 실시! ',
    context:`
        사이트 오픈 이벤트 실시! 
    `,
};

const articleInfo1 = {
    writer:'관리자',
    date:'2019-04-15 13:53:57',
    subject:'3.1절 휴무 관련 안내입니다.',
    context:`
       3.1절 휴무 관련 안내입니다.
    `,
};

const articleInfo2 = {
    writer:'관리자',
    date:'2019-04-15 14:03:02',
    subject:'추천인 입력시 포인트 적립해드립니다.',
    context:`
        회원가입시 추천인을 입력하시면<br>
        추천인과 추천받은 회원에게 포인트가 적립됩니다. 
    `,
};

const articleInfo3 = {
    writer:'관리자',
    date:'2019-04-15 14:03:02',
    subject:'4월 수강료 50%할인권, 스타벅스 기프티콘 2장 100% 증정',
    context:`
        4월 수강료 50%할인권, 스타벅스 기프티콘 2장 100% 증정
    `,
};

const articleInfo4 = {
    writer:'관리자',
    date:'2019-04-15 14:03:02',
    subject:'연휴 휴강/휴무 안내',
    context:`
        안녕하세요.<br>
        추석 연휴를 맞이 하여, 다음 기간은 수업 및 사무실 업무를 쉬겠습니다.<br>
        기간 : 10월02일(월) ~ 10월09일(화) : 휴강 및 휴무<br>
        상기 기간에 수강하지 못하신 수업은 연기처리 혹은 보충수업을 실시하겠습니다.<br>
        단, 상기 휴강기간에도 선생님들은 수업 진행이 가능합니다. <br>
        휴강기간에도 수강을 원하시는 경우, 선생님과 별도로 일정을 협의하셔서<br>
        수강하시기 바랍니다.<br>
        감사합니다<br>
    `,
};

const articleInfo5 = {
    writer:'관리자',
    date:'2019-04-15 14:03:02',
    subject:'카드 무이자 할부 중단 안내 (3월1일부터)',
    context:`
        카드 무이자 할부 중단 안내 (3월1일부터)
    `,
};

const articleInfo6 = {
    writer:'관리자',
    date:'2019-04-15 14:03:02',
    subject:'1:2 영어 수업 같이 하실 파트너분 찾습니다.',
    context:`
        1:2 영어 수업 같이 하실 파트너분 찾습니다.
    `,
};

const articleInfo7 = {
    writer:'관리자',
    date:'2019-04-15 14:03:33',
    subject:'사이트 약관소개',
    context:`
        사이트 약관 소개 글입니다.
    `,
};


$(document).ready(()=>{

    articles.push('test');
    articles.push(articleInfo0);
    articles.push(articleInfo1);
    articles.push(articleInfo2);
    articles.push(articleInfo3);
    articles.push(articleInfo4);
    articles.push(articleInfo5);
    articles.push(articleInfo6);
    articles.push(articleInfo7);


    const parse= location.href.split('?');
    const number = parse[1];
    const data = articles[number];
    $('#writeID').text(data.writer);
    $('#writeDate').text(data.date);
    $('#writeSubject').text(data.subject);
    $('#writeContext div').html(data.context);

});


