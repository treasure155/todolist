const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const date = require(__dirname + '/date.js');

const app = express();

const items = ["Talk to your Father", "Go To the office", "Write a Code"];
const workItems = ["Make a call", "Fix a Prayer", "Fix Mendos Clean Website"];
const urgentItems = ["Speak With your Father", "Speak with your Mother", "Speak with your Brother"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/urgent", function(req, res) {
  res.render("list", {
    listTitle: "Urgent List",
    newListItems: urgentItems
  });
});

app.post("/urgent", function(req, res) {
  const item = req.body.newItem;
  urgentItems.push(item);
  res.redirect("/urgent");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is listening at port 3000");
});
