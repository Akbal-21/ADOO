import React, { useEffect } from "react";
import { ProyAppBar } from "./ProyAppBar";
import { useDispatch, useSelector } from "react-redux";
import TaskScreen from "../task/TaskScreen";
import Equip from "../proyect/Equip";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const CreateProyect = () => {
  const { id } = useSelector((state) => state.proyectos.active);

  return (
    <div className="proyect__main-content">
      <ProyAppBar />

      <div className="proyecto__content mt-5 mb-5">
        <Card style={{ width: "30cm" }}>
          <Card.Img
            variant="top"
            src={
              "https://www.biodiversidadla.org/var/biodiversidadla_org/storage/images/media/images/difusion-proyectos-5/1201962-1-esl-ES/Difusion-proyectos-5.jpg"
            }
          />
          <Card.Body>
            <Card.Title>
              <h1>ID del proyecto: {id}</h1>
            </Card.Title>
            <Card.Text>
              <input
                type="text"
                placeholder="Nombre del Proyecto"
                className="input proyect__title"
                autoComplete="off"
              ></input>
              <br />
              <textarea
                className="proyect__textarea"
                placeholder="Descripción del Proyecto"
                autoComplete="off"
              ></textarea>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <h2>Contacto</h2>
              <input
                type="phone"
                placeholder="5599999999"
                className="input proyect__phone"
              ></input>
              <br />

              <input
                type="email"
                placeholder="email@example.com"
                className="input proyect__email"
              ></input>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Equip />
            <TaskScreen />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
