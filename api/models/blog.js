//mongo blog model
"use strict";

function Blog(){
  var blog = {
    date:"",
    author: "",
    topic: "",
    title: "",
    tags: "",
    article: "",
    citations: "",
    bibliography: "",
    comments: ""
  };

  return blog;
}

module.exports = Blog;