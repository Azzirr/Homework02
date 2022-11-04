var argument = process.argv
const fs = require('fs');

if(argument.length === 3){
    fs.readdirSync(argument[2]).forEach(file => {
        console.log(file)
    })
} else if(argument.length < 3){
    console.log('Need more parameters!')
} else if(argument.length > 3){
    console.log('Too much parameters!')
}