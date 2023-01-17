import './App.css'
import axios from 'axios'
import Form from './components/Form'

const basePath = process.env.PUBLIC_URL || ''

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  )
}

export default App
