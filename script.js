var now = new Date()
var firstDay = new Date("2019-12-01")

var toNow = now.getTime()
var toFirst = firstDay.getTime()
var passedTime = toNow - toFirst

var day = 1000 * 60 * 60 * 24
var passedDay = Math.round(passedTime / day)
document.getElementById("accent").innerText = passedDay
document.getElementById("startDate").innerText = dateFormat(firstDay)

// printList(22)
// printList(50)
// printList(100)
var dayArray = [22, 50, 100, 200, 300, 365, 400]
for (var i = 0; i < dayArray.length; i++) {    
    printList(dayArray[i])
}

function printList(days) {
    var future =toFirst + days * day
    var someday = dateFormat(new Date(future))
    // document.getElementById(`date${days}`).innerText = someday
    var ul = document.querySelector('ul')
    ul.innerHTML = ul.innerHTML + `
            <li class="${days < passedDay && 'past'}">
                <div class="days">${days} days</div>                
                <div class="detail">${someday}</div>
            </li>
    `    
}

function dateFormat(someday) {
    var year = someday.getFullYear()
    var month = someday.getMonth() + 1
    var date = someday.getDate()
    var dayArray = ['일','월','화','수','목','금','토']
    return `${year}년 ${month}월 ${date}일(${dayArray[someday.getDay()]})`
}

