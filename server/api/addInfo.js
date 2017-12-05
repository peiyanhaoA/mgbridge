const express = require('express');
const router = express.Router();
const fs = require('fs');
const async = require('async');

const multer = require('multer');
const upload = multer({
    dest: 'static/uploads/',
    filename: function(req, file, cb) {
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        cb(null, file.originalname)
    }
});

//

//增加房主信息
router.post('/getAll', function(req, res) {
    let room = req.body.roomInfo;
    console.log(room);

    let owner = req.body.ownerInfo;
    let renter = req.body.renterArr;
    let building = room.building;
    let floor = '';
    let roomNumber = '';
    if (room.roomNumber.length == 3) {
        floor = '0' + room.roomNumber.substr(0, 1);
        roomNumber = room.roomNumber.substr(1, 2);
    } else if (room.roomNumber.length == 4) {
        floor = room.roomNumber.substr(0, 2);
        roomNumber = room.roomNumber.substr(2, 2);
    }
    let URL = './static/shanshuiyuan/' + building + '/' + floor + '/' + roomNumber;
    let infos = {};
    fs.readFile(URL + '/owner.json', function(err, data) {
        if (err) return console.error(err);
        infos.owner = JSON.parse(data.toString());
        infos.owner.push(owner);
        fs.writeFile(URL + '/owner.json', JSON.stringify(infos.owner), function(error) {
            if (error) return console.error(error);
        });
    });
    if (renter.length != 0) {
        fs.readFile(URL + '/renter.json', function(err, data) {
            if (err) return console.error(err);
            infos.renter = JSON.parse(data.toString());
            infos.renter.push(renter);
            fs.writeFile(URL + '/renter.json', JSON.stringify(infos.renter), function(error) {
                if (error) return console.error(error);
            });
        });
    }
    res.send({ 'success': 1 })
});



router.post('/profile', upload.single('file'), function(req, res, next) {
    // console.log(req.file);
    let URL = 'http://localhost:8080/profile/' + req.file.originalname;
    res.send(URL);
})


module.exports = router;