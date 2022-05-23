function like(){
    button = document.getElementById("b1")
    num = Number(button.innerHTML) + 1
    if (num <= 2561){
        button.innerHTML = num
        p1 = document.getElementById("p1")
        if (num % 2560 == 0){
            p1.innerHTML += "<p style='color:purple'>你点了两千五百六十次！再往下，没有了……你是不是看了我的代码或者作弊了？</p>"
        }
        else if(num % 1280 == 0){
            p1.innerHTML += "<p style='color:blue'>来试试在浏览器控制台输入：document.getElementById('b1').innerHTML = 2559</p>"
        }
        else if(num % 640 == 0){
            p1.innerHTML += "<p style='color:cyan'>天哪，你竟然点了六百四十次！</p>"
        }
        else if(num % 320 == 0){
            p1.innerHTML += "<p style='color:green'>你开了连点器吧，点了三百二十次了！</p>"
        }
        else if(num % 160 == 0){
            p1.innerHTML += "<p style='color:yellow'>你一定是闲着没事才会点一百六十次！</p>"
        }
        else if (num % 80 == 0){
            p1.innerHTML += "<p style='color:orange'>天哪，你点了八十个</p>"
        }
        else if (num % 40 == 0){
            p1.innerHTML += "<p style='color:red'>真棒，又点了四十个</p>"
        }
        else if (num % 10 == 0){
            p1.innerHTML += "<p>真棒，又点了十个</p>"
        }
    }
    else{
        button.innerHTML = "你点到头了！快看看你的战果吧！嗯，如果你没有看到1280次时的提示而是用手点的……"
    }
}