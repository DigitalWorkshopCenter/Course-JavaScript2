// ReactDOM.render(
//   <div>
//     <h1>Hello, world!</h1>
//   </div>,
//   document.getElementById('root')
// );

class HelloWorld extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}
var app = document.getElementById('mainapp');
ReactDOM.render(<HelloWorld />, app);
