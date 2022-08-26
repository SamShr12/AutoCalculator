import React from 'react'

const Amount = ({subtotal}) => {
  return (
    <section>
        <div className='grid-2 px-2'>
                <div>
                    <p>Sub Total</p>
                </div>
                <div>
                    <p>{subtotal}</p>
                </div>
        </div>
        <div className='grid-2 mt-4 py-2 bg-[#ccc] px-2'>
                <div>
                    <p>Total</p>
                </div>
                <div>
                    <p>Rs. {subtotal}</p>
                </div>
        </div>
    </section>
  )
}

export default Amount