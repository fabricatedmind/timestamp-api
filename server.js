var express = require('express');
var app = express();



var parseNatural = function(date){
   
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

var parseUnix = function(date){
    var theDate = new Date(date * 1000);
    var naturalDate = theDate.toLocaleDateString('en-US',{month: 'long', day: 'numeric', year: 'numeric'});
    if (naturalDate === "Invalid Date"){
       naturalDate = null;
   }
   var rtn = {
        unix: date,
        natural: naturalDate
    };
   return rtn;
}
//app.use(parseDate);

app.get("/:date", function(req,res){
    var theDate = null;
    
     if (req.params.date.match(/[0-9]/)){
    
         theDate = parseUnix(req.params.date);
         
     }
     else {
         
        theDate = parseNatural(req.params.date);
        
     }
     res.send(theDate);
     
});

app.listen(8080, function(){
   console.log("Starting"); 
});