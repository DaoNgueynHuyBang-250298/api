const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

var referralcode = [
    { "MGT": "111111", "ID": "1" },
]
var accounts = [
    { "TDN": "admin", "MK": "admin" },
    { "TDN": "anhbachacu", "MK": "a" },
]
var customers = [
    { "BD": "ac min", "SD": "0", "TDN": "admin" },
    { "BD": "anh ba", "SD": "320000000", "TDN": "anhbachacu" },
]
var results = [
    { "SK": "1504188", "ONE": "7", "TWO": "7", "THREE": "6", "FOUR": "20" },
    { "SK": "1504189", "ONE": "8", "TWO": "3", "THREE": "2", "FOUR": "13" },
    { "SK": "1504190", "ONE": "9", "TWO": "0", "THREE": "2", "FOUR": "11" },
    { "SK": "1504191", "ONE": "7", "TWO": "8", "THREE": "6", "FOUR": "21" },
    { "SK": "1504192", "ONE": "9", "TWO": "7", "THREE": "9", "FOUR": "25" },
    { "SK": "1504193", "ONE": "6", "TWO": "3", "THREE": "0", "FOUR": "9" },
    { "SK": "1504194", "ONE": "2", "TWO": "2", "THREE": "6", "FOUR": "10" },
    { "SK": "1504195", "ONE": "0", "TWO": "7", "THREE": "5", "FOUR": "12" },
    { "SK": "1504196", "ONE": "8", "TWO": "4", "THREE": "2", "FOUR": "14" },
    { "SK": "1504197", "ONE": "6", "TWO": "0", "THREE": "6", "FOUR": "12" },
    { "SK": "1504198", "ONE": "7", "TWO": "8", "THREE": "3", "FOUR": "18" },
    { "SK": "1504199", "ONE": "5", "TWO": "1", "THREE": "4", "FOUR": "10" },
    { "SK": "1504200", "ONE": "0", "TWO": "0", "THREE": "6", "FOUR": "6" },
    { "SK": "1504201", "ONE": "7", "TWO": "3", "THREE": "6", "FOUR": "16" },
    { "SK": "1504202", "ONE": "1", "TWO": "9", "THREE": "0", "FOUR": "10" },
    { "SK": "1504203", "ONE": "4", "TWO": "7", "THREE": "0", "FOUR": "11" },
    { "SK": "1504204", "ONE": "3", "TWO": "2", "THREE": "0", "FOUR": "5" },
    { "SK": "1504205", "ONE": "9", "TWO": "0", "THREE": "6", "FOUR": "15" },
]
var withdrawmoneys = [
    { "STR": "100000", "STK": "0440120213", "TNH": "MSB Bank", "TCT": "Nguyễn Thành Ba", "STT": "1", "TDN": "anhbachacu" },
    { "STR": "200000", "STK": "0440125445", "TNH": "SHB Bank", "TCT": "Nguyễn Văn An", "STT": "1", "TDN": "admin" },
]
var resultdetails = [
    { "SK": "1704199", "VC": "FLC", "TL": "0.022", "STC": "1000000", "STT": "0", "TDN": "admin" },
]

var date2 = new Date();
var minute2 = date2.getMinutes();
var second2 = date2.getSeconds();
var vall = 300000 - (minute2 % 5 * 60 + second2) * 1000

var myFunction = function () {
    clearInterval(interval);
    vall = 300000;
    var ky = getDateTime();
    var one = randomInteger(0, 9);
    var two = randomInteger(0, 9);
    var three = randomInteger(0, 9);
    var four = one + two + three;
    results.push({ "SK": ky, "ONE": one + '', "TWO": two + '', "THREE": three + '', "FOUR": four + '' });
    interval = setInterval(myFunction, vall);
}
var interval = setInterval(myFunction, vall);



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function getDateTime() {
    let date = new Date();
    let day = (date.getDate()).toString();
    let month = (date.getMonth() + 1).toString();
    let minute = date.getMinutes().toString();
    let hour = date.getHours().toString();
    let val = ''
    if ((Number(minute) / 5 + Number(hour) * 12) < 10) {
        val = '00' + Math.floor((Number(minute) / 5 + Number(hour) * 12))
    }
    else if ((Number(minute) / 5 + Number(hour) * 12) < 100) {
        val = '0' + Math.floor((Number(minute) / 5 + Number(hour) * 12))
    }
    else {
        val = Math.floor((Number(minute) / 5) + Number(hour) * 12)
    }

    if (day.length < 2)
        day = "0" + day
    if (month.length < 2)
        month = "0" + month
    return day + month + val
}

// *************************************************************************************
// *************************************************************************************
// ************************************  COMMON  ***************************************
// *************************************************************************************
// *************************************************************************************
//  *****************GET*********************
//http://localhost
app.get('/', (req, res) => {
    res.send('hello GD world!!');
});

// *************************************************************************************
// *************************************************************************************
// *******************************  REFERRAL CODE  *************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/referralcode', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(referralcode);
});

//  *****************PUT*********************
app.put('/api/referralcode/:ID', (req, res) => {
    var code = referralcode.find(c => c.ID === req.params.ID);
    if (!code) return res.status(404).send('not found');
    code.MGT = req.body.MGT,
        res.send(code)
});
// *************************************************************************************
// *************************************************************************************
// ************************************  RESULT  ***************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/results', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(results);
});


// *************************************************************************************
// *************************************************************************************
// ***********************************  ACCOUNT  ***************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/accounts', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(accounts);
});

app.get('/api/accounts/:TDN', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = accounts.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    res.send(acc);// 404
});

//  *****************POST*********************
app.post('/api/accounts', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = {
        TDN: req.body.TDN,
        MK: req.body.MK
    };
    accounts.push(acc);
    res.send(acc);
});
//  *****************PUT*********************
app.put('/api/accounts/:TDN', (req, res) => {
    var acc = accounts.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    acc.MK = req.body.MK,
        res.send(acc)
});
//  *****************DELETE*********************
app.delete('/api/accounts/:TDN', (req, res) => {
    var acc = accounts.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');

    var index = accounts.indexOf(acc);
    accounts.splice(index, 1);
    res.send(acc);
});
// *************************************************************************************
// *************************************************************************************
// ***********************************  CUSTOMER  **************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/customers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(customers);
});

app.get('/api/customers/:TDN', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = customers.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    res.send(acc);// 404
});

//  *****************POST*********************
app.post('/api/customers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = {
        BD: req.body.BD,
        SD: req.body.SD,
        TDN: req.body.TDN
    };
    customers.push(acc);
    res.send(acc);
});
//  *****************PUT*********************
app.put('/api/customers/:TDN', (req, res) => {
    var acc = customers.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    acc.SD = req.body.SD,
        res.send(acc)
});
//  *****************DELETE*********************
app.delete('/api/customers/:TDN', (req, res) => {
    var acc = customers.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');

    var index = customers.indexOf(acc);
    customers.splice(index, 1);
    res.send(acc);
});
// *************************************************************************************
// *************************************************************************************
// *******************************  WITHDRAW MONEY  ************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/withdrawmoneys', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(withdrawmoneys);
});

app.get('/api/withdrawmoneys/:TDN', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = withdrawmoneys.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    res.send(acc);// 404
});
//  *****************POST*********************
app.post('/api/withdrawmoneys', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = {
        STR: req.body.STR,
        STK: req.body.STK,
        TNH: req.body.TNH,
        TCT: req.body.TCT,
        STT: req.body.STT,
        TDN: req.body.TDN,
    };
    withdrawmoneys.push(acc);
    res.send(acc);
});
//  *****************PUT*********************
app.put('/api/withdrawmoneys/:TDN', (req, res) => {
    var acc = withdrawmoneys.find(c => c.TDN === req.params.TDN && c.STT === "1");
    if (!acc) return res.status(404).send('not found');
    acc.STT = req.body.STT,
    res.send(acc)
});
//  *****************DELETE*********************
app.delete('/api/withdrawmoneys/:TDN', (req, res) => {
    var acc = withdrawmoneys.find(c => c.TDN === req.params.TDN && c.STT === "1");
    if (!acc) return res.status(404).send('not found');

    var index = withdrawmoneys.indexOf(acc);
    withdrawmoneys.splice(index, 1);
    res.send(acc);
});
// *************************************************************************************
// *************************************************************************************
// ********************************  RESULT DETAIL  ************************************
// *************************************************************************************
// *************************************************************************************

//  *****************GET*********************
app.get('/api/resultdetails', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(resultdetails);
});

app.get('/api/resultdetails/:TDN', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = resultdetails.find(c => c.TDN === req.params.TDN);
    if (!acc) return res.status(404).send('not found');
    res.send(acc);// 404
});
//  *****************POST*********************
app.post('/api/resultdetails', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var acc = {
        SK: req.body.SK,
        VC: req.body.VC,
        TL: req.body.TL,
        STC: req.body.STC,
        STT: req.body.STT,
        TDN: req.body.TDN,
    };
    resultdetails.push(acc);
    res.send(acc);
});
//  *****************PUT*********************
app.put('/api/resultdetails/:TDN', (req, res) => {
    var acc = resultdetails.find(c => c.TDN === req.params.TDN && c.STT === "0");
    if (!acc) return res.status(404).send('not found');
    acc.STT = req.body.STT,
    res.send(acc)
});
//  *****************DELETE*********************
app.delete('/api/resultdetails/:TDN', (req, res) => {
    var acc = resultdetails.find(c => c.TDN === req.params.TDN && c.STT === "0");
    if (!acc) return res.status(404).send('not found');

    var index = resultdetails.indexOf(acc);
    resultdetails.splice(index, 1);
    res.send(acc);
});


// *************************************************************************************
// *************************************************************************************
// ************************************  PORT  *****************************************
// *************************************************************************************
// *************************************************************************************
var port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`đang chạy trên port ${port}`);
});
