import  { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
function Products() {
    type items={
        id?: number,
        title? : string,
        images?: string,
        price?: number
    }
    const {categoryId} = useParams()
    const [product,setProduct] = useState([])

    useEffect(()=>{
        const fetchingProduct = async()=>{
            try { 
             let url = 'https://api.escuelajs.co/api/v1/products'
               if (categoryId) url += `?categoryId=${categoryId}`
                const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
                if(!res.ok){
                    throw new Error('Failed to fetch Products')
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

     <div className='bg-green-500 p-6 flex space-between   '>
        <NavLink to='/'         
        className={({isActive})=>isActive ? "bg-gray-400 flex-1 text-center ": "text-gray-500" }> Home </NavLink>

        <NavLink to='/categories' 
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '  > Categories </NavLink>

        <NavLink to='/products'  
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> Products </NavLink>

        <NavLink to='/login'    
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> Login </NavLink>
       
    </div>

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