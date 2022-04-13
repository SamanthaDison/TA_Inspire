import { imageService } from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawImage() {
    console.log('drawing img');
    document.body.style.backgroundImage = ProxyState.image.backgroundImg
}
// TODO fix the way minutes draw.. 12:02 will draw as 12:2

export class ImageController {
    constructor() {
        ProxyState.on('image', _drawImage)
        imageService.getImage()
    }
}