/* eslint-disable no-undef */
import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'


export default function Signup() {

    const emailRef = useRef()
    const passRef = useRef()
    const passConfRef = useRef()
    const signUp = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        if(passRef .current.value !== passConfRef.current.value){
            return setError('Senhas não conferem')
        }

        try{
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passRef.current.value)

        } catch {
            setError('Não foi criado o usuario')
        }
        setLoading(false)

       
    }
    return(
    <>
       
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Criar conta</h2>
                    {error &&  <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passRef} required />
                        </Form.Group> 
                        <Form.Group id="email">
                            <Form.Label>Confirme a senha</Form.Label>
                            <Form.Control type="password-confirm" ref={passConfRef} required />
                        </Form.Group>  
                        <Button  disabled={loading} className="w-100 " type="submit">Cadastrar</Button>          
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            Possui uma conta? Login
            </div>
        
    </>
    )
}