var easymidi = require('easymidi');

var inputs = easymidi.getInputs();


const roland = inputs.find(input => input.includes('Roland'))
if (roland) {
    const input = new easymidi.Input(roland)
    const output = new easymidi.Output('Nodejs', true)
    input.on('noteon', (e) => {
        console.log(e)
        // output.send('noteon', {
        //     note: e.note,
        //     velocity: e.velocity
        // })
    })

    input.on('noteoff', (e) => {

        // output.send('noteoff', {
        //     note: e.note,
        //     velocity: e.velocity
        // })
    })

}


