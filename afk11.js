const mineflayer = require('mineflayer')

function createBot() {

  const bot6 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_min11'

  })

  let password = "TrayoN"

  bot6.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
      bot6.chat(`/register ${password} ${password}`)
    }

    if (message.includes("/login")) {
      bot6.chat(`/login ${password}`)
    }
  })


  bot6.on('chat', (username, message) => {
    if (username == 'Bo6urbeK') {
      if (message == 'tp')
        bot6.chat('/tpa Bo6urbeK')
    }
  })

  //jump
  bot6.on('spawn', function() {
    setInterval(function() {
      bot6.setControlState('jump', true);
      setTimeout(function() {
        bot6.setControlState('jump', false);
      }, 500);
    }, 10000);
  });



  // Log errors and kick reasons:
  bot6.on('kicked', console.log)
  bot6.on('error', console.log)



}
createBot()
