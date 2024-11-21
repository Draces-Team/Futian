import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../api'
import { ACCESS_TOKEN , REFRESH_TOKEN } from '../constants'
import '../styles/main.css'



function LoginForm({route,method}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/dashboard")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };
    return <form onSubmit={handleSubmit}>
        <label htmlFor="username">
                <h5>اسم المستخدم</h5>
                <input
                 placeholder='اسم المستخدم او البريد الكتروني'
                 value={username}
                 onChange={(e)=> setUsername(e.target.value)}
                 type="text"
                 id='username'
                 />
            </label>

            <label htmlFor="password">
                <h5>كلمة المرور</h5>
                <input
                    placeholder='اكتب كلمة المرور الخاص بك ...' 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type="text"
                    id='passord'
                />
            </label>
            <button type="submit">دخول</button>
    </form>
}

export default LoginForm