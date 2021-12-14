import { useEffect, useState } from "react";
import '../../styles/Components/equip.scss'
import Axios from "axios";
import validator from 'validator'
import Swal from 'sweetalert2'
import { Card, Form, FormControl, InputGroup } from "react-bootstrap"
import { useParams } from "react-router-dom";

export const Equip = () => {

  const [correo, setcorreo] = useState("")
  const [idcargo, setidcargo] = useState("")
  const [Cargo, setCargo] = useState([])
  const { nameproy } = useParams();

  useEffect(() => {
    Axios.get("http://localhost:9000/equipo/cargo/")
      .then(res => {
        console.log(res.data)
        setCargo(res.data)

      })
      .catch(err => {
        Swal.fire('Error', 'Error', 'error')
      })
  }, [])

  const handleSubmit = () => {
    console.log(correo, idcargo, nameproy)
    if (!validator.isEmail(correo)) {
      Swal.fire('Error', 'Correo invalido', 'error')
      return
    } else {
      if (idcargo === 'Boss') {
        Axios.post("http://localhost:9000/equipo/add/", {
          Correo: correo,
          Nombre: nameproy,
          cargo: 1
        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario agregado',
              showConfirmButton: false,
              timer: 1000
            })
          })
          .catch(err => {
            Swal.fire('Error', 'Error', 'error')
          })
      } else if (idcargo === 'Programmer') {
        Axios.post("http://localhost:9000/equipo/add/", {
          Correo: correo,
          Nombre: nameproy,
          cargo: 2
        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario agregado',
              showConfirmButton: false,
              timer: 1000
            })
          })
          .catch(err => {
            Swal.fire('Error', 'Error', 'error')
          })
      } else if (idcargo === 'Tester') {
        Axios.post("http://localhost:9000/equipo/add/", {
          Correo: correo,
          Nombre: nameproy,
          cargo: 3
        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario agregado',
              showConfirmButton: false,
              timer: 1000
            })
          })
          .catch(err => {
            Swal.fire('Error', 'Error', 'error')
          })

      } else if (idcargo === 'Designer') {
        Axios.post("http://localhost:9000/equipo/add/", {
          Correo: correo,
          Nombre: nameproy,
          cargo: 4
        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario agregado',
              showConfirmButton: false,
              timer: 1000
            })
          })
          .catch(err => {
            Swal.fire('Error', 'Error', 'error')
          })
      } else if (idcargo === 'Analist') {
        Axios.post("http://localhost:9000/equipo/add/", {
          Correo: correo,
          Nombre: nameproy,
          cargo: 5
        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Usuario agregado',
              showConfirmButton: false,
              timer: 1000
            })
          })
          .catch(err => {
            Swal.fire('Error', 'Error', 'error')
          })

      }

    }
  }


  return (
    <>
      <div align="center">
        <Card
          bg="dark"
          text="white"
        >
          <Card.Header as="h5">Equipo: {nameproy}</Card.Header>
          <Card.Body>
            <h4>Agrega usuarios al Equipo</h4>
            <Card.Title>
              <InputGroup className="mb-3" style={{ width: 350 }}>
                <InputGroup.Text>Cor_Usuario</InputGroup.Text>
                <FormControl aria-label="correo User"
                  onChange={(e) => {
                    setcorreo(e.target.value);
                  }}
                />
              </InputGroup>
            </Card.Title>
            <Card.Text>
              <Form.Select onChange={(e) => {
                setidcargo(e.target.value)
              }} >
                {Cargo.map((car) => (
                  <option key={car.idCargo}> {car.Puesto} </option>

                ))}
              </Form.Select>

            </Card.Text>
            <button className='btn btn-prime btn-block' onClick={handleSubmit}>
              Agregar
            </button>
          </Card.Body>
        </Card>
      </div>


    </>
  );
}
