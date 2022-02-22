import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function App() {
  const [data, setData] = useState(objArray)
  let newObj = {}

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        {data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          )
        })}
      </table>
      <hr />
      <button
        onClick={() => {
          newObj = { id: 99, text: 'xxx' }

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((el) => {
            console.log(el)
            return el.text.includes('a')
          })

          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((el) => {
            return !el.text.includes('b')
          })

          setData(newData)
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          console.log(newObj)
          // if(newObj.id.some(99){
          //   const newData = newObj.filter((el) => {
          //   return !el.id.includes(99)
          // })
          // }

          // setData(newData)
        }}
      >
        刪除id為99的物件
      </button>

      <br />
      <button
        onClick={() => {
          const newObj2 = { id: 5, text: 'bbb' }

          //1 //2
          const newData = [...data];
          console.log(newData)
          // newData.findIndex(id[2])

          //3
          setData(newData)
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button onClick={() => {}}>取代id為3的文字為cccc</button>
      <br />
      <button onClick={() => {}}>
        陣列最前面新增一個物件值id不重覆與文字為xxx的物件
      </button>
      <br />
      <button onClick={() => {}}>
        陣列最後面新增一個物件值id不重覆與文字為yyy的物件
      </button>
    </>
  )
}

export default App
