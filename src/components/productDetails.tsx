import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    type ProductType = {
        id? : number,
        description?: string,
        images?: string,
        title?: string,
        price?: number,
    }

    const {id} = useParams()


    const [products, setProducts] = useState<any>(null)
    const [loading,setLoading] = useState(true)
  
    useEffect(()=>{
        const fetchingProductById = async ()=>{
        try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            if(!res.ok){
                throw new Error('Failed to fetch the information')
            }
            const data = await res.json()
            console.log(data)
            setLoading(true)
            setProducts(data)
            
        } catch (error) { 
            console.log(error)
  
        }
        finally{setLoading(false)}
    }
        fetchingProductById()
    },[id])
    
  return (
  <>
  <div>
    
        <div className="w-64 h-64 object-cover rounded mx-auto my-10">
        <img src={products?.images} width='500'  />
        <h1>{products?.title}</h1>
        <h3>${products?.price}</h3>
        <span>{products?.description}</span>
        </div>
    
  </div>
  </>
  )
}

export default ProductDetails