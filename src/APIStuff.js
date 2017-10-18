var exports = module.exports = {};
exports.getFakeJson =
    function getFakeJson() {
        function getTheStuff(callback) {
            var root = 'https://jsonplaceholder.typicode.com';
            $.ajax({
                url: root + '/posts/1',
                method: 'GET',
                headers: {
                    'Accept': 'application/json;odata=verbose'
                },
                success: function(data) {
                    callback(data);
                },
                error: function(error) {
                    console.error(JSON.stringify(error))
                    return;
                }
            });
        };

        function echoTheStuff() {
            getTheStuff(function(result) {
                console.log(result);
            });
        }

        function useTheStuff() {
            var data = getTheStuff(function(result) {
                return (result);
            });
            return data;
        }
        var exposePublicMethods = {
            echoData: echoTheStuff,
            getStuff: useTheStuff,
            whyNot: getTheStuff
        };
        return exposePublicMethods;
    };

/*console.log("from within APISTUFF");
console.log(exports);
console.log("----------");
var thisThing = exports;
var thisThing2 = thisThing.getFakeJson();
thisThing2.echoData();*/