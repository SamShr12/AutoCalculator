import React, { useEffect, useState } from 'react'
import Amount from './Amount'
import InvoiceBody from './InvoiceBody'
import InvoiceItems from './InvoiceItems'
import Invoicename from './Invoicename'
import Select from 'react-select'
import axios from '../../api/axios'
const Invoice = () => {
  const [something, setSomething] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [cartitems,setCartitems] = useState([])
  const [quantity, setQuantity] = useState("1")
  const [subtotal, setSubtotal] = useState()
  const [Price, setPrice] = useState([])
  useEffect(() => {
    const fetchPostsfordropdown = async () => {
      try {
          const response = await axios.get('/api/products/')
        //   console.log(response.data)
          setSomething([...response.data])
      } catch (err) {
          swal(`Error: ${err.message}`)
      }  
    }
    fetchPostsfordropdown();
  }, []);

  const mapdata = something.map((es)=>(
    {label : es.name}
))

  const handleSearch = async(e) =>{
    e.preventDefault();
    const searchthing = {
        name : searchItems        
    }
    try {
        const reponse = await axios.post(`/api/cart/${searchItems}`, searchthing)
        // navigate('/')
        window.location.reload(false)
        swal({
            title:`Do you want to add ${searchItems}`,
            icon:"success",
            button:"Close"
        })
    } catch (err) {
        swal(`Error:${err.message}`)
    }

  }

  useEffect(() => {
    const fetchCartposts = async () => {
      try {
          const response = await axios.get('/api/cart/')
          console.log(response.data)
          setCartitems(response.data)
      } catch (err) {
          swal(`Error: ${err.message}`)
      }  
    }
    fetchCartposts();
  }, [])

    const quantityNumber = parseInt(quantity)
    const rateNumber = parseInt(Price.map(ss=>ss.price_per_piece))
    const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0
    console.log(amount)



  useEffect(()=>{
    let subtotal = 0
    cartitems.forEach((el)=> {
      const quantityNumber = parseInt(quantity)
      const rateNumber = parseInt(el.price_per_piece)
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

      subtotal += amount
    })

    setSubtotal(subtotal)
  },[cartitems])

  console.log(subtotal)

  return (
    <section className='w-50 border mt-5 mb-10'>

      <div className='grid-2 my-20  py-10 px-5'>
        <div>
          <Invoicename />
        </div>
        <div>
          <h1 className='text-5xl font-semibold text-[#273339]'>INVOICE</h1>
        </div>
      </div>

      <div>
        <InvoiceBody />  
      </div>

      <div>
      <section>
    {cartitems.map((el)=>(
      <div className='grid-5 text-center' style={{borderBottom:"1px solid #ccc"}} key={el.id}>
        <div className=' font-semibold text-[#273339] py-2'>
            <p>{el.name}</p>
        </div>
        <div className=' font-semibold text-[#273339] py-2'>
            <input type="number" name="" id="" style={{width:"80px"}} placeholder="0"
            onChange={(e)=>setQuantity(e.target.value)}
            />
        </div>
        <div className=' font-semibold text-[#273339] py-2'>
            <p>box</p>
        </div>
        <div className=' font-semibold text-[#273339] py-2'>
            {el.price_per_piece}
        </div>
        <div className=' font-semibold text-[#273339] py-2'>
            <p>{amount}</p>
        </div>
    </div>

    ))}
    
    </section>      
    
    </div>

      <div className='grid-2'>
        <div className='my-8'>
          <form onSubmit={handleSearch}>
          <Select
          options={mapdata}
          placeholder="Search items"
          onChange={(e)=>setSearchItems(e.label)}
          className='search'
          />
          </form>
        </div>
        <div className='my-8'>
          <Amount subtotal={subtotal}/>
        </div>
      </div>

      <div className='mt-20 mb-28'>
        <h2 className='font-semibold'>Note</h2>
        <div className='text-sm font-semibold'>
          Have a good day
        </div>
      </div>
    </section>
  )
}

export default Invoice