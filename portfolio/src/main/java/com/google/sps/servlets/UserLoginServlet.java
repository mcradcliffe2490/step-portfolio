package com.google.sps.servlets;


import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.ArrayList;
import com.google.gson.Gson;
import java.util.Optional;

@WebServlet("/login")
public class UserLoginServlet extends HttpServlet {
    private boolean userIsLoggedIn = false;
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        UserService userService = UserServiceFactory.getUserService();
        Gson gson = new Gson();
        response.setContentType("application/json");

        if(userService.isUserLoggedIn()) {
            userIsLoggedIn = true;
            response.getWriter().println(gson.toJson(userIsLoggedIn));
        } else {
            response.getWriter().println(gson.toJson(userIsLoggedIn));
        }
    }
}
