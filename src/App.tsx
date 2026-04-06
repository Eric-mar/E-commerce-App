import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    const fetching = async() =>{
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/categories`)
        if(!res.ok){
          throw new Error('failed to fetch!!')
        }
        const data = await res.json()
        console.log(data)
      } catch (error) { console.error(error)
        
      }
    }
     fetching()
  },[])


  return (
    <>
    <div>
      {}

    </div>
    </>
  )
}

export default App


