export class Image {
    constructor(data) {
        this.imgUrl = data.largeImgUrl
    }

    get backgroundImg() {
        document.body.style.backgroundImage = `url(${this.imgUrl})`
    }
}