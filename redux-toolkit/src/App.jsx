
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  
  return (
    <>
      <h1 className='text-white text-4xl'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App