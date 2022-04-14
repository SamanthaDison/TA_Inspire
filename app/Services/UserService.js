import { ProxyState } from "../AppState.js"


class UserService {
    createUser(newUser) {
        ProxyState.user = newUser
        console.log(ProxyState.user)
    }

}

export const userService = new UserService()