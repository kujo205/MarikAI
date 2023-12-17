import 'dotenv/config'
import {Telegraf} from "telegraf";
import telegramService from "./services/Telegraf.service";
import { message } from 'telegraf/filters'

const bot = new Telegraf(process.env.BOT_TOKEN as string)

bot.start((ctx) => telegramService.onBotStart(ctx))


bot.command('stas',async (ctx)=>{
    console.log(ctx.chat.id)
    ctx.reply('stasik hueta')
})

bot.on(message('text'),async (ctx)=>{
    ctx.reply('HUETA')
    console.log(ctx)
})





bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


