import { ProxyState } from "../AppState.js";
import { userService } from "../Services/UserService.js";



function _drawUser() {
    let user = ProxyState.user
    if (user != null) {
        document.getElementById('userName').innerHTML = `<p class="greeting">${user.name}</p>`
    }
}

export class UserController {
    constructor() {
        ProxyState.on('user', _drawUser)
    }

    createUser() {
        window.event.preventDefault()
        let form = event.target
        let newUser = {
            name: form.name.value
        }
        userService.createUser(newUser)
        form.reset()
    }
}