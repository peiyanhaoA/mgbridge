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


router.post('/obtain',function(req,res){
    let info = [];
    let building = fs.readdirSync('./static/shanshuiyuan');
    building.forEach(function(e){
        let floorUrl = './static/shanshuiyuan/' + e;
        let floor = fs.readdirSync(floorUrl);
        let rowArr = fs.readdirSync(floorUrl + '/' + floor[0]);
        floor.forEach(function(el){
            let roomsUrl = floorUrl + '/' + el;
            let rooms = fs.readdirSync(roomsUrl);
            rooms.forEach(function(ele){
                let roomUrl = roomsUrl + '/' + ele;
                let room = fs.readdirSync(roomUrl);
                let roomInfoUrl = roomUrl + '/' + 'room.json';
                fs.open(roomInfoUrl, 'r', function(err, fd){
                    let roomInfo = fs.readFileSync(roomInfoUrl);
                    info.push(JSON.parse(roomInfo.toString()));
                    fs.close(fd)
                })
            })
        })
    })
    setTimeout(function(){
        res.send(info);
    },100);
});

router.post('/getOwner',function(req,res){
    let buildNum = req.body.build;
    let ownerInfo = [];
    let row = [];
    let renterInfo = [];
    let findex = '';
    let rindex = '';
    let buildUrl = './static/shanshuiyuan/' + buildNum;
    let floors = fs.readdirSync(buildUrl);
    let rowUrl = buildUrl + '/' + floors[0];
    row = fs.readdirSync(rowUrl);
    floors.forEach(function(el, index){
        findex = index;
        let roomsUrl = buildUrl + '/' + el;
        let rooms = fs.readdirSync(roomsUrl);
        rooms.forEach(function(ele , rindex){
            rindex = rindex;
            let roomUrl = roomsUrl + '/' + ele;
            let room = fs.readdirSync(roomUrl);
            let ownerInfoUrl = roomUrl + '/' + 'owner.json';
            let renterInfoUrl = roomUrl + '/' + 'renter.json';
            fs.open(ownerInfoUrl, 'r', function(err, fd){
                let owner = fs.readFileSync(ownerInfoUrl);
                ownerInfo.push(JSON.parse(owner.toString()));
                fs.close(fd)
            });
            fs.open(renterInfoUrl, 'r', function(err, fd){
                let owner = fs.readFileSync(renterInfoUrl);
                renterInfo.push(JSON.parse(owner.toString()));
                fs.close(fd)
            })
        })

    })
    setTimeout(function(){
        let obj = {
            rows: row,
            owner: ownerInfo,
            renter: renterInfo
        }
        res.send(obj)
    },2000)
});

router.post('/writeOwnerInfo',function(req, res){
    let writerUrl = req.body.writeUrl;
    let newOwnerInfo = req.body.newOwner;
    let writerStream = fs.createWriteStream(writerUrl);
    writerStream.write(newOwnerInfo,'UTF8');
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });
    
    writerStream.on('error', function(err){
       console.log(err.stack);
    });
})

router.post('/writeRenterInfo',function(req, res){
    let writerUrl = req.body.writeUrl;
    let newRenterInfo = req.body.newRenter;
    let writerStream = fs.createWriteStream(writerUrl);
    writerStream.write(newOwnerInfo,'UTF8');
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });
    
    writerStream.on('error', function(err){
       console.log(err.stack);
    });
})

module.exports = router;