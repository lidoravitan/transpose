const easymidi = require('easymidi');
const { KORG_TRANSPOSE_MESSAGES, playnote } = require('./utils')

console.log('in', easymidi.getInputs())
console.log('out', easymidi.getOutputs())

const KORG_OUTPUT_NAME = easymidi.getOutputs().find(input => input.includes('Pa3XLe'))
const korgOut = new easymidi.Output(KORG_OUTPUT_NAME)

// setInterval(() => {
//     console.log('out', easymidi.getOutputs())
//     korgOut.send('sysex', KORG_TRANSPOSE_MESSAGES[3])
// }, 5000);




