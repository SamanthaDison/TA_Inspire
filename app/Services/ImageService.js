import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Image } from "../Models/Image.js";
class ImageService {
    async getImage() {
        const res = await api.get('images')
        console.log('image', res.data);
        ProxyState.image = new Image(res.data)
        console.log(ProxyState.image);
    }

}

export const imageService = new ImageService()