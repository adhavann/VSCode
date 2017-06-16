console.log("Hello I'm here");
console.log("Creating the http server");
var http=require('http');
var fs=require('fs');
//var request=require('request');
/*var server=http.createServer(function(req,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello world");

*/    // get the name of the person
    process.stdout.write("Enter the name of the person ");
    var username="";
    process.stdin.on("data",function(input){
        username=input;
    });
    //create the hostname
    var hostDetails={
        hostname:"en.wikipedia.org",
        port:443,
        path:`/wiki/${username}`,
        method:"GET"
    };
//    response.end(function(respic){
    var responseBody="";
        http.request(hostDetails,function(res){
                res.setEncoding("UTF-8");
                if(res.statusCode==200){

                    res.once("data",function(chunk){
                        console.log("Data started flowing in!");
                    });

                    res.on("data",function(chunk){
                        responseBody+=chunk;
                        console.log(`Collected ${chunk.length}`);
                    });

                    res.on("end",function(chunk){
                        process.stdout.write("Doneeee!");
                        fs.createWriteStream("myHtml.html",responseBody,function(done){
                            process.stdout.write("Your data stored in the data file!");
                        });
                    });
                }
        });
/*   });
}).listen(8000);
*/