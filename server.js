const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

app.use(cors())

const characters = {
    'eren yeager': {
        'birthday': 'March 30',
        'firstName': 'Eren',
        'lastName': 'Yeager'
    },
    'mikasa ackerman': {
        'birthday': 'February 10',
        'firstName': 'Mikasa',
        'lastName': 'Ackerman'
    },
    'levi ackerman': {
        'birthday': 'December 25',
        'firstName': 'Levi',
        'lastName': 'Ackerman'
    },
    'armin arlert': {
        'birthday': 'November 3',
        'firstName': 'Armin',
        'lastName': 'Arlert'
    },
    'zeke yeager': {
        'birthday': 'August 1',
        'firstName': 'Zeke',
        'lastName': 'Yeager'
    },
    'unknown': {
        'birthday': 'unknown',
        'firstName': 'unknown',
        'lastName': 'unknown'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const characterName = req.params.name.toLowerCase();
    if(characters[characterName]){
        res.json(characters[characterName])
    }else{
        res.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is now live on port ${PORT}.`)
})