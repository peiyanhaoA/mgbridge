const express = require('express');
const router = express.Router();
const fs = require('fs');
const async = require('async');

//增加房主信息
router.post('/getAll', function(req, res) {
    let json = req.body;
    let building = json.building;
    let floor = '';
    let roomNumber = '';
    if (json.roomNumber.length == 3) {
        floor = '0' + json.roomNumber.substr(0, 1);
        roomNumber = json.roomNumber.substr(1, 2);
    } else if (json.roomNumber.length == 4) {
        floor = json.roomNumber.substr(0, 2);
        roomNumber = json.roomNumber.substr(2, 2);
    }
    let URL = './static/shanshuiyuan/' + building + '/' + floor + '/' + roomNumber;
    let infos = {};
    fs.readFile(URL + '/owner.json', function(err, data) {
        if (err) return console.error(err);
        infos.owner = data.toString();
    });
    fs.readFile(URL + '/renter.json', function(err, data) {
        if (err) return console.error(err);
        infos.renter = data.toString();
        res.send(infos);
    });
});

fs.readdir('./static/shanshuiyuan/15/02', function(err, files) {
    console.log(files);
});


router.post('/saveAll', function(req, res) {
    console.log(req.body);
});

module.exports = router;