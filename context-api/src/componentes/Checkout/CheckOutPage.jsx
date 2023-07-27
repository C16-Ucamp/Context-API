import React from 'react'
import BtnCheckout from './BtnCheckout'

const CheckOutPage = () => {
    const currency = "USD";
  return (
    <div>
      <h1>CheckoutPage</h1>
      
      <BtnCheckout 
       currency={currency}
       showSpinner={false}
      />

    </div>
  )
}

export default CheckOutPage
