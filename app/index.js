const easymidi = require('easymidi');
const { KORG_TRANSPOSE_MESSAGES, playnote } = require('./utils')

const virtualOut = new easymidi.Output('VIRTUAL', true)

let counter = 0
setInterval(() => {
    const value = 10 * counter++
    virtualOut.send('cc', {
        value,
        controller: 105
    })
    console.log(value)
    if (value > 120) counter = 0
}, 5000);
