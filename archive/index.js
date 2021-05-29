var easymidi = require('easymidi');
const inputs = easymidi.getInputs()
console.log(inputs)

const roland = new easymidi.Output(inputs[0])

const output = new easymidi.Output('Nodejs', true)
const channel = 1


function playCC(value) {

    roland.send('noteon', {
        note: 61,
        velocity: 127,
    })

    setTimeout(() => {
        roland.send('noteoff', {
            note: 61,
            velocity: 127
        })
    }, 300)
}


setInterval(() => {
    playCC(10)
}, 3000);

