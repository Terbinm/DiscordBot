    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} 部屬完畢！`) ;
    }) ;

    client.on('message',msg=>{
        if(msg.content.startsWith(settings.prefix+'test.Tb')){//存放指令
            msg.channel.send('test committed') ;//傳送***文字
            msg.reply("123")//回復發訊息者***
        }

        if(msg.content.includes("Tbot.test")){//含有Tbot.test文字---自檢區
            msg.channel.send('系統已上線') ;
            msg.reply("A" + {Files:["./picture/1001.png"]}) ;
            /*
            自檢區
            */
            msg.reply("自檢完畢");
        }
        //-----------------------------------------猜拳
        if(msg.content.includes( "剪刀" )){
            if(msg.author.bot){
                return;
            }
            var pp = papr(1)
        }
        if(msg.content.includes( "石頭" )){
            if(msg.author.bot){
                return;
            }
            var pp = papr(2)
        }
        if(msg.content.includes( "布" )){
            if(msg.author.bot){
                return;
            }
            var pp = papr(3)
        }
        function papr(int){
            var rnd = Random(3,1) ; 
            switch(rnd){
                case 1:msg.reply("剪刀") ; break;
                case 2:msg.reply("石頭") ; break;
                case 3:msg.reply("布") ; break;
            }

            var rnd2 = Random(3,1) ; 
            if(rnd == int ){//平手 
                switch(rnd2){
                    case 1:msg.reply("呼，平手") ; break;
                    case 2:msg.reply("看來...是平手阿") ; break;
                    case 3:msg.reply("居然是平手") ; break;
                }
            }else{
                var outputreport = 3;
                var complete = int*10 + rnd ;
                //msg.reply(complete);
                switch(complete){
                    case 12 :outputreport = 1; break;
                    case 13 :outputreport = 0; break;
                    case 21 :outputreport = 0; break;
                    case 23 :outputreport = 1; break;
                    case 31 :outputreport = 1; break;
                    case 32 :outputreport = 0; break;
                }
                
                //msg.reply(outputreport);
                switch(outputreport){
                    case 0:{
                        switch(rnd2){
                            case 1:msg.reply("我...輸了") ; break;
                            case 2:msg.reply("輸了...再來一次!") ; break;
                            case 3:msg.reply("身為電腦，我居然輸掉了!?") ; break;
                        }
                        break;
                    }

                    case 1:{
                        switch(rnd2){
                            case 1:msg.reply("哈哈，我贏啦") ; break;
                            case 2:msg.reply("嬉嬉，我贏嘞~再來一次?") ; break;
                            case 3:msg.reply("I win!!!") ; break;
                        }
                        break;
                    }
                }
            }
        }
        
        //-----------------------------------------猜拳
        /*失敗

        if(msg.content.includes("op")){
            msg.channel.send("123" + {Files:["bot.js"]}) ;
        }

        if(msg.content.startsWith(settings.prefix+'p')){
            var num = Random(4,1) ;
            //msg.channel.send({Files:["./picture/" + "200" + num + ".gif"]}) ;
            msg.reply( num+ "A" + {Files:["./picture/1001.png"]}) ;
            //msg.reply( num+ "A") ;
        }
        */
        //---------------------------------------------------------------------------fuction
        function Random(max,min){
            var Rnd = Math.floor(Math.random()*max)+min;
            return Rnd ;
        }
    }) ;

    client.login(settings.token) ;
