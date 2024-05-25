import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:5001/user/login" , userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Login Successfull');
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                    window.location.reload();
                    localStorage.setItem("users" , JSON.stringify(res.data.user));
                } , 1000)
            }
        }).catch((err)=>{
            if(err.response){
                toast.error("Error :" + err.response.data.message);
                setTimeout(()=> {} , 2000)
            }
        })
      }
    return(
    <>
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link 
                        to="/" 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=>document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <br />
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
                            <br />
                            <input type="password"
                                placeholder='enter your password'
                                className='w-80 px-2 py-1 outline-none border rounded-md' 
                                {...register("password", { required: true })}
                            />
                            <br/>
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='flex items-center justify-between mt-3'>
                            <button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 duration-300'>Login</button>
                            <div>
                                Not Reegistered?
                                <Link to="/signup" className="text-blue-400 underline">Sign Up</Link>
                            </div>

                        </div>
                    </form>
                    
                </div>
            </dialog>
        </div>
    </>
)
}

export default Login
