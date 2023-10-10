import React, { useState } from 'react'

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("")

  const handleChange = (e) => {
    setInputs(
      {
        ...inputs,
        [e.target.name]: e.target.value, 
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if(editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData])
      setEditClick(false)
      setInputs(
      {
        name: "",
        email: "",
      }
    )
    } else {
      setTableData([...tableData, inputs]);
    setInputs(
      {
        name: "",
        email: "",
      }
    )
    }
  };

  const handleEdit = (index) => {
    const tempData = tableData[index];
    console.log('tempData', tempData);
    setInputs(
      {
        name: tempData.name,
        email: tempData.email,
      }
    )
    setEditClick(true)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const filterData = tableData.filter((item,i) => i !== index);
    setTableData(filterData);
  }

  return (
    <div className='min-h-screen bg-[#004b43]'>
      <h1 className='text-center'>Crud App</h1>
        <div className='bg-[#e5e4e4] max-w-fit m-auto p-10'>
          <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' value={inputs.name} onChange={handleChange}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' value={inputs.email} onChange={handleChange} />
            </div>
            <button type='submit' className='w-full bg-[#014d64] text-white mt-3'>{editClick ? 'Update' : 'Add'}</button>
          </form>
        </div>
        <div>
          <table className='w-full text-center'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {
                tableData.map((item, i) => (
                  <tr key={item.email}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => handleEdit(i)} className='mr-3 text-yellow-300'>Edit</button>
                      <button onClick={() => handleDelete(i)} className='mr-3 text-red-500'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home
