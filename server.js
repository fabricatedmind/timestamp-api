var express = require('express');
var app = express();



var parseDate = function(date){
   
   var theDate = new Date(date);
   var naturalDate = theDate.toLocaleDateString('en-US',{month: 'long', day: 'numeric', year: 'numeric'})
   if (naturalDate === "Invalid Date"){
       naturalDate = null;
   }
   var unixDate = Date.parse(theDate)/1000;
    var rtn = {
        unix: unixDate,
        natural: naturalDate
    };
  return rtn; 
};

//app.use(parseDate);

app.get("/:date", function(req,res){
     var dateString = req.params.date;
     var theDate = parseDate(req.params.date);
     res.send(theDate);
});

app.listen(8080, function(){
   console.log("Starting"); 
});