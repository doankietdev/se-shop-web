import React from 'react'
import Form from './Form'
import { useLocation } from 'react-router-dom'

const CheckOut = () => {
  const location = useLocation()
  const singlePurchasedProduct = location.state

  return (
    <section className='my-16'>
        <h1 className='text-4xl leading-[30px] mb-12'>Billing Details</h1>
        <div className='checkout-container flex'>
            <div className='form-container w-full'>
                <Form {...singlePurchasedProduct}/>
            </div>
        </div>
    </section>
  )
}

export default CheckOut