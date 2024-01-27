const mineflayer = require('mineflayer')

const bot4 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_mine4'
})

let password = "master456654"

bot4.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot4.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot4.chat(`/login ${password}`)
    }

    dig()
})

async function dig() {
    if (!bot4.heldItem || !bot4.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot4.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot4.equip(pickaxe, 'hand') 
        if (!pickaxe) bot4.quit();
    }
    var block = bot4.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot4.dig(block, 'ignore', 'raycast')
    dig()
}

bot4.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpa4')  
        bot4.chat('/tpa Bo6urbeK')
    }
})

bot4.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'test')  
        bot4.chat('/w Bo6urbeK Afk4 ishlayapdi')
    }
})

bot4.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'All_go') {
            dig();
        }
    }
})

bot4.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'dig4') {
            dig();
        }
    }
})