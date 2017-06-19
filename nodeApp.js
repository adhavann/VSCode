console.log("Hello I'm here");
console.log("Creating the http server");
var https=require("https");
var fs=require("fs");
//var request=require('request');
/*var server=http.createServer(function(req,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello world");

*/    // get the name of the person
    process.stdout.write("Enter the name of the person ");
    var username="George_Washington";
    var hostDetails="";
    process.stdin.once('data',function(input){
        username=input;
        console.log("Got data"+username);
        hostDetails=
        {
            host:"en.wikipedia.org",
            port:443,
            path:"/wiki/"+username.toString().trim().replace(" ","_"),
            method:"GET"
        };
        console.log(hostDetails.path);
        var re=https.request(hostDetails,function(res){
            res.setEncoding("UTF-8");
            console.log(res.statusCode);
            // if(res.statusCode==200){
                    res.once('data',function(chunk){
                        console.log("Data started flowing in!");
                        process.stdout.write("yeahhhh");
                    });
                    res.on('data',function(chunk){
                        responseBody+=chunk;
                        //console.log("Collected"+ chunk.length);
                    });
                    res.on('end',function(chunk){
                        process.stdout.write("Doneeee!");
                        var file=fs.createWriteStream("myHtml.html");
                        file.write(responseBody);
                    });
                // }
        });
        re.on('error',function(error){
                    console.log("error "+error);
        });
        re.end();
        // process.close();
    });
//    response.end(function(respic){
    var responseBody="";
    var firstFileBody="";
    console.log(username);
    https.get({
        host:"www.google.com",
        path:"/"
    },function(data1){
        data1.setEncoding("UTF-8");
        data1.on('data',function(chunk){
            //console.log(chunk);
            firstFileBody+=chunk;
        });
        data1.on('end',function(done){
            var firstFile=fs.createWriteStream("firstGet.html");
            firstFile.write(firstFileBody);

        });
    });
    

/*   });
}).listen(8000);
*/