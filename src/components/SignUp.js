import { useState } from 'react'
import logo from '../img/logo.png'
import banner from '../img/Ecommerce campaign-pana.svg'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="relative w-[100%] h-[100%] sm:bg-white lg:bg-[#F4F4F4] sm:flex sm:flex-col sm:justify-center sm:pt-6 lg:justify-center sm:items-center">
            <img className='sm:h-12 sm:w-12 md:w-18 md:h-18 h-28 w-28 mb-4 z-10' src={logo} alt="" />
            <h1 className="sm:text-2xl lg:text-4xl font-semibold mb-2 z-10"> Create your account </h1>
            <p className="sm:text-sm lg:text-lg mb-6 font-semibold z-10">
                Already registered? 
                <a className='text-[#2563EC] px-2 hover:relative hover:bottom-0.5' href="/"> 
                    Sign in
                </a>
            </p>

            <div className='sm:w-[100%] w-[40%]  min-w-[280px] max-w-[450px] lg:bg-white flex flex-col py-6 justify-evenly items-center lg:shadow-xl lg:rounded-lg z-10'>
                <div class="sm:w-[80%] md:w-9/12 flex items-center justify-center mb-6 ">
                    <div class="w-full relative">
                    <input 
                        type="text" 
                        id="first-name" 
                        name='first-name' 
                        class="w-full border-b border-gray-600 sm:text-sm md:text-lg py-1 px-2 sm:bg-transparent focus:outline-none focus:border-[#2563EC] focus:border-b-5 transition-colors peer" 
                        autocomplete="off"
                        value={firstName} 
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <label 
                        htmlFor="first-name" 
                        class="sm:w-[80%] w-9/12 absolute left-0 top-1 px-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#2563EC] transition-all"
                    > 
                        First Name 
                    </label>
                    </div>
                </div>
                
                <div class="sm:w-[80%] md:w-9/12 flex items-center justify-center mb-6">
                    <div class="w-full relative">
                        <input 
                            type="text" 
                            id="last-name" 
                            name='last-name' 
                            class="w-full border-b border-gray-600 sm:text-sm md:text-lg py-1 px-2 sm:bg-transparent focus:outline-none focus:border-[#2563EC] focus:border-b-5 transition-colors peer" 
                            autocomplete="off"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} 
                        />
                        <label 
                            htmlFor="last-name" 
                            class="sm:w-[80%] w-full absolute left-0 top-1 px-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#2563EC] transition-all"
                        > 
                            Last Name 
                        </label>
                    </div>
                </div>
                
                <div class="sm:w-[80%] md:w-9/12 flex items-center justify-center mb-6 ">
                    <div class="w-full relative">
                        <input 
                            type="text" 
                            id="phone-number" 
                            name='phone-number' 
                            class="w-full border-b border-gray-600 sm:text-sm lg:text-lg py-1 px-2 sm:bg-transparent focus:outline-none focus:border-[#2563EC] focus:border-b-5 transition-colors peer" 
                            autocomplete="off"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        <label 
                            htmlFor="phone-number" 
                            class="sm:w-[90%] w-full absolute left-0 top-1 px-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#2563EC] transition-all"
                        > 
                            Phone Number
                        </label>
                    </div>
                </div>
                
                <div class="sm:w-[80%] md:w-9/12 flex items-center justify-center mb-6">
                    <div class="w-full relative">
                        <input 
                            type="email" 
                            id="email" 
                            name='email' 
                            class="w-full border-b border-gray-600 border-gray-600 sm:text-sm lg:text-lg py-1 px-2 sm:bg-transparent focus:outline-none focus:border-[#2563EC] focus:border-b-5 transition-colors peer" 
                            autocomplete="off"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label 
                            htmlFor="email" 
                            class="sm:w-[90%] absolute left-0 top-1 px-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#2563EC] transition-all"
                        > 
                            Email 
                        </label>
                    </div>
                </div>
                
                <div class="sm:w-[80%] md:w-9/12 flex items-center justify-center mb-6">
                    <div class="relative w-full">
                        <input 
                            type="password" 
                            id="password" 
                            name='password' 
                            class="w-full border-b border-gray-600 sm:text-sm lg:text-lg py-1 px-2 sm:bg-transparent focus:outline-none focus:border-[#2563EC] focus:border-b-5 transition-colors peer" 
                            autocomplete="off" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label 
                            htmlFor="password" 
                            class="sm:w-[90%] md:w-full absolute left-0 top-1 px-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#2563EC] transition-all"
                        > 
                            Password 
                        </label>
                    </div>
                </div>

                <button className='sm:w-[80%] md:w-9/12 sm:text-sm md:text-lg font-semibold h-10 border sm:bg-transparent md:bg-[#2563EC] sm:text-gray-600 sm:font-bold md:text-white sm:border-gray-600 sm:hover:bg-[#2563EC] sm:hover:text-white sm:hover:border-transparent  md:border-gray-300 px-3 py2 rounded-lg shadow-sm focus:outline-none'> Sign Up </button>
            </div>

            <img src={banner} className="sm:block lg:hidden sm:absolute sm:bottom-0 h-58 opacity-70" alt="" />
        </div>
    )
}

export default SignUp