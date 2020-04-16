<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.sql.*" %><%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2020-04-16
  Time: 오후 3:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%
    response.setCharacterEncoding("utf-8");
    String authUser = (String) session.getAttribute("authUser");
    if (authUser == null) {
        out.println("<script>alert('로그인이 되어있지 않습니다. 로그인을 해주세요');");
        out.println("location.href = 'login.jsp';</script>");
    }
%>
<%!
    Connection con=null;
    PreparedStatement preparedStatement=null;
    ResultSet rs=null;
        String id,pw,name,email,address,phone,gender,news,sms;
    Timestamp birth;
    String sql;
    int check;
%>
<html>
<head>
    <title>Title</title>
</head>

<body>
<%
    try {
        id = request.getParameter("id");
        sql = "select * from lms_member where id=?";
        Class.forName("oracle.jdbc.OracleDriver");
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "ora_user", "1234");
        preparedStatement = con.prepareStatement(sql);
        preparedStatement.setString(1, id);
        rs = preparedStatement.executeQuery();

        while (rs.next()) {
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
<h2>회원정보 수정</h2>
<form action="Modify_Ok" name="modify" method="post">
    아이디: <input type="text" name="id" readonly value=<%=id%>><br>
    패스워드: <input type="password" name="pw" value=<%=pw%>><br>
    이름: <input type="text" name="name" value=<%=name%>><br>
    이메일 주소: <input type="email" name="email" value=<%=email%>><br>
    주소: <input type="text" name="address" value=<%=address%>><br>
    전화번호: <input type="text" name="phone" value=<%=phone%>><br>
    생일: <input type="date" name="birth" value=<%=birth%>><br>
    <p>성별:</p>
    <%
        if (gender.equals("남성")) {
    %>
    <label><input type="radio" name="gender" value="남성" checked>남성</label>
    <label><input type="radio" name="gender" value="여성">여성<br></label>
    <%
    } else {
    %>
    <label><input type="radio" name="gender" value="남성">남성</label>
    <label><input type="radio" name="gender" value="여성" checked>여성<br></label>
    <%
        }
    %>

    <p>뉴스레터 받기 여부</p>
    <%
        if (news.equals("예")) {
    %>
    <input type="radio" name="news" value="예" checked>예
    <input type="radio" name="news" value="아니오">아니오<br>

    <%
    } else {
    %>
    <input type="radio" name="news" value="예">예
    <input type="radio" name="news" value="아니오" checked>아니오<br>

    <%
        }
    %>

    <p>SMS 받기 여부</p>
    <%
        if (sms.equals("예")) {
    %>
    <input type="radio" name="sms" value="예" checked>예
    <input type="radio" name="sms" value="아니오">아니오<br>

    <%
    } else {
    %>
    <input type="radio" name="sms" value="예">예
    <input type="radio" name="sms" value="아니오" checked>아니오<br>

    <%
        }
    %>

    <input type="submit" value="저장">
    <input type="reset" value="취소">
</form>

<%
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        try {
            if (rs != null) rs.close();
            if (preparedStatement != null) preparedStatement.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
%>

</body>
</html>
