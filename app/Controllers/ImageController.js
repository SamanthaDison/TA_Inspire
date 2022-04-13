import { imageService } from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawImage() {
    console.log('drawing img');
    document.body.style.backgroundImage = ProxyState.image.backgroundImg
}

function _drawTime() {
    let d = new Date()
    // console.log(d.getHours() + ':' + d.getMinutes())
    document.getElementById('clock').innerText = d.getHours() + ':' + d.getMinutes()
}

function _startInterval() {
    setInterval(_drawTime, 1000)
}
export class ImageController {
    constructor() {
        ProxyState.on('image', _drawImage)
        imageService.getImage()
        _startInterval()
    }
}