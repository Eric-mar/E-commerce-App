import {useState} from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
  type FormErrors = {
        email?: string,
        password?: string,
        userName?: string,
    }

    const navigate = useNavigate()
    const [loading,setLoading]= useState(true)
    const [error , setError] = useState <FormErrors>({})
    const [form , setForm] = useState({
        userName: '',
        email: '',
        password: ''  
      })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setForm({
        ...form,
        [name]: value
        })

    }
    const handleErrors = ()=>{
        let err: FormErrors = {}
        if (!form.email.includes('@')){
        err.email = 'Your email should include @'
    }
    if(!form.userName){
        err.userName = 'the username is required'
    }
    if(!form.password){
        err.password= 'Password is required'
    }

return err

    }  

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        

        const validate = handleErrors()
        setError(validate)
        if( Object.keys(validate).length === 0 ){
            console.log('Submit',form)
        }
        setLoading(true)

          try {
     
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!response.ok) throw new Error("Failed to fetch users");

      const users = await response.json();
      const exist = users.find(
        (u: any) => u.email === form.email && u.password === form.password
      )

        if(!exist){
          alert('Unkown User or wrong password')
          setTimeout(()=>{
            navigate('/login')
          },1000)
         
            return 
        }
         else if(exist){
            alert `welcome back `
             setTimeout(()=>{
            navigate('/categories')
          },1000)
          }
    }
        catch(error){
           console.error("Error fetching users:", error);
      alert("Something went wrong. Please try again later.");
      setLoading(false)
        }

        // users.push(form)
        // localStorage.setItem('users',JSON.stringify(users))
        // console.log('submit',form)
        

    
    }
    

  return (
<>
<fieldset className='bg-orange-400 my-10 mx-10 p-4  border rounded-2xl ' >
    <legend>LOGIN</legend>

<form onSubmit={handleSubmit} >
    <label> UserName: </label>
    <input type="text"
     className='border-2 m-4 '
     onChange={handleChange}
     value={form.userName}
     name='userName'
     autoFocus
     />
     <br />
{error.userName}
<br /><br />

    <label> Email:  </label>
    <input type="text" 
    className='border-2 m-4 '
    onChange={handleChange}
    value={form.email}
    name='email'
    />
    <br />
{error.email}
    <br /><br />
    
       <label> Password:  </label>
    <input type="text" 
    className='border-2 m-4 '
    onChange={handleChange}
    value={form.password}
    name='password'
    />
    <br />

    <br /><br />


    <button 
    className='bg-green-600 text-white p-2 m-4 rounded-2xl hover:bg-amber-500 font-bold '
    name='submit'
    type='submit'
    >LOGIN</button>
</form>

</fieldset>
</> 
 )
}

export default Login