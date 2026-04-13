import {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';

function Categories() {
 type items={
          id?: number,
      name?: string,
      image?: string
      }
      const [categories,setCategories] = useState([])
  
      useEffect(()=>{
          const fetchingCategory = async()=>{
              try { 
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories`)
                  if(!res.ok){
                      throw new Error('Failed to fetch categories')
                  }
                  const data = await res.json()
                  setCategories(data)
                  console.log(data)
                  
              } catch (error) { console.log(error)
                  
              }
           }
          fetchingCategory()
      },[])
    
    return (
      <>

       

      <div className="min-h-screen bg-gray-100">
          <div  className="max-w-7xl mx-auto p-6" >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categories.map((category: items)=>( 
                    <Link key={category.id} to={`/products/${category.id}`} >
                    
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                         <img src={category.image} 
                          className="w-full h-48 object-cover" />
                          <h1 className="text-lg font-semibold text-gray-800">{category.name}</h1>

                      </div>
  
                  
                </Link> ))}

  
          </div>
          </div> </div>
      </>
    )
}

export default Categories