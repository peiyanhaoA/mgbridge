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

//增加房主及房客信息
router.post('/getAll', function(req, res) {
    let room = req.body.roomInfo;
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
        infos.owner.unshift(owner);
        fs.writeFile(URL + '/owner.json', JSON.stringify(infos.owner), function(error) {
            if (error) return console.error(error);
        });
    });
    if (renter.length != 0) {
        fs.readFile(URL + '/renter.json', function(err, data) {
            if (err) return console.error(err);
            infos.renter = JSON.parse(data.toString());
            infos.renter.unshift(renter);
            fs.writeFile(URL + '/renter.json', JSON.stringify(infos.renter), function(error) {
                if (error) return console.error(error);
            });
        });
    }
    res.send({ 'success': 1 })
});

//获取管理员信息
router.post('/getManager', function(req, res) {
    fs.readFile('./static/manage/manager.json', function(err, data) {
        if (err) console.log(err);
        // console.log(data);
        res.send(data.toString());
    })
})


//保存文件
router.post('/profile', upload.single('file'), function(req, res, next) {
    console.log(req.file);
    let URL = 'http://localhost:8080/profile/' + req.file.originalname;
    res.send(URL);
})


router.post('/getOwner',function(req,res){
    let buildNum = req.body.build;
    let ownerInfo = [];
    let row = [];
    let renterInfo = [];
    let buildInfo = [];
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
            let buildInfoUrl = roomUrl + '/' + 'room.json';
            let ownerInfoUrl = roomUrl + '/' + 'owner.json';
            let renterInfoUrl = roomUrl + '/' + 'renter.json';
            fs.open(ownerInfoUrl, 'r', function(err, fd){
                let owner = fs.readFileSync(ownerInfoUrl);
                ownerInfo.push(JSON.parse(owner.toString()));
                fs.close(fd)
            });
            fs.open(renterInfoUrl, 'r', function(err, fd){
                let renter = fs.readFileSync(renterInfoUrl);
                if(renter.length == 0){
                    renterInfo.push(renter)
                }else{
                    renterInfo.push(JSON.parse(renter.toString())) 
                }
                fs.close(fd)
            });
            fs.open(buildInfoUrl, 'r', function(err, fd){
                let build = fs.readFileSync(buildInfoUrl);
                buildInfo.push(JSON.parse(build.toString()));
                fs.close(fd)
            });
        })

    })
    setTimeout(function(){
        let obj = {
            rows: row,
            owner: ownerInfo,
            renter: renterInfo,
            build: buildInfo
        }
        res.send(obj)
    },2000)
});

router.post('/writeOwnerInfo',function(req, res){
    let writerUrl = req.body.writeUrl;
    let writeRoomUrl = req.body.writeRoomUrl;
    let newOwnerInfo = req.body.newOwner;
    let newRoomInfo = req.body.newRoom;
    let writerStream = fs.createWriteStream(writerUrl);
    writerStream.write(newOwnerInfo,'UTF8');
    writerStream.on('finish', function() {
        console.log("房主写入完成。");
    });
    
    writerStream.on('error', function(err){
       console.log(err.stack);
    });

    let writerStreamRoom = fs.createWriteStream(writeRoomUrl);
    writerStreamRoom.write(newRoomInfo,'UTF8');
    writerStreamRoom.on('finish', function() {
        console.log("房间写入完成。");
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