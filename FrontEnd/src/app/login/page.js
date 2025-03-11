'use client';
import axios from 'axios';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function LoginPage() {

    const [error, setError] = useState('');

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
        try {
            const response = await axios.post('http://localhost:2004/auth/login', credentials);
            const { accessToken, refreshToken } = response.data;
    
            // Guardar los tokens en localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            console.log(localStorage.getItem('accessToken'))
            console.log(localStorage.getItem('refreshToken'))
            router.push('/');

        } catch (error) {
            console.error('Error en el login:', error);
            setError('Credenciales incorrectas');
        }
    
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
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}