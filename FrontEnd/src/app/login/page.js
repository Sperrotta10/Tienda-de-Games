'use client';
import axios from 'axios';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import style from '../../Styles/login/login.module.css';
import Link from 'next/link';

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
            router.push('/');

        } catch (error) {
            /* console.error('Error en el login:', error); */
            setError('Credenciales incorrectas');
        }
    
    }

    return (
        <div className={style['login-container']}>
            <form className={style['login-form']} onSubmit={handleSubmit}>
                <h1 className={style['login-title']}>Bienvenido!</h1>
                <input className={style['login-input']} type="email" placeholder="Email" 
                    onChange={handleChange}
                    name="email"
                    
                />
                <input className={style['login-input']} type="password" placeholder="Password" 
                    onChange={handleChange}
                    name="password"
                />
                {error && <p className={style['login-error']}>{error}</p>}
                <button className={style['login-button']}>
                    Login
                </button>
                
                <span><Link className={style['login-link']} href="/register">¿No tienes cuenta? Registrate</Link></span>
            </form>
        </div>
    )
}