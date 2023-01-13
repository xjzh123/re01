let delta = location.search ?
    (
        isNaN(Number(location.search.slice(1))) ?
            1 : Number(location.search.slice(1))
    ) : 1

function like() {
    let button = document.getElementById('clicker-button')
    let num = Number(button.innerHTML) + delta

    if (num <= 2561) {
        button.innerHTML = num
        let clicker = document.getElementById('clicker')
        let span = document.createElement('span')
        let flag = true

        if (num % 2560 == 0) {
            span.style.color = 'purple'
            span.innerHTML =
                '你点了两千五百六十次！再往下，没有了……你是不是看了我的代码或者作弊了？'
        } else if (num % 1280 == 0) {
            span.style.color = 'blue'
            span.innerHTML =
                '来试试在浏览器控制台输入：document.getElementById(\'b1\').innerHTML = 2559'
        } else if (num % 640 == 0) {
            span.style.color = 'cyan'
            span.innerHTML = '天哪，你竟然点了六百四十次！'
        } else if (num % 320 == 0) {
            span.style.color = 'green'
            span.innerHTML = '你开了连点器吧，点了三百二十次了！'
        } else if (num % 160 == 0) {
            span.style.color = 'yellow'
            span.innerHTML = '你一定是闲着没事才会点一百六十次！'
        } else if (num % 80 == 0) {
            span.style.color = 'orange'
            span.innerHTML = '天哪，你点了八十个'
        } else if (num % 40 == 0) {
            span.style.color = 'red'
            span.innerHTML = '真棒，又点了四十个'
        } else if (num % 10 == 0) {
            span.innerHTML = '真棒，又点了十个'
        } else {
            flag = false
        }

        if (flag) {
            span.innerHTML = '\n' + span.innerHTML
            clicker.appendChild(span)
        }
    } else {
        button.innerHTML =
            '你点到头了！快看看你的战果吧！嗯，如果你没有看到1280次时的提示而是用手点的……'
    }
}
