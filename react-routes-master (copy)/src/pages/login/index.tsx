import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from "../../services/firebaseConnection"
import { Input } from "../../components/input"
import { FormEvent, useState } from "react"

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (email === '' || password === '') {
            setError('Preencha todos os campos')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Logado com sucesso')
                navigate('/produto', { replace: true })
            })
            .catch((error) => {
                console.error('Erro ao fazer login:', error.message)
                setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.')
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="joão@silva.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
