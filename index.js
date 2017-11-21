const fs = require('fs');
const colors = require('colors');
/**
 * An express middleware that provides you with log data . Please note that don't use icons with logFile options
 * @param {Object} obj - Please specify your settings
 */
module.exports = function(obj){
    /**
     * Creates a log file and saves the given data
     * @param {string} The string data itself
     */
    const logFile = (str)=> {
        fs.writeFileSync('./logger.log', str);
    }
    if (obj) {
        if(obj.icon == true && obj.colors == true && obj.logFile == true){
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `💻  URL : ${req.url}`.yellow;
                method = `🌎  METHOD : ${req.method}`.bgBlack.green
                statusCode = `🕒  STATUS : ${res.statusCode}`.bgBlack.white;
                string = `📦  => ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                logFile(string);
                next();
            }
        }else if(obj.icon == true && obj.colors == false && obj.logFile == true){
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `💻  URL : ${req.url}`;
                method = `🌎  METHOD : ${req.method}`;
                statusCode = `🕒  STATUS : ${res.statusCode}`;
                string = `📦  => ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                logFile(string);
                next();
            }
        }else if(obj.colors == true && obj.colors == true) {
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `URL : ${req.url}`.yellow;
                method = `METHOD : ${req.method}`.green
                statusCode = `STATUS : ${res.statusCode}`.red
                string = `[SERVER]=> ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                logFile(string);
                next();
            }
        }else if(obj.logFile == true){
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `URL : ${req.url}`;
                method = `METHOD : ${req.method}`;
                statusCode = `STATUS : ${res.statusCode}`;
                string = `[SERVER]=> ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                logFile(string);
                next();
            }
        }
        else{
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `URL : ${req.url}`;
                method = `METHOD : ${req.method}`;
                statusCode = `STATUS : ${res.statusCode}`;
                string = `[SERVER]=> ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                next();
            }
        }
    }else{
        return function(req, res, next){
            return function(req, res, next){
                let url, method, statusCode, string;
                url = `URL : ${req.url}`;
                method = `METHOD : ${req.method}`;
                statusCode = `STATUS : ${res.statusCode}`;
                string = `[SERVER]=> ${url} , ${method} , ${statusCode} , Logging ...`;
                console.log(string);
                next();
            }
        }
    }
}