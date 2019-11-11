const {
    find,
    insert
} = require('./db')

;
(async () => {
    await insert('1909', [{
        name: 'rrrrrrrrr'
    }])
    let data = await find('1909')
    console.log(data)
})()