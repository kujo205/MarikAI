import 'dotenv/config'
import {Telegraf} from "telegraf";
import telegramService from "./services/Telegraf.service";
import { message } from 'telegraf/filters'

const bot = new Telegraf(process.env.BOT_TOKEN as string)

bot.start((ctx) => telegramService.onBotStart(ctx))


bot.command('stas',async (ctx)=>{
    ctx.reply(`stasik sone4ko 🐖`)
})

bot.command('emoji',async (ctx)=>telegramService.onEmojiCommand(ctx))

bot.on(message('text'),async (ctx)=>{
    ctx.reply('HUETA ')
})


if(process.env.ENVIRONENT==='production'){
    bot.launch({webhook: { domain: process.env.WEBHOOK_DOMAIN as string, port: 4000 }})
}else {
    bot.launch()
}



process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

