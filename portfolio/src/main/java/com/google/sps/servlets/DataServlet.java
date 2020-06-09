// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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


@WebServlet("/data")
public class DataServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Query query = new Query("Comments").addSort("comment-data", SortDirection.DESCENDING);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

        Gson gson = new Gson();
        ArrayList<String> commentsList = new ArrayList<>();

        PreparedQuery results = datastore.prepare(query);
        for (Entity entity : results.asIterable()) {
            commentsList.add((String) entity.getProperty("comment-data"));
        }

        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(commentsList));
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String text = getParameter(request, "comments-input").orElse("");
        Gson gson = new Gson();

        response.setContentType("application/json");

        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        Entity commentsEntity = new Entity("Comments");
        commentsEntity.setProperty("comment-data", gson.toJson(text));

        datastore.put(commentsEntity);

        response.sendRedirect("/index.html");
    }

    private Optional<String> getParameter(HttpServletRequest request, String fieldName) {
    String value = request.getParameter(fieldName);
    Optional<String> opt = Optional.ofNullable(value);

    return opt;
    }
}
