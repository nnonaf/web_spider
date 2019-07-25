var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result,$) {


        if(result){
            let page = result.body;
            let res = page.match(/price/i);
            if(res && res.length > 0){

                 console.log(result.body)
            }
        }

        $("a").each(function(index,a){
               console.log(a.href)
               c.queue(a.href);



        })
       
    }
});

// Queue just one URL, with default callback
c.queue('http://www.amazon.com');