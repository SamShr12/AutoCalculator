import React from 'react'

const InvoiceBody = () => {
  return (
    <section>
        <div className='grid-5 text-center bg-[#666666] font-semibold text-white py-3'>
            <div>
                <h2>Name</h2>
            </div>
            <div>
                <h2>Quantity</h2>
            </div>
            <div>
                <h2>Status</h2>
            </div>
            <div>
                <h2>Rate</h2>
            </div>
            <div>
                <h2>Amount</h2>
            </div>
        </div>
    </section>
  )
}

export default InvoiceBody