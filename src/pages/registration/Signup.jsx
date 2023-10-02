import { createUserWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, updateCurrentUser } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseConfig';

function Signup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const arePasswordsMatching = () => {
        return password === confirmPassword
    }
    const signup = async () => {
        if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "")
            return alert("Please fill all fields")
        if (password !== confirmPassword) {
            return alert("passwords do not matched")
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(auth.currentUser);       
            alert("We have sent you varification mail");
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            return user;
        } catch (error) {
        console.log(error);
    }
}
return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
            </div>
            <div>
                <input type='text'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    name='fname'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='First Name'
                />
                <br />
                <input type='text'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    name='lname'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Last Name'
                />
                <br />
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Email'
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Password'
                />
                <br />
                <input
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Confirm Password'
                />
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                    onClick={signup}
                    className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                    Signup
                </button>
            </div>
            <div>
                <h2 className='text-white'>Already have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
            </div>
        </div>
    </div>
)
}

export default Signup;