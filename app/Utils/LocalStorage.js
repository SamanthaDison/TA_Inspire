import { ProxyState } from "../AppState.js";

export function saveState() {
    localStorage.setItem('inspire', JSON.stringify({
        user: ProxyState.user
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('inspire'))
    if (data != null) {
        ProxyState.user = data.user
    }
    console.log('load user', ProxyState.user)
}