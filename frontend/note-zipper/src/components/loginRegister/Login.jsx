import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import MainScree from '../MainScree'
import { Link } from 'react-router-dom'
import './loginRegister.css'
import axios from 'axios'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const changeHandeler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const ClickHandeler = () => {
        if (state.email.trim() === "" || state.password.trim() === "") {
            alert("Require all fields")
        } else {
            setLoading(true)
            axios.post("http://localhost:9090/login", state).then((response) => {
                console.log(response.data)
                localStorage.setItem("userInfo", JSON.stringify({ ...state }))
                setLoading(false)
                setError(false)
                navigate('/mynotes')
            }).catch((err) => {
                setError(true)
                console.log(err)
                setLoading(false)
            })
            setState({
                email: "",
                password: ""
            })
        }
    }

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if (userInfo) {
            navigate('/mynotes')
        }
    }, [navigate])

    const submitHandeler = (e) => {
        e.preventDefault()
    }
    return (

        <MainScree title="Login">
            <div className="loginContainer">
                <Form onSubmit={submitHandeler}>
                    {error && <Error />}
                    {loading && <Loading />}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' type="email" name="email" value={state.email} placeholder="Enter email" onChange={changeHandeler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' type="number" value={state.password} name="password" placeholder="Password" onChange={changeHandeler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={ClickHandeler}>
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New User ? <Link to="/register">Register</Link>
                    </Col>
                </Row>
            </div>
        </MainScree>
    )
}

export default Login
