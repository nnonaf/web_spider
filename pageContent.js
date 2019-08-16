var Crawler = require("crawler");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, result) {


        if (result) {

            const dom = new JSDOM(result.body);
            // let price = dom.window.document.querySelector(".text-primary").textContent;
            // let propertyName = dom.window.document.querySelector(".title-head h1-tag");
            // let description = dom.window.document.querySelector(".");
            // let AllAtage = dom.window.document.querySelector(".");
            console.log(dom.window.document.querySelector("h1-tag").textContent)



        }
    }




});

// Queue just one URL, with default callback
c.queue('https://www.privateproperty.com.ng/listings/5-bed-detached-duplex-for-sale-sangotedo-elgl0000');