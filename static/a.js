let fs = require("fs");
var date = new Date().toLocaleDateString();

fs.readdir('shanshuiyuan',function(err,files){
    if(err){
        console.log(err)
    }
    for(let a = files[0]; a <= files[files.length - 1]; a++){
        let f = 'shanshuiyuan/' + a;
        fs.readdir(f,function(err,file){
            if(err){
                console.log(err)
            }
            for(let b = file[0]; b <= file[file.length - 1]; b++){
                var i;
                if(b.toString().length < 2){
                   i  = '0' + b
                }else{
                    i = b;
                }
               
                let f1 = 'shanshuiyuan/' + a + '/' + i;
                // console.log(i)
                // // console.log("====================")
                // console.log(f1)
                // console.log("=============")
                fs.readdir(f1, function(err,fi){
                    for(let c = fi[0]; c <= fi[fi.length - 1]; c++){
                        var j;
                        if(c.toString().length < 2){
                            j = '0' + c
                        }else{
                            j = c;
                        }
                        let f2 = f1 + '/' + j;
                        
                        // console.log("=============")
                        fs.readdir(f2,function(err,fis){
                            if(err){
                                console.log(err)
                            }
                           let k = f2.split('/');
                           let m = k[2];
                           let l = '';
                            if(m.split('')[0] == 0){
                                l = m.split('')[1]
                            }else{
                                l = m
                            }

                           let n = k[3];
                        //    console.log(l,n)
                        //    console.log( l + n)
                            var d = {
                                "zone":"025",
                                "district":"06",
                                "subdistrict":"01",
                                "community":"04",
                                "village":"燕升园",
                                "building":"15",
                                "itemID":"",
                                "roomID":"",
                                "cDate":"2017-12-4",
                                "uDate":"2017-12-4",
                                "floor":"02",
                                "roomNumber": l+n,
                                "partyMember":"",
                                "oldman":"",
                                "singleOld":"",
                                "volunteer":"",
                                "residence":"",
                                "minLivings":"",
                                "roomStatus":"",
                                "bgColor":"yellow"
                            }
                            var f3 = f2 + '/' + fis[2]
                            var e = JSON.stringify(d);
                            var writerStream = fs.createWriteStream(f3);
                            writerStream.write(e,'UTF8');
                            writerStream.end();
                            writerStream.on('finish', function() {
                                console.log(f3)
                                console.log("写入完成。");
                            });

                            // fs.open(f3, 'r+',function(err,fd){
                            //     fs.writeFile(f3, e, function(err){
                            //         if(err){
                            //             console.log(err)
                            //         }
                            //         fs.close(fd,function(){
                            //             console.log(f3)
                            //             console.log("关闭成功")
                            //         })
                                    
                            //     })
                            // })

                            
                        })
                    }
                })
            }
        
        })
    }
})

