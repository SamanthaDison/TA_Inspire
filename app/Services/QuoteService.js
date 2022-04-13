import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
class QuoteService {
    async getQuote() {
        const res = await api.get('quotes')
        console.log('quote', res.data)
        ProxyState.quote = new Quote(res.data)
        console.log(ProxyState.quote);
    }

}

export const quoteService = new QuoteService()