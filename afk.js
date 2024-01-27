const mineflayer = require('mineflayer')

const bot1 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_miner'
})

let password = "master456654"

bot1.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot1.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot1.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot1.heldItem || !bot1.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot1.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot1.equip(pickaxe, 'hand') 
        if (!pickaxe) bot1.quit();
    }
    var block = bot1.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot1.dig(block, 'ignore', 'raycast')
    dig()
}

bot1.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpabotn1')  
        bot1.chat('/tpa Bo6urbeK')
    }
})

bot1.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'dig1') {
            dig();
        }
    }
})