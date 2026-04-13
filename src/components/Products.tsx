import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Products() {
    type items={
        id: number,
        title : string,
        images: string,
        price: number
    }
    const {categoryId} = useParams()
    const [product,setProduct] = useState<items[]>([])

    useEffect(()=>{
        const fetchingProduct = async()=>{
            try { 
             let url = 'https://api.escuelajs.co/api/v1/products'
               if (categoryId) url += `?categoryId=${categoryId}`
                const res = await fetch(url)

                if(!res.ok){
                    throw new Error('Failed to fetch categories')
                }
                const data = await res.json()
                setProduct(data)

                console.log(data)
    
            } catch (error) { console.log(error)
                
            }
         }
        fetchingProduct()
    },[])
  
  return (
    <>

     

    <div className="min-h-screen bg-gray-100">
        <div  className="max-w-7xl mx-auto p-6" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.map((item: items)=>( 
                    <Link to= {`/products/${item.id}`} key={item.id} >
                  
                    <div  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img src={item.images} width= '200'  className="w-full h-48 object-cover " />
                        <h1 className="text-lg font-semibold text-gray-800">${item.price}</h1>
                        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
                    </div>

              
            </Link>
        ))}

        </div>
        </div> </div>
    </>
  )
}

export default Products