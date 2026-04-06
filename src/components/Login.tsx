import {useState} from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
  type FormErrors = {
        email?: string,
        password?: string,
        userName?: string,
        confirmPassword?: string
    }

    const navigate = useNavigate()

    const [error , setError] = useState <FormErrors>({})
    const [form , setForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''  
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
    if (form.password !== form.confirmPassword){
        err.password ='enter the matching password'
    }
    if(!form.userName){
        err.userName = 'the username is required'
    }

return err

    }
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        

        const validate = handleErrors()
        setError(validate)
        if( Object.keys(validate).length === 0 ){
            console.log('Submit',form)


        }

         const users = JSON.parse(localStorage.getItem('users') || "[]")
        const exist = users.some( u => u.email === form.email)

        if(exist){
          alert('the user arleady exist')
            setTimeout(()=>{
                navigate('/login')
            },1000)
            return
        }

        users.push(form)
        localStorage.setItem('users',JSON.stringify(users))
        console.log('submit',form)
        

    
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

    <label> ConfirmPasword:  </label>
    <input type="text" 
    className='border-2 m-4 ' 
    onChange={handleChange}
    value={form.confirmPassword}
    name='confirmPassword'
    />
    <br />
{error.password}
    <br /><br />


    <button className='bg-green-600 text-white p-2 m-4 rounded-2xl hover:bg-amber-500 font-bold '
    name='submit'
    type='submit'
    >SignUP</button>
</form>

</fieldset>
</> 
 )
}

export default Login