"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var pdf = require('html-pdf');
dotenv.config();
var app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
var port = process.env.PORT || 5000;
app.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, map, building, road, total, data, filePathName, htmlString, options, ejsData, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, map = _a.map, building = _a.building, road = _a.road, total = _a.total;
                data = {
                    font: {
                        color: 'green',
                        include: 'https://api.****.com/parser/v3/css/combined?face=Kruti%20Dev%20010,Calibri,DevLys%20010,Arial,Times%20New%20Roman',
                    },
                    map: map,
                    building: building,
                    road: road,
                    total: total,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                filePathName = path.resolve(__dirname, 'htmltopdf.ejs');
                htmlString = fs.readFileSync(filePathName).toString();
                options = { format: 'A4' };
                ejsData = ejs.render(htmlString, data);
                return [4 /*yield*/, pdf.create(ejsData, options).toFile('generatedfile.pdf', function (err, response) {
                        if (err)
                            return console.log(err);
                        console.log(response, '11111111');
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.log('Error processing request: ' + err_1);
                return [3 /*break*/, 4];
            case 4:
                res.json('asdasd');
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () { return console.log("Listening on port " + port); });
