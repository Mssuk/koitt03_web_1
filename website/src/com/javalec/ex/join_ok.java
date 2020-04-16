package com.javalec.ex;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
@WebServlet(name = "join_ok", urlPatterns = "/Join_Ok")
public class join_ok extends HttpServlet {
    Connection connection = null;
    //    Statement statement = null;
    PreparedStatement preparedStatement = null;
    String id, pw, name, email, address, phone, gender, news, sms;
    String birth;
    String sql;
    int check;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            actionDo(request, response);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            actionDo(request, response);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
        request.setCharacterEncoding("utf-8");
        id = request.getParameter("id");
        pw = request.getParameter("pw");
        name = request.getParameter("name");
        email = request.getParameter("email");
        address = request.getParameter("address");
        phone = request.getParameter("phone");
        birth = request.getParameter("birth");
        gender = request.getParameter("gender");
        news = request.getParameter("news");
        sms = request.getParameter("sms");
//        values ('hh113','1111','홍길동','hhh111@naver.com','가산디지털단지 제이',
//                '010-1111-1111','2000/11/11','여성','예','예');
        sql = "insert into lms_member values (?,?,?,?,?,?,?,?,?,?)";
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "ora_user", "1234");
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, id);
            preparedStatement.setString(2, pw);
            preparedStatement.setString(3, name);
            preparedStatement.setString(4, email);
            preparedStatement.setString(5, address);
            preparedStatement.setString(6, phone);
            preparedStatement.setString(7, birth);
            preparedStatement.setString(8, gender);
            preparedStatement.setString(9, news);
            preparedStatement.setString(10, sms);
            check = preparedStatement.executeUpdate();
            if(check == 1){
                response.sendRedirect("admin_main.jsp");
            } else{
                response.setCharacterEncoding("utf-8");
                response.setContentType("text/html; charset=utf-8");
                PrintWriter writer = response.getWriter();
                String str;
                str = "<script type=\"text/javascript\">\r\n" +
                        "      alert(\"회원 등록 실패!!!! 다시 시도해주세요.\");\r\n" +
                        "      history.back(-1);\r\n" +
                        "   </script>";
                writer.println("<html><head></head><body>");
                writer.println(str);
                writer.println("</html>");
                writer.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) preparedStatement.close();
                if (connection != null) connection.close();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
}