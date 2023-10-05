import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center'>Crud App</h1>
        <div>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <button>Add</button>
          </form>
        </div>
    </div>
  )
}

export default Home
