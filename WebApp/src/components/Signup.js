import React from 'react'
import {Form, Button, Card} from "react-bootstrap"

export default function Signup() {
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className = "text-center">Sign Up</h2>
                <Form>
                    <Form.Group>  
                    </Form.Group>
                </Form>        
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            already have an existing account
        </div>
        </>
    )
}
