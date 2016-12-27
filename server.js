var express = require('express');
var app = express();


app.get('/favicon.ico', function(req, res) {
    res.sendStatus(200);
});

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
    console.log(req.params.date.substring(0,3));
    
     if (req.params.date.substring(0,3).match(/[a-zA-Z]/g)){
        console.log("Natural: "+req.params.date);
         theDate = parseNatural(req.params.date);
         
     }
     else {
         console.log("PARSE UNIX: " +req.params.date);
        theDate = parseUnix(req.params.date);
        
     }
     res.send(theDate);
     
});
app.get("/", function(req, res){
    res.send("Unix Timestamp or Date required");
})
app.listen(process.env.PORT, function(){
   console.log("Starting"); 
}); 