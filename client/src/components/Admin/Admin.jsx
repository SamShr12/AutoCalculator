import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { itemdetailquery } from '../../utils/data'
import Nav from '../Header/Nav'

const Admin = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try{
          const response = await axios.get('/api/products/');
          setItems(response.data);
          console.log(response.data)
      } catch (err){
          if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
          } else{
              console.log(`Error:${err.message}`)
          }
          
      }
  }
  fetchPosts();  
}, 
  [])

  const handleDelete = async (id) => {
    const query = itemdetailquery(id);

    if (query){
        try {
            await axios.delete(`/api/products/${id}`);
            window.location.reload(false)
        } catch (err) {
            swal(`Error: ${err.message}`)
        }
    }
}
 
  
  return (
    <section>
        <div>
            <Nav />
        </div>
        <div className='w-75s'>

            <div className='grid-5 px-10 my-5'>
                <div className='text-[#273339] font-semibold'>Name</div>
                <div className='text-[#273339] font-semibold'>Piece</div>
                <div className='text-[#273339] font-semibold'>Box</div>
                <div className='text-[#273339] font-semibold'>Dozen</div>
                <div className='text-[#273339] font-semibold'>Options</div>
            </div>
            {items.map((el)=>(
              <div key={el.id}>
                  <div className='grid-5 w-full px-10 py-4 border'>
                    <div className='text-[#273339] font-semibold'>{el.name}</div>
                    <div className='text-[#273339] font-semibold'>{el.price_per_piece}</div>
                    <div className='text-[#273339] font-semibold'>{el.price_per_box}</div>
                    <div className='text-[#273339] font-semibold'>{el.price_per_dozen}</div>
                    <div className='text-[#273339] font-semibold'>
                      <button className='bg-[#ED3434] px-2 py-2 text-white font-semibold capitalize' onClick={()=>handleDelete(el.id)}>Remove</button>
                    </div>
                </div>
              </div>
            ))}

        </div>
    </section>
  )
}

export default Admin