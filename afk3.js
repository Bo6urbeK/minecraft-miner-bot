const mineflayer = require('mineflayer')

const bot3 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_mine3'
})

let password = "master456654"

bot3.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot3.chat(`/register ${password} ${password}`)  
    }
    
    if (message.includes("/login")) {
        bot3.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot3.heldItem || !bot3.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot3.inventory.items().filter(i => i.name.includes('pickaxe')) [0];
        if (pickaxe) await bot3.equip(pickaxe, 'hand') 
        if (!pickaxe) bot3.quit();
    }
    var block = bot3.blockAtCursor(7);
    if (!block) return setTimeout(function () {
        dig();
    }, 100);
    await bot3.dig(block, 'ignore', 'raycast')
    dig()
}

bot3.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'tpabotn3')  
        bot3.chat('/tpa Bo6urbeK')
    }
})

bot3.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'All_go') {
            dig();
        }
    }
})

bot3.on('chat', (username, message) => {
    if (username == 'Bo6urbeK')  { 
        if (message == 'dig3') {
            dig();
        }
    }
})