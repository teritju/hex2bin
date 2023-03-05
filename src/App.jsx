import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [hexInput, setHexInput] = useState('')
  const [binaryTableHead, setBinaryTableHead] = useState([])

  function handleChange(e) {
    setHexInput(e.target.value)
  }

  function hex2Binary(hexadecimal) {
    return (parseInt(hexadecimal, 16).toString(2))
  }

  function hex2Decimal(hexadecimal) {
      return parseInt(hexadecimal, 16)
  }

  useEffect(() => {
    let decimalHeader = [1]

    for (let i = 1; i < hex2Binary(hexInput).split('').length; i++) {
      decimalHeader.push(decimalHeader[decimalHeader.length - 1] * 2)
    }

    decimalHeader.reverse()
    setBinaryTableHead(decimalHeader)
  }, [hexInput])

  return (
    <div className="container">
      <section>
        <label htmlFor="userInput">Hexadecimální vstup: </label>
        <input name='userInput' onChange={handleChange} type="text" />
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <td>Hexadecimal</td>
              <td>Binary</td>
              <td>Decimal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hexInput}</td>
              <td>{hex2Binary(hexInput)}</td>
              <td>{hex2Decimal(hexInput)}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              {binaryTableHead.map((index) => <td>{index.toString()}</td>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {hex2Binary(hexInput).split('').map((value) => <td>{value}</td>)}
            </tr>
          </tbody>
        </table>
      </section>
      <footer>
        <p>Made by Teri Tjunikov</p>
      </footer>
    </div>
  )
}

export default App
