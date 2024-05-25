import React from 'react'
import axios from 'axios'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm} from "react-hook-form" 
import toast from 'react-hot-toast'

const Signup = () => {

    const lacation = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:5001/user/signup" , userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Signup Successfull');
                navigate(from , {replace: true})
            }
            localStorage.setItem("users" , JSON.stringify(res.data.createdUser));
            
        }).catch((err)=>{
            if(err.response){
                toast.error("Error :" + err.response.data.message);
            }
        })
      }
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]'>
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link 
                            to="/" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </Link>
                        
                        <h3 className="font-bold text-lg">Sign Up</h3>
                        <div className='mt-4 space-y-2'>
                            <label>Name</label>
                            <br/>
                            <input type="text" 
                            placeholder='enter your fullname'
                            className='w-80 px-2 py-1 outline-none border rounded-md' 
                            {...register("fullname", { required: true })}
                            />
                            <br/>
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <br/>
                            <input type="text" 
                            placeholder='enter your email'
                            className='w-80 px-2 py-1 outline-none border rounded-md' 
                            {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <br/>
                            <input type="password" 
                            placeholder='enter your password'
                            className='w-80 px-2 py-1 outline-none border rounded-md' 
                            {...register("password", { required: true })}
                            />
                            <br/>
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='flex items-center justify-between space-x-4 mt-4'>
                            <button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 duration-300'>SignUp</button>
                            <div>
                                Already have an account? 
                                <button 
                                onClick={()=> document.getElementById('my_modal_3').showModal()} 
                                className="text-blue-400 underline"
                                >
                                    Login
                                </button> 
                                <Login/>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
