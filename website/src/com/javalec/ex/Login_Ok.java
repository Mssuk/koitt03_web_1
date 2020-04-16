package com.javalec.ex;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name = "Login_Ok", urlPatterns = "/Lok")
public class Login_Ok extends HttpServlet {

    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doPost들어옴");
        actionDo(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doGet들어옴");
        actionDo(request, response);
    }

    protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String pw = request.getParameter("pw");
        String sql = "select id,pw from lms_member where id='" + id + "' and pw='" + pw + "'";
        try {
            //db 연결부분
            Class.forName("oracle.jdbc.OracleDriver");
            con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "ora_user", "1234");
            stmt = con.createStatement();
            rs = stmt.executeQuery(sql);

            if (rs.next()) {
                //데이터가 있는 경우
                //id, pw 데이터
                while (rs.next()) {
                    id = rs.getString("id");
                    pw = rs.getString("pw");
                    //세션 추가
                    HttpSession session = request.getSession();
                    session.setAttribute("user_id", id);
                    session.setAttribute("user_pw", pw);
                    session.setAttribute("authUser", id);
                    response.sendRedirect("admin_main.jsp");
                }
            } else {
                //데이터가 없는 경우
                System.out.println("안대");
                response.setCharacterEncoding("utf-8");
                response.setContentType("text/html; charset=utf-8");
                PrintWriter writer = response.getWriter();
                String str;
                str = "<script type=\"text/javascript\">\r\n" +
                        "      alert(\"아이디,패스워드가 잘못되었습니다. 다시 입력해주세요.\");\r\n" +
                        "      history.back(-1);\r\n" +
                        "   </script>";
                writer.println("<html><head></head><body>");
                writer.println(str);
                writer.println("</html>");
                writer.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
            response.setCharacterEncoding("utf-8");
            response.setContentType("text/html; charset=utf-8");
            PrintWriter writer = response.getWriter();
            String str;
            str = "<script type=\"text/javascript\">\r\n" +
                    "      alert(\"아이디,패스워드가 잘못되었습니다. 다시 입력해주세요.\");\r\n" +
                    "      history.back(-1);\r\n" +
                    "   </script>";
            writer.println("<html><head></head><body>");
            writer.println(str);
            writer.println("</html>");
            writer.close();
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (con != null) con.close();
            } catch (Exception e) {
                e.printStackTrace();
                response.setCharacterEncoding("utf-8");
                response.setContentType("text/html; charset=utf-8");
                PrintWriter writer = response.getWriter();
                String str;
                str = "<script type=\"text/javascript\">\r\n" +
                        "      alert(\"아이디,패스워드가 잘못되었습니다. 다시 입력해주세요.\");\r\n" +
                        "      history.back(-1);\r\n" +
                        "   </script>";
                writer.println("<html><head></head><body>");
                writer.println(str);
                writer.println("</html>");
                writer.close();
            }
        }
    }
}
