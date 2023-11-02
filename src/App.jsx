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
    if(input.trim().length ){
      setList([...list, input])
      setInput('')
    }
  }
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      handleClick()
    }
  }

  const deleteTag = (indice) => {
    const updatedList = list.filter((_, i) => i !== indice);
    setList(updatedList);
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-teal-500 to-violet-700'>
      <h1 className='text-center text-5xl pt-10'>To-Do-List</h1>
      <div className='h-[200px] flex justify-center items-center'>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder='Add a Task....'
          className='p-5 w-1/2 rounded-xl' />

        <button
          onClick={handleClick}
          className='ml-5 border w-[60px] h-[60px] p-3 rounded-lg text-lg bg-white hover:scale-[1.05] active:scale-[0.95] transition-all ease-in duration-100'>Add</button>
      </div>
      <div className=' '>
        <Tags info={list} deleteTag={deleteTag} />
      </div>
    </div>
  )
}

export default App
