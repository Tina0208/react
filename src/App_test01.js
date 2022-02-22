import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <h2>Number</h2>
      {123}
      {123 + 1}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>String</h2>
      {'abc'}
      {'abc' + 'de'}
      <h2>null/undefined</h2>
      {null}
      {undefined}
      <h2>Array</h2>
      {[1,2,3,"abc",true,null,undefined]}
      <h2>Object</h2>
      {/* {{a:1,b:2}} */}
      {new Date().toString()}
    </>
  )
}

export default App
