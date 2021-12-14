import React from "react";
import { Card } from "react-bootstrap";

export const About = () => {
  return (
    <div align="center">
      <h1>Abouth</h1>
      <hr />
      <Card
        bg="dark"
        text="white"
        style={{ width: "12cm" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> ¿Que somos? </Card.Title>
          <Card.Text>
            Es un poyecto escolar el cual sera el encargado de realizar un manejaddor de proyectos 
            donde un usuario pueda crear un proyecto junto con un equipo de trabajo, asignar roles 
            y que cada persona pueda subir sus archivos.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
