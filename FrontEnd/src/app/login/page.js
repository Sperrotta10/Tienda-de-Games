'use client';
import axios from 'axios';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import style from '../../Styles/login/login.module.css';

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
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            router.push('/');

        } catch (error) {
            console.error('Error en el login:', error);
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
                <button className={style['login-button']}>
                    Login
                </button>
                {error && <p>{error}</p>}
                <span><a className={style['login-link']} href="/register">¿No tienes cuenta? Registrate</a></span>
            </form>
        </div>
    )
}