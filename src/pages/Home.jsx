import React, { useState } from 'react'

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) => {
    setInputs(
      {
        ...inputs,
        [e.target.name]: e.target.value,
        
      }
    )
  }

  return (
    <div className='min-h-screen bg-[#004b43]'>
      <h1 className='text-center'>Crud App</h1>
        <div className='bg-[#e5e4e4] max-w-fit m-auto p-10'>
          <form action="">
            <div className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' value={inputs.name} onChange={handleChange}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' value={inputs.email} onChange={handleChange} />
            </div>
            <button className='w-full b-[#014d64] text-white mt-3'>Add</button>
          </form>
        </div>
    </div>
  )
}

export default Home
