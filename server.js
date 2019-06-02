const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) =>{
    res.send([
            {
            
              'id' : 1 ,
              'image' : 'https://placeimg.com/64/64/1',
              'name' :'김태웅',
              'birthday' : '961122',
              'gender': '남자',
              'job' : '대학생'
            
            },
            {
            
              'id' : 2 ,
              'image' : 'https://placeimg.com/64/64/2',
              'name' :'홍길동',
              'birthday' : '923422',
              'gender': '남자',
              'job' : '대학생'
            
            },
            {
            
              'id' : 3 ,
              'image' : 'https://placeimg.com/64/64/3',
              'name' :'김지수',
              'birthday' : '941122',
              'gender': '여자',
              'job' : '대학생'
            
            }
            ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));