import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScree from '../MainScree'
import './loginRegister.css'
import axios from 'axios'
import Loading from '../Loading/Loading'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
        img: ""
    })
    const onChangeHandeler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onClickHandeler = () => {
        if (state.name.trim() === "" || state.email.trim() === "" || state.password.trim() === "" || state.repassword.trim() === "") {
            alert("Please fill Require fields")
        } else {
            const { password, repassword } = state
            if (password !== repassword) {
                window.alert("Your password is not matched")
            } else {
                setLoading(true)
                axios.post("http://localhost:9090/register", state).then((response) => {
                    console.log(response.data)
                    setLoading(false)
                    navigate('/login')
                }).catch((err) => {
                    setAlert(true)
                    console.log(err)
                    setAlert(false)
                    setLoading(false)
                })
            }
        }
    }

    const submitHandeler = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container'>
            <MainScree title="Register">
                <Form onSubmit={submitHandeler}>
                    {loading && <Loading />}
                    <Form.Group className="mb-3" controlId="formBasicInput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='input' value={state.name} name="name" type="text" placeholder="Enter name" onChange={onChangeHandeler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' value={state.email} name="email" type="email" placeholder="Enter email" onChange={onChangeHandeler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' value={state.password} name="password" type="number" placeholder="Password" onChange={onChangeHandeler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className='input' value={state.repassword} name="repassword" type="number" placeholder="Confirm password" onChange={onChangeHandeler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Profile Picture (Optional)</Form.Label>
                        <Form.Control className='input' value={state.img} name="img" type="file" onChange={onChangeHandeler} />
                    </Form.Group>

                    <Button className='input' style={{ marginTop: "30px" }}
                        variant="primary" type="submit" onClick={onClickHandeler}>
                        Register
                    </Button>
                </Form>

                <Row className="py-3 " >
                    <Col>
                        Have an Account ? <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </MainScree>
        </div>
    )
}

export default Register
