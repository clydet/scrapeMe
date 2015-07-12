#!/usr/bin/env node
var cheerio = require('cheerio');
var request = require('request');
var shell = require('child_process');
var jsonData = require('./events/data');
//var jsonData = require('./events/deleteme');

var interval = 10000; //milliseconds

var getCallback = function(context) {
  return function(error, response, body) {

    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var $eventEl = $('.redText');
      var $unavailable = $('.NoItemsMessage');
      if($unavailable.length > 0){
        console.log(context.code + ' not available ' + new Date());
        context.messagesent = false;
      }

      if ($eventEl.length > 0){
        var eventlist;
        for(var i = 0; i < $eventEl.length; i++){
          eventlist+=''+$($eventEl[i]).text();
          console.log('event: ' + i, $($eventEl[i]).text());
          console.log('EVENTLIST' + eventlist + '  '+ typeof eventlist);
        }
        
        if ( ( context.messagesent == false ) && ( eventlist.indexOf( context.code ) > -1 )){
          console.log('calling bash script');
          
          shell.exec(__dirname + '/sendText.sh ' + context.code + ' ' + context.date , function(error, stdout, stderr){
            console.log('stderr:', stderr);
            console.log('stdout:',stdout); 
          });
          
          context.messagesent = true;
        }
      }
    } else {
      if (typeof response != 'undefined'){
        console.log(context.code + 
        ' session may have expired status:', response.statusCode);
      } else {
        console.log(context.code + ' session may have expired and response is undefined');
      }
    }

    setTimeout(guts, interval);
  }
};

var guts = function(){
  for(var event in jsonData){

    var url = 'https://www.cosport.com/olympics/tickets.aspx?SportID=' + 
              jsonData[event].id + 
              '&EventDate=' + 
              jsonData[event].date;

    var options = {
      uri: url, 
      headers: {
        "Cookie": "ASP.NET_SessionId=0d4itpsnsg511cs0g1c4eemh; _top=0; User=CountryID=201&CurrencyID=3&CountryCode=USA&CountryName=the United States&CurrencyCode=USD&CurrencySymbol=36&ExchangeRateHospitalityPackages=1.00000000&ExchangeRateTickets=1.00000000&ExchangeRateTHPP=1.00000000&FlagImage=/images/USA.png&WebsiteAddress=ecommerce.jetsetsports.ru&ExchangeRateAccommodationOnly=1.00000000; _gat=1; _ga=GA1.2.419483383.1436107213; __atuvc=4%7C27; __atuvs=55994dab208a75b7001; _ace_cosport_com_cookie=R4260270219", 
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"
      }
    };

    request( options, getCallback( jsonData[event] ) );
  }
};

guts();

