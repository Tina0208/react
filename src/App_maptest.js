import { data } from './data/student'

function App() {
  console.log(data)
  return (
    <>
      <ul>
        {data.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
