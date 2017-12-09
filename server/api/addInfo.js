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
    console.log(owner);
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
    //添加房屋信息
    fs.readFile(URL + '/room.json', function(err, data) {
        if (err) return console.error(err);
        infos.room = JSON.parse(data.toString());
        infos.room.partyMember = owner.partyMember;
        infos.room.oldman = owner.oldman;
        infos.room.singleOld = owner.singleOld;
        infos.room.volunteer = owner.volunteer;
        infos.room.residence = owner.residence;
        infos.room.minLivings = owner.minLivings;
        infos.room.roomStatus = owner.roomStatus;
        infos.room.bgColor = owner.bgColor;

        fs.writeFile(URL + '/room.json', JSON.stringify(infos.room), function(error) {
            if (error) return console.error(error);
        });
    });
    //添加房主信息
    fs.readFile(URL + '/owner.json', function(err, data) {
        if (err) return console.error(err);
        infos.owner = JSON.parse(data.toString());
        infos.owner.unshift(owner);
        fs.writeFile(URL + '/owner.json', JSON.stringify(infos.owner), function(error) {
            if (error) return console.error(error);
        });
    });
    //添加房客信息
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
    // console.log(req.file);
    let URL = 'http://localhost:8080/profile/' + req.file.originalname;
    res.send(URL);
})

//批量添加房主
// router.post('/batch', function(req, res) {
//     let owners = req.body;
//     for (let i in owners) {
//         let building = owners[i].building,
//             roomNumber = owners[i].roomNumber,
//             floor = "",
//             number = "";
//         if (roomNumber.length == "3") {
//             floor = "0" + roomNumber.substr(0, 1);
//             number = roomNumber.substr(1, 2);
//         } else if (roomNumber.length == 4) {
//             floor = roomNumber.substr(0, 2);
//             number = roomNumber.substr(2, 2);
//         }

//         let URL = './static/shanshuiyuan/' + building + '/' + floor + '/' + number;
//         fs.readFileSync(URL + '/owner.json', function(err, data) {
//             if (err) return console.error(err);
//             let owner = JSON.parse(data.toString());
//             owner.unshift(owners[i]);
//             console.log(JSON.stringify(data.toString()));
//             console.log('----------');
//             // fs.writeFileSync(URL + '/owner.json', JSON.stringify(owner), function(error) {
//             //     if (error) return console.error(error);
//             //     console.log(JSON.stringify(owner));
//             //     // res.send('添加成功');
//             // });
//         });

//     }
// })

router.post('/getOwner', function(req, res) {
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
    floors.forEach(function(el, index) {
        findex = index;
        let roomsUrl = buildUrl + '/' + el;
        let rooms = fs.readdirSync(roomsUrl);
        rooms.forEach(function(ele, rindex) {
            rindex = rindex;
            let roomUrl = roomsUrl + '/' + ele;
            let room = fs.readdirSync(roomUrl);
            let buildInfoUrl = roomUrl + '/' + 'room.json';
            let ownerInfoUrl = roomUrl + '/' + 'owner.json';
            let renterInfoUrl = roomUrl + '/' + 'renter.json';
            fs.open(ownerInfoUrl, 'r', function(err, fd) {
                let owner = fs.readFileSync(ownerInfoUrl);
                let ownerJson = JSON.parse(owner.toString());
                ownerInfo.push(ownerJson);
                fs.close(fd);
            });
            fs.open(renterInfoUrl, 'r', function(err, fd) {
                let renter = fs.readFileSync(renterInfoUrl);
                let renterJson = JSON.parse(renter.toString());
                renterInfo.push(renterJson);
                fs.close(fd);
            });
            fs.open(buildInfoUrl, 'r', function(err, fd) {
                let build = fs.readFileSync(buildInfoUrl);
                let buildJson = JSON.parse(build.toString());
                buildInfo.push(buildJson)
                fs.close(fd);
            });
        })

    })
    setTimeout(function() {
        let obj = {
            rows: row,
            owner: ownerInfo,
            renter: renterInfo,
            build: buildInfo
        }
        res.send(obj)
    }, 2000)
});

router.post('/writeOwnerInfo', function(req, res) {
    let writerUrl = req.body.writeUrl;
    let writeRoomUrl = req.body.writeRoomUrl;
    let newOwnerInfo = req.body.newOwner;
    let newRoomInfo = req.body.newRoom;
    let writerStream = fs.createWriteStream(writerUrl);
    writerStream.write(newOwnerInfo, 'UTF8');
    writerStream.on('finish', function() {
        console.log("房主写入完成。");
    });

    writerStream.on('error', function(err) {
        console.log(err.stack);
    });

    let writerStreamRoom = fs.createWriteStream(writeRoomUrl);
    writerStreamRoom.write(newRoomInfo, 'UTF8');
    writerStreamRoom.on('finish', function() {
        console.log("房间写入完成。");
    });
})

router.post('/writeRenterInfo', function(req, res) {
    let writerUrl = req.body.writeUrl;
    let newRenterInfo = req.body.newRenter;
    let writerStream = fs.createWriteStream(writerUrl);
    writerStream.write(newOwnerInfo, 'UTF8');
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });

    writerStream.on('error', function(err) {
        console.log(err.stack);
    });
})

router.post('/getOneInfo',function(req, res){
    let readOwnerUrl = req.body.oneUrl + 'owner.json';
    let readRenterUrl = req.body.oneUrl + 'renter.json';
    let ownerData = '';
    let renterData = '';

    // 读取房主信息
    let readOwnerStream = fs.createReadStream(readOwnerUrl);
    readOwnerStream.setEncoding('UTF8');
    readOwnerStream.on('data', function(chunk) {
        ownerData += chunk;
    });

    // 读取访客信息
    let readRenterStream = fs.createReadStream(readRenterUrl);
    readRenterStream.setEncoding('UTF8');
    readRenterStream.on('data', function(chunk) {
        renterData += chunk;
    });

    readRenterStream.on('end',function(){
        let ownerDataJson = JSON.parse(ownerData);
        let renterDataJson = JSON.parse(renterData);
        let obj = {
          ownerInfo: ownerDataJson,
          renterInfo: renterDataJson
        }
       res.send(obj)
    });

})


module.exports = router;