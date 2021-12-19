
//Create input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Gather input and testing the time
  readline.question('Please type the url:', address => {
    var adr = address;
    const http = require("http");
    var url = require('url');
    var test_url = url.parse(adr, true);
    var start = new Date();
    var time=0;
    http.get({host:test_url.host, port: 80}, function(res) {
        time= (new Date() - start)/1000
        console.log('Request took:', time, 's');
        if (time <= 0.5){
            console.log('Good');
        }
        else if (time<5 && time>0.5){
            console.log('fine');
        }
        else if(time>5){
            console.log('terrible');
        }
    });
   readline.close();
  });








