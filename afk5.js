const mineflayer = require('mineflayer')

const bot5 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_mine5'
})

let password = "master456654"

bot5.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot5.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot5.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot5.heldItem || !bot5.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot5.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot5.equip(pickaxe, 'hand') 
        if (!pickaxe) bot5.quit();
    }
    var block = bot5.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot5.dig(block, 'ignore', 'raycast')
    dig()
}

bot5.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpabotn5')  
        bot5.chat('/tpa Bo6urbeK')
    }
})

bot5.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'digbotn5') {
            dig();
        }
    }
})