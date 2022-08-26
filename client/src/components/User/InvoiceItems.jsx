import React from 'react'

const InvoiceItems = () => {
  return (
    <section>

        <div className='grid-5 text-center' style={{borderBottom:"1px solid #ccc"}}>
            <div className=' font-semibold text-[#273339] py-2'>
                <p>Marie</p>
            </div>
            <div className=' font-semibold text-[#273339] py-2'>
                <input type="number" name="" id="" style={{width:"80px"}} placeholder="0" />
            </div>
            <div className=' font-semibold text-[#273339] py-2'>
                <p>box</p>
            </div>
            <div className=' font-semibold text-[#273339] py-2'>
                <p>100</p>
            </div>
            <div className=' font-semibold text-[#273339] py-2'>
                <p>200</p>
            </div>
        </div>
        
    </section>
  )
}

export default InvoiceItems