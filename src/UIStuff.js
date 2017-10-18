var APIStuff = require('./APIStuff.js');
var someData = APIStuff.getFakeJson();
var results;
console.log(someData);
$(window).on('load', function(e) {
    $("#jsTarget").html("FINALLY WE DID SOMETHING");
    someData.whyNot(function(resultingData) {
        console.log(resultingData);
        $('#jsTarget').append('<div id="JSONResults">' + resultingData.title + '</div>');
    });
})