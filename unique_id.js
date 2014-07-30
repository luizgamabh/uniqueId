/*! Author: Luiz Gustavo Freire Gama */

'use strict';

var uid = function(digits) {
    var args = arguments;

    function repeatZerosAndEval(zeros) {
        var value = "0x1";
        while (zeros--) value += "0";
        return eval(value);
    }

    function rand(x) {
        var concat = "";
        while (x--)
            concat += Math.floor((1 + Math.random()) * repeatZerosAndEval(digits)).toString(16).substring(1);
        return concat;
    }
    return (function() {
        var reply = new Array();
        for (var i = 1; i < args.length; i++)
            reply.push(rand(args[i]));
        return reply.join("-");
    })();
};