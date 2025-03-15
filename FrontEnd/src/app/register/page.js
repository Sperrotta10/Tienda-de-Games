'use client';
import axios from 'axios';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import style from '../../Styles/register/register.module.css'
import Link from 'next/link';
export default function RegisterPage() {

    const [error, setError] = useState('');

    const [credentials, setCredentials] = useState({
        username: '',
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
            const response = await axios.post('http://localhost:2004/users/create', credentials);
            console.log(response.data);
            const { accessToken, refreshToken } = response.data;
    
            // Guardar los tokens en localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            router.push('/');

        } catch (error) {
            /* console.log('Error en el register:', error); */
            setError('Error en el registro');
        }
    
    }

    return (
        <div className={style['register-container']}>
            <form className={style['register-form']} onSubmit={handleSubmit}>
                <h1 className={style['register-title']}>Registrate!</h1>
                <input className={style['register-input']} type="text" placeholder="Username" 
                    onChange={handleChange}
                    name="username"
                    
                />
                <input className={style['register-input']} type="email" placeholder="Email" 
                    onChange={handleChange}
                    name="email"
                    
                />
                <input className={style['register-input']} type="password" placeholder="Password" 
                    onChange={handleChange}
                    name="password"
                />
                {error && <p className={style['register-error']}>{error}</p>}
                <button className={style['register-button']}>
                    Registrarse
                </button>
                
                <span><Link className={style['register-link']} href="/login">¿Ya tienes cuenta? Logueate aqui</Link></span>
            </form>
        </div>
    )
}