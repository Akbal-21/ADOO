import { Card, FormControl, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { useState } from "react";
import Axios from "axios";

export const NewEquip = () => {
    const navigate = useNavigate();
    const [nameproy, setnameproy] = useState("")

    const handleadduser = () => {
        if (nameproy.length >= 8) {
            Axios.post("http://localhost:9000/equipo/", {
                Nombre: nameproy,
            })
                .then(res => {
                    console.log(nameproy)
                    navigate(`/addequip/${nameproy}`)
                })
                .catch(err => {
                    Swal.fire('Error', 'Error', 'error')
                })
        } else {
            Swal.fire('Error', 'El nombre del proyecto debe ser mayor a 15 caracteres', 'error')
        }
    }

    return (
        <>
            <div align="center" className="p-5">
                <Card
                    bg="dark"
                    text="white"
                >
                    <Card.Header as="h5">Nuevo Equipo</Card.Header>
                    <Card.Body>
                        <Card.Title className="p-3">
                            <InputGroup style={{ width: 350 }}>
                                <InputGroup.Text>Nombre del Equipo</InputGroup.Text>
                                <FormControl aria-label="First name"
                                    onChange={(e) => {
                                        setnameproy(e.target.value);
                                    }}
                                />
                            </InputGroup>
                        </Card.Title>
                        <Card.Text className="p-4">
                            <button className='btn btn-prime btn-block'
                                onClick={handleadduser}
                            >
                                Ingresar participantes
                            </button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
