var express = require('express');

var app = express();

app.use(express.static(__dirname + "/public"))

app.get('/contactlist', function(req,res) {
    
    console.log("I received a GET request");
      
  person1 = {
      name:'pradeep',
      email:'dfbod@gmail.com',
      number: '(111) 111- 1111'     
  };  
    
    person2 = {
      name:'surya',
      email:'dfbod@gmail.com',
      number: '(222) 111- 1111'     
  }; 
    
    person3 = {
      name:'palanigopi',
      email:'dfbod@gmail.com',
      number: '(111) 444- 1111'     
  };
     var contactlist = [person1, person2, person3];
    res.json(contactlist);
});
app.listen(3000);

console.log("server running on port 3000");