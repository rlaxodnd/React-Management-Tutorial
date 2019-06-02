import React, {Component} from 'react';
import Custmoer from './components/Customer'
import './App.css';

const customers = [
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
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c => {

            
            return(
              <Custmoer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}



              />
            );
          })


        }
      </div>

      );
    }
  }
export default App;
