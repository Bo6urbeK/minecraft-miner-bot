const mineflayer = require('mineflayer')

function createBot() {

  const bot7 = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    version: 1.18,
    username: 'Bo6urbeK_min12'

  })

  let password = "master456654"

  bot7.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
      bot7.chat(`/register ${password} ${password}`)
    }

    if (message.includes("/login")) {
      bot7.chat(`/login ${password}`)
    }
  })


  bot7.on('chat', (username, message) => {
    if (username == 'Bo6urbeK') {
      if (message == 'tpa')
        bot7.chat('/tpa Bo6urbeK')
    }
  })

  //jump
  bot7.on('spawn', function() {
    setInterval(function() {
      bot7.setControlState('jump', true);
      setTimeout(function() {
        bot.setControlState('jump', false);
      }, 500);
    }, 10000);
  });



  // Log errors and kick reasons:
  bot7.on('kicked', console.log)
  bot7.on('error', console.log)



}
createBot()