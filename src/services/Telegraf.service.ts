import {Context} from 'telegraf'
class TelegrafService {
    onBotStart(ctx:Context) {
        ctx.reply('Привіт, друже, зі мною ти полюбиш теорію ймовірностей 😈')
    }

}

export default new TelegrafService()





