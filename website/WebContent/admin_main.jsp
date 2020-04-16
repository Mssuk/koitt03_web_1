<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>관리자 메인</title>
    <link rel="stylesheet" href="css/admin_main.css">
    <style>
        .td_id a:hover{
            color: #5a8cc5;
            border-bottom: #8B8075 2px dashed;
        }
    </style>
</head>
<body>
<%
    String authUser = (String) session.getAttribute("authUser");
    if (authUser == null) {
        String str;
        str = "<script type=\"text/javascript\">\r\n" +
                "      alert(\"로그인을 하지 않았습니다. 로그인페이지로 이동합니다..\");\r\n" +
                "      location.href='login.jsp';\r\n" +
                "   </script>";
        out.println(str);
    }
%>
<%
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;

    String id, pw, name, email, address, phone, gender, news, sms;
    Timestamp birth;
    String sql = "select * from lms_member";

%>
<!-- 관리자 헤더 입니다------------------------------------------------------------------------>
<header id="topfix">
    <div id="header">
        <div class="logo_txt">
            <span>+++++</span> <a href="#">관리자 페이지</a> <span>+++++</span>
        </div>
        <ul class="top_menu">
            <li>
                <table class="table0">
                    <tbody>
                    <tr>
                        <td>
                            <span class="float_right">
                                    <a href="#">
                                        <img alt="자물쇠" src="images/admin_main/logout.png">
                                    </a>
                                        <span class="float_right">관리자모드</span>
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </div>
    <nav id="gnb">
        <ul class="gnb_navi">
            <p>&nbsp;</p>
            <li>
                <a href="admin_board.html">
                    <span class="menuIcon0">공지사항</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="menuIcon1">환경설정</span>
                </a>
            </li>
            <li>
                <a href="manage_main.html">
                    <span class="menuIcon2">회원관리</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="menuIcon3">주문관리</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="menuIcon4">상품관리</span>
                </a>
            </li>
            <li>
                <a href="admin_event.html">
                    <span class="menuIcon5">이벤트관리</span>
                </a>
            </li>
            <li>
                <a href="main.html">
                    <span class="menuIcon6">홈페이지</span>
                </a>
            </li>
        </ul>
    </nav>
</header>
<!-- 여기까지 관리자 헤더 입니다------------------------------------------------------------------------>

<section id="admin_con">
    <h1 id="container_title">관리자메인</h1>
    <div id="left_side">
        <ul class="side_ul">
            <li>
                <button class="side_btn1"></button>
            </li>
            <li>
                <button class="side_btn2"></button>
            </li>
            <li>
                <button class="side_btn3"></button>
            </li>
            <li>
                <button class="side_btn4"></button>
            </li>
            <li>
                <button class="side_btn5"></button>
            </li>
            <li>
                <button class="side_btn6"></button>
            </li>
        </ul>
    </div>
    <div id="real_contents">
        <article>
            <h2>신규가입회원 5건 목록</h2>
            <div class="local_desc">총회원수 2,221명 중 차단 0명, 탈퇴 : 34명</div>
            <div class="tbl_n1">
                <table>
                    <thead>
                    <tr>
                        <th>회원아이디</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>권한</th>
                        <th>포인트</th>
                        <th>수신</th>
                        <th>공개</th>
                        <th>인증</th>
                        <th>차단</th>
                    </tr>
                    </thead>
                    <tbody>

                    <% try {
                        Class.forName("oracle.jdbc.OracleDriver");
                        con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "ora_user", "1234");
                        stmt = con.createStatement();
                        rs = stmt.executeQuery(sql);

                        while (rs.next()) {
                            id = rs.getString("id");
                            pw = rs.getString("pw");
                            name = rs.getString("name");
                            email = rs.getString("email");
                            address = rs.getString("address");
                            phone = rs.getString("phone");
                            birth = rs.getTimestamp("birth");
                            gender = rs.getString("gender");
                            news = rs.getString("news");
                            sms = rs.getString("sms");
                    %>
                    <tr>
                        <td class="td_id"><a href="modify.jsp?id=<%=id%>"><%=id%></a>
                        </td>
                        <td class="td-name"><%=pw%>
                        </td>
                        <td class="td_nick"><%=name%>
                        </td>
                        <td class="td_num"><%=email%>
                        </td>
                        <td class="td_point"><%=address%>
                        </td>
                        <td class="td_bool"><%=phone%>
                        </td>
                        <td class="td_bool"><%=birth%>
                        </td>
                        <td class="td_bool"><%=gender%>
                        </td>
                        <td class="td_bool"><%=news%>,<%=sms%>
                        </td>
                    </tr>

                    <%
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                        } finally {
                            try {
                                if (rs != null) rs.close();
                                if (stmt != null) stmt.close();
                                if (con != null) con.close();
                            } catch (Exception e2) {
                                e2.printStackTrace();
                            }
                        }

                    %>
                    </tbody>
                </table>
            </div>
            <div class="btn_list" style="display: inline-block ; float: right">
                <a href="join.jsp">회원정보추가</a>
            </div>
            <div class="btn_list" style="display: inline-block; float: right; padding-right: 15px">
                <a href="manage_main.html">회원 전체보기</a>
            </div>
        </article>

        <article>
            <h2>최근게시물</h2>
            <div class="tbl_n1">
                <table>
                    <thead>
                    <tr>
                        <th>분류</th>
                        <th>게시판</th>
                        <th>제목</th>
                        <th>이름</th>
                        <th>일시</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="td_category"><b>공지</b></td>
                        <td class="td_category"><b>이벤트게시판</b></td>
                        <td class="td_nick"><b>[쿡킷]3월에디션_삼시세끼~극뽁기!!</b></td>
                        <td class="td_name"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">관리자
                        </td>
                        <td class="td_date">2020-03-19</td>
                    </tr>
                    <tr>
                        <td class="td_category">문의</td>
                        <td class="td_category">Q&A</td>
                        <td class="td_nick">문의드립니다</td>
                        <td class="td_name"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">홍길동
                        </td>
                        <td class="td_date">2020-03-19</td>
                    </tr>
                    <tr>
                        <td class="td_category">리뷰</td>
                        <td class="td_category">리뷰게시판</td>
                        <td class="td_nick">맛있게 잘먹었습니다</td>
                        <td class="td_name"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">이순신
                        </td>
                        <td class="td_date">2020-03-19</td>
                    </tr>
                    <tr>
                        <td class="td_category"><b>공지</b></td>
                        <td class="td_category"><b>공지사항</b></td>
                        <td class="td_nick"><b>미리보는 쿡킷 전체 메뉴 (3月)</b></td>
                        <td class="td_name"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">관리자
                        </td>
                        <td class="td_date">2020-03-19</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn_list">
                <a href="#">최근게시물 더보기</a>
            </div>
        </article>

        <article>
            <h2>최근포인트 발생내역</h2>
            <div class="local_desc">전체 8,772건 중 5건 목록</div>
            <div class="tbl_n1">
                <table>
                    <thead>
                    <tr>
                        <th>회원아이디</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>일시</th>
                        <th>포인트 내용</th>
                        <th>적립포인트</th>
                        <th>보유포인트</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="td_id">Honggildong123</td>
                        <td class="td-name">홍길동</td>
                        <td class="td_nick"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">길동이짱123
                        </td>
                        <td class="td_date_time">2020-03-19 12:19:00</td>
                        <td>회원가입 포인트</td>
                        <td class="td_point">200</td>
                        <td class="td_point">1,000</td>


                    </tr>
                    <tr>
                        <td class="td_id">lildong123</td>
                        <td class="td-name">이순신</td>
                        <td class="td_nick">이순신123</td>
                        <td class="td_date_time">2020-03-19 12:19:00</td>
                        <td>구매 적립 포인트</td>
                        <td class="td_point">100</td>
                        <td class="td_point">1,700</td>

                    </tr>
                    <tr>
                        <td class="td_id">ggigang123</td>
                        <td class="td-name">가나다</td>
                        <td class="td_nick">gana123</td>
                        <td class="td_date_time">2020-03-19 12:19:00</td>
                        <td>구매 적립 포인트</td>
                        <td class="td_point">100</td>
                        <td class="td_point">1,500</td>


                    </tr>
                    <tr>
                        <td class="td_id">Honggildong123</td>
                        <td class="td-name">홍길동</td>
                        <td class="td_nick"><img src="https://demo.sir.kr/gnuboard5/data/member/na/naver_92e40906.gif"
                                                 style="vertical-align: middle; margin-right: 2px">길동이짱123
                        </td>
                        <td class="td_date_time">2020-03-19 12:19:00</td>
                        <td>구매 적립 포인트</td>
                        <td class="td_point">100</td>
                        <td class="td_point">1,000</td>


                    </tr>
                    <tr>
                        <td class="td_id">Honggildong123</td>
                        <td class="td_name">홍길동</td>
                        <td class="td_nick">길동이짱123</td>
                        <td class="td_date_time">2020-03-19 12:19:00</td>
                        <td>구매 적립 포인트</td>
                        <td class="td_point">100</td>
                        <td class="td_point">1,100</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn_list">
                <a href="#">포인트내역 전체보기</a>
            </div>
        </article>
        <article id="foot">
            <p>© COOKIT ALL RIGHTS RESERVED</p>
        </article>
    </div>
</section>
</body>
</html>