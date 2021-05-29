/* eslint-disable no-undef */
import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'


export default function Signup() {

    const emailRef = useRef()
    const passRef = useRef()
    const passConfRef = useRef()

    return(
    <>
       
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Criar conta</h2>
                    <Form>
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
                        <Button className="w-100 " type="submit">Cadastrar</Button>          
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            Possui uma conta? Login
            </div>
        
    </>
    )
}