var fs = require("fs");
var handlebars = require("handlebars");

var template = handlebars.compile(fs.readFileSync("template.html", "utf8"));
var people = JSON.parse(fs.readFileSync("people.json", "utf8"));
fs.writeFileSync("index.html", template(people));
