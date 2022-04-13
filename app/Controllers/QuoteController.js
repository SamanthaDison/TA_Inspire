import { quoteService } from "../Services/QuoteService.js";
import { ProxyState } from "../AppState.js";

function _drawQuote() {
    let quote = ProxyState.quote
    document.getElementById('quote').innerText = quote.quote
    document.getElementById('quote-author').innerText = quote.author
}
export class QuoteController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        quoteService.getQuote()
    }
}