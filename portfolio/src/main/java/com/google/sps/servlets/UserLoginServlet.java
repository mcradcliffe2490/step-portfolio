package com.google.sps.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class UserLoginServlet extends HttpServlet {
    private String logDetails;
    private String loginLink; 
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        UserService userService = UserServiceFactory.getUserService();
        response.setContentType("text/html");

        if(userService.isUserLoggedIn()) {
            String logoutLink = userService.createLogoutURL("/index.html");
            logDetails = "<p>Logout <a href=\"" + logoutLink + "\">here</a>.</p>" +
                        "<form action = \"/login\" method = \"post\">" +
                        "<button type = \"submit\">Go Back</button>" +
                        "</form>";
            response.getWriter().println(logDetails);
        } else {
            String loginLink = userService.createLoginURL("/index.html");
            logDetails = "<p>Login <a href=\"" + loginLink + "\">here</a>.</p>" +
                        "<form action = \"/login\" method = \"post\">" +
                        "<button type = \"submit\">Go Back</button>" +
                        "</form>";
            response.getWriter().println(logDetails);
        }
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.sendRedirect("/index.html");
    }
}
