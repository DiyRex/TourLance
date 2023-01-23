import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function navbar() {
  return (
    <div>
    <Button as="a" variant="primary">
      Button as link
    </Button>
    <Button as="a" variant="success">
      Button as link
    </Button>
  </div>
  )
}
