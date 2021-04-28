import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//updating the var in obj w/o state 
class Compo extends React.Component {

  obj = {
    name: 'Veena',
    age: 10
  }

  increaseAge = () => {

    this.obj.age = this.obj.age + 1  ;
    console.log(this.obj.age++)
    document.getElementById('showcount').innerHTML = this.obj.age;
   //basically its taking time to update age 
   //reason is that - we are not refreshing the window after incrementing the count value

  }

  render() {
    return (
      <div>
        <button onClick={this.increaseAge}> Hit me to increse your age</button>
        <button className='btn-primary' id='showcount'>{this.obj.age}</button>
      </div>
    )

  }
}

ReactDOM.render(
  <Compo />,
  document.getElementById('root')
)





//solution : updating the var in objs using state object and setstate method
// class Compo extends React.Component{

//   obj = {
//     name : 'Veena',
//     age : 10
//   }
//   state = {
//     count : 1

//   }

//   increaseAge=()=>
//   {
//  this.setState({count : this.state.count + 1 })
//  document.getElementById('showcount').innerHTML = this.state.count;

//   }

//       // this.obj.age = this.obj.age ++;
//     //document.getElementById('showcount1').innerHTML = this.obj.age;

//   render() {
//     return (
//       <div>
//         <button onClick={this.increaseAge}> Hit me to increse your age</button>
//         <button className='btn-primary' id='showcount'>{this.state.count}</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Compo />,
//   document.getElementById('root')
// )









// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
