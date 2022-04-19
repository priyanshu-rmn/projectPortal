import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { ExternalLink } from 'react-external-link';
export default class SignINbtn extends Component {
    
    render(){
        return (
            <div>
                <ExternalLink href="http://localhost:8000/auth/google" >
                    <Button align>Sign in</Button>
                </ExternalLink>
            </div>
        )
    }
}