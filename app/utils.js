// F0 7F Universal Real Time Sys Ex header
// id ID of target device (default = 7F = All devices)
// 04 04 DeviceControl/MasterCoarseTuning
// 00 tt CoarseTuning (LSB first, is always zero)
// F7 EOX
// http://www.korgforums.com/forum/phpBB2/viewtopic.php?p=693668

// http://www.korgforums.com/forum/phpBB2/viewtopic.php?p=709972&sid=986b3b6c3f7c616d03d3a278998964e7

exports.KORG_TRANSPOSE_MESSAGES = [
    ['F0', '7F', '7F', '04', '04', '00', '3D', 'F7'], // --> -3 [0]
    ['F0', '7F', '7F', '04', '04', '00', '3E', 'F7'], // --> -2 [1]
    ['F0', '7F', '7F', '04', '04', '00', '3F', 'F7'], // --> -1 [2]

    [0xf0, 0x7f, 0x7f, 0x04, 0x04, 0x00, 0x43, 0xf7], // -->    [3] **transpose back to 0 = same as pushing - and +
    ['F0', '7F', '7F', '04', '04', '00', '40', 'F7'], // -->    [3] **transpose back to 0 = same as pushing - and +
    ['F0', '7F', '7F', '04', '04', '00', '41', 'F7'], // --> +1 [4]
    ['F0', '7F', '7F', '04', '04', '00', '42', 'F7'], // --> +2 [5]
    ['F0', '7F', '7F', '04', '04', '00', '43', 'F7'], // --> +3 [6]
]

function playnote(output) {
    output.send('noteon', {
        channel: 2,
        velocity: 127,
        note: 56
    })

    setTimeout(() => {
        output.send('noteoff', {
            channel: 2,
            velocity: 127,
            note: 56
        })
    }, 200)
}