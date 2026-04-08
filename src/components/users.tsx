import {useState, useEffect} from 'react'

function Users() {
 type items={
         id?: number,
         name? : string,
         avatar?: string,
         email? : string,
         role? : string
     }
     const [category,setCategory] = useState([])
 
     useEffect(()=>{
         const fetchingCategory = async()=>{
             try { 
                 const res = await fetch(`https://api.escuelajs.co/api/v1/users`)
                 if(!res.ok){
                     throw new Error('Failed to fetch categories')
                 }
                 const data = await res.json()
                 setCategory(data)
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
                 {category.map((item: items)=>( 
                     <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                         <img src={item.avatar} width= '200'  className="w-full h-48 object-cover" />
                         <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                         <h1>{item.email}</h1>
                         <h1>{item.role}</h1>
                     </div>
 
                 ))}
 
         </div>
         </div> </div>
     </>
   )
 }


export default Users