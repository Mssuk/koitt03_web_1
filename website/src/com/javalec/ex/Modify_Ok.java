package com.javalec.ex;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet(name = "Modify_Ok", urlPatterns = "/Modify_Ok")
public class Modify_Ok extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        actionDo(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        actionDo(request,response);
    }
    protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Connection con = null;
        PreparedStatement preparedStatement = null;
        try {
            String sql = "update LMS_MEMBER set pw=?, NAME=?, email=?, ADDRESS=?, phone=?, BIRTH=?" +
                    ", GENDER=?, NEWS=?, sms=? where id=?";

            Class.forName("oracle.jdbc.OracleDriver");
            con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","ora_user","1234");
            preparedStatement = con.prepareStatement(sql);

            request.setCharacterEncoding("utf-8");
            String pw = request.getParameter("pw");
            String name = request.getParameter("name");
            String email = request.getParameter("email");
            String address = request.getParameter("address");
            String phone = request.getParameter("phone");
            String birth = request.getParameter("birth");
            String gender = request.getParameter("gender");
            String news = request.getParameter("news");
            String sms = request.getParameter("sms");
            String id = request.getParameter("id");
            int check = 0;

            preparedStatement.setString(1, pw);
            preparedStatement.setString(2, name);
            preparedStatement.setString(3, email);
            preparedStatement.setString(4, address);
            preparedStatement.setString(5, phone);
            preparedStatement.setString(6, birth);
            preparedStatement.setString(7, gender);
            preparedStatement.setString(8, news);
            preparedStatement.setString(9, sms);
            preparedStatement.setString(10, id);
            check = preparedStatement.executeUpdate();
            if(check == 1){
                response.sendRedirect("admin_main.jsp");
            }else{

            }



        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try{
                if(con!=null) con.close();
                if(preparedStatement!=null) preparedStatement.close();
            }catch(Exception e2){
                e2.printStackTrace();
            }
        }
    }
}
