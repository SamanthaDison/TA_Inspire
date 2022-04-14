import { ProxyState } from "../AppState"


class UserService {
    createUser(newUser) {
        ProxyState.user = newUser()
        // ProxyState.user 
    }

}

export const userService = new UserService()