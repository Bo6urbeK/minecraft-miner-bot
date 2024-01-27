const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_mine6'
})

bot.once(`chat`,function () {
    bot.chat(`Привет`)
})

let password = "master456654"

bot.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot.equip(pickaxe, 'hand') 
        if (!pickaxe) bot.quit();
    }
    var block = bot.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot.dig(block, 'ignore', 'raycast')
    dig()
}

bot.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpabotn6')  
        bot.chat('/tpa Bo6urbeK')
    }
})

bot.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'digbotn6') {
            dig();
        }
    }
})