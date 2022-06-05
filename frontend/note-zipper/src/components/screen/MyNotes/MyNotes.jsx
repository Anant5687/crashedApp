import React from 'react'
import MainScree from '../../MainScree'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, } from 'react-bootstrap'

const MyNotes = () => {
  const deleteHandeler = (i) => {
    if (window.confirm("Are you sure?")) {

    }
  }
  return (
    <>
      <MainScree title="Anant Jindal">
        <Link to="/createnote">
          <Button size="lg" style={{ marginLeft: 10, marginBottom: 6 }}>
            Create New Note
          </Button>
        </Link>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header><span> <h3> title</h3>
            </span>
              <div style={{marginLeft:"80%"}}>
                <Button href={`/note/${'_id'}`}>Edit</Button>
                <Button variant="danger" className="mx-2" onClick={() => deleteHandeler('_id')}>Delete</Button>
              </div></Accordion.Header>
            <Accordion.Body>
              <h4>
                <Badge variant="success" bg="success">
                  category notes-
                </Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Created on - 19/12/1989
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </MainScree>
    </>
  )
}

export default MyNotes


