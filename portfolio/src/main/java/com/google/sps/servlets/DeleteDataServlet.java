package com.google.sps.servlets;

import java.io.IOException;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.ArrayList;
import com.google.gson.Gson;
import java.util.Optional;

@WebServlet("/delete-data")
public class DeleteDataServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        doPost(request, response);
        
    }

    @Override 
    public void doPost( HttpServletRequest request, HttpServletResponse response) throws IOException {
        Query query = new Query("Comments").addSort("timestamp", SortDirection.DESCENDING);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        
        PreparedQuery results = datastore.prepare(query);
        for (Entity entity : results.asIterable()) {
            datastore.delete(entity.getKey());
        }

        response.sendRedirect("/index.html");
    }
}
