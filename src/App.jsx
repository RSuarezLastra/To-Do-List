import { useState } from 'react';
import Tags from './tags';

function App() {
  const [input, setInput] = useState('')

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handleClick = () => {
    if(input.length ){
      setList([...list, input])
      setInput('')
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-teal-500 to-green-500'>
      <h1 className='text-center text-5xl pt-10'>To-Do-List</h1>
      <div className='h-[250px] flex justify-center items-center'>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder='Add a Task....'
          className='p-5 w-1/2 rounded-xl' />

        <button
          onClick={handleClick}
          className='ml-5 border p-2 rounded-lg text-lg bg-white hover:scale-[1.05] active:scale-[0.95] transition-all ease-in duration-100'>Add</button>
      </div>
      <div className=' '>
        <Tags info={list} />
      </div>
    </div>
  )
}

export default App
