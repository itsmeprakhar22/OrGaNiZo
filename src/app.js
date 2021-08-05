import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
// const Layout = (props) => {
//     return (
//         <div>
//         <p>header</p>
//         {props.content}
//         <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page title</h1>
//         <p>This is my page</p>
//     </div>
// )
// ReactDOM.render(<Layout content={template} />, document.getElementById('app'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// class OldSyntax {
//     constructor(props){
//         this.name = 'Mie';
//     }
// }
// const oldSyn = new OldSyntax();
// console.log(oldSyn)

// //--------------------------
// class NewSyntax {
//     name = 'Jen'
//     getGreeting = ()=>{
//         return  `Hello ${this.name}.`;
//     }
// }
// const newSyn = new NewSyntax();
// console.log(newSyn)

// const Layout = ()=>{
//     return (
//         <div>
//             <p>Header</p>
//             <p>Footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )