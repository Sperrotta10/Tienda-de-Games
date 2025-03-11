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

        await axios.post('http://127.0.0.1:2004/auth/login', credentials)
  .then(response => {
    // La petición fue exitosa
    console.log('Datos recibidos:', response.data);
    // Aquí puedes procesar los datos recibidos
  })
  .catch(error => {
    // Ocurrió un error durante la petición
    console.error('Error:', error);
    // Aquí puedes manejar el error
  });
        
        //const response = await axios.post('http://localhost:2004/auth/login', credentials);
        //console.log(response);
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