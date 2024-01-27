const mineflayer = require('mineflayer')

const bot2 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_mine2'
})

let password = "master456654"

bot2.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot2.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot2.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot2.heldItem || !bot2.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot2.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot2.equip(pickaxe, 'hand') 
        if (!pickaxe) bot2.quit();
    }
    var block = bot2.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot2.dig(block, 'ignore', 'raycast')
    dig()
}

bot2.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpabotn2')  
        bot2.chat('/tpa Bo6urbeK')
    }
})

bot2.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'dig2') {
            dig();
        }
    }
})