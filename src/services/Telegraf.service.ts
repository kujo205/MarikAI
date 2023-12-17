import {Context} from 'telegraf'
import {getRandomEmoji} from '../utils/getRandomEmoji'
class TelegrafService {
    onBotStart(ctx:Context) {
        ctx.reply('Привіт, друже, зі мною ти полюбиш теорію ймовірностей 😈')
    }

    onEmojiCommand(ctx:Context) {
        const username=ctx.from?.username
        ctx.reply(`${username} - ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()}`)
    }

}

export default new TelegrafService()





