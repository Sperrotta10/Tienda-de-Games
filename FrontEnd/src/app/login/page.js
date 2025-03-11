'use client';
import axios from 'axios';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function LoginPage() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        
        //const response = await axios.post('/api/auth/login', credentials);
        //console.log(response.status);
        //if (response.status == 200) {
        //    router.push('/dashboard');
        //}
        //console.log(response);
        //
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" 
                    onChange={handleChange}
                    name="email"
                    
                />
                <input type="password" placeholder="Password" 
                    onChange={handleChange}
                    name="password"
                />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}