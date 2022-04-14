import { ProxyState } from "../AppState.js";
import { userService } from "../Services/UserService.js";
import { saveState } from "../Utils/LocalStorage.js";



function _drawUser() {
    let user = ProxyState.user
    if (user != null) {
        document.getElementById('userName').innerHTML = `<p class="greeting">${user.name}</p>`
    }
}

export class UserController {
    constructor() {
        ProxyState.on('user', _drawUser)
        ProxyState.on('user', saveState)
        _drawUser()
    }

    createUser() {
        window.event.preventDefault()
        let form = window.event.target
        const newUser = {
            name: form.name.value
        }
        console.log('new user', newUser)
        userService.createUser(newUser)
        form.reset()
    }
}