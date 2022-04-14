
function _drawTime() {
    // console.log(d.getHours() + ':' + d.getMinutes())
    let d = new Date()
    let minutes = d.getMinutes();
    if (minutes < 10) {
        document.getElementById('clock').innerText = d.getHours() + ':' + '0' + d.getMinutes()
        return
    }
    document.getElementById('clock').innerText = d.getHours() + ':' + d.getMinutes()
}

function _startInterval() {
    setInterval(_drawTime, 1000)
}
export class ClockController {
    constructor() {
        _startInterval()
    }
}