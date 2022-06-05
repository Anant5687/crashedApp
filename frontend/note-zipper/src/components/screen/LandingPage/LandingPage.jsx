import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <h1 className='title'>Welcome to Note Zipper</h1>
                        <p className='subtitle'>One of the safe place of your all notes</p>
                    </div>
                    <div className="buttonContainer">
                        <Link to="/login">
                            <Button size="lg" className="landingButton">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button size="lg" className="landingButton" variant="outline-primary">
                               Signup
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
