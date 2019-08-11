var Crawler = require("crawler");
var $ = require('jQuery');
// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);
// });

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result,$) {


        if(result){
            let page = result.body;
            let res = page.match(/price/i);
            if(res && res.length > 0){

                  console.log("kkkk")
                  const dom = new JSDOM(result.body);
                  let AllAtage = dom.window.document.querySelectorAll("a")

                  for (var i in Object.entries( AllAtage)){
                    console.log(Object.entries(AllAtage)[i][1].href);
                    // var key = Object.entries(p)[i][0];
                   
                }

            }
        }

        // $("a").each(function(index,a){
        //        console.log(a.href)
        //        c.queue(a.href);



        // })
       
    }
});

// Queue just one URL, with default callback
c.queue('http://www.amazon.com');