import { Card } from 'react-bootstrap';

export const WelcomScreen = () => {
    return (
        <div align="center">
          <h1>Bienvenido</h1>
          <hr />
          <Card
            bg="dark"
            text="white"
            style={{ width: "12cm" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title> <h2>Hola</h2> </Card.Title>
              <Card.Text>
                En esta pagina te ayudaremos a gestionar tus futuros proyecttos de una forma rapida y efectiva
                para que puedas tener una major gestion y administrationen estos.
                Es un camino nuevo al futuro.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    };