import { Card, Form, FormControl, InputGroup } from "react-bootstrap"
import { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

export const NewProyect = () => {

    const [task, settask] = useState('')
    const [equipname, setequipname] = useState("")
    const [equip, setequip] = useState([])
    const [Integrantes, setIntegrantes] = useState([])
    const [adate, setdate] = useState(new Date())
    const [nomProy, setnomProy] = useState('')
    const [NameTask, setNameTask] = useState('')
    const [idproy, setidproy] = useState([])
    const [descProy, setdescProy] = useState('')

    const timew = ([
        {
            id: 0,
            Estado: 'Con tiempo'
        },
        {
            id: 1,
            Estado: 'Urgente'
        },
        {
            id: 2,
            Estado: 'Finalizado'
        }
    ])

    const [Esta, setEsta] = useState('')

    console.log(Esta, equipname, equip, Integrantes ,idproy)

    const handleReg = () => {
        Axios.post("http://localhost:9000/proyecto/proy/", {
            Nombre: nomProy,
            Descripcion: descProy,
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro existoso',
                    showConfirmButton: false,
                    timer: 1000
                })

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registro fallido',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
        Axios.get("http://localhost:9000/proyecto/")
            .then(res => {
                setequip(res.data)
            })
            .catch(err => {
                Swal.fire('Error', 'Error', 'error')
            })
        Axios.post("http://localhost:9000/proyecto/idproy/")
            .then(res => {
                setidproy(res.data)
            })
            .catch(err => {
                Swal.fire('Error', 'Error', 'error')
            })
    }

    const handleSubmit = () => {
        Axios.post("http://localhost:9000/proyecto/user/", {
            Nombre: equipname
        }).then(res => {
            setIntegrantes(res.data)
        }).catch(err => {
            Swal.fire('Error', 'Error', 'error')
        })

    }

    const handleSave = () => {
        Axios.post("http://localhost:9000/proyecto/task/", {
            Nombre: NameTask,
            Descripcion: task,
            tiempo: adate,
            Estado: Esta,
            idintegrante: equip.idIntegrante,
            idproyecto: idproy,
            idEquipo: equip.idEquipo,
        })
    }



    return (
        <div align="center">
            <Card
                bg="dark"
                text="white"
                className="p-3"
            >
                <Card.Header as="h5">Nuevo Proyecto</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <InputGroup className="mb-3" style={{ width: 500 }}>
                            <InputGroup.Text>Nombre del proyecto</InputGroup.Text>
                            <FormControl aria-label="First name" onChange={(e) => setnomProy(e.target.value)} />
                        </InputGroup>
                        <InputGroup className="mb-3" style={{ width: 500 }}>
                            <InputGroup.Text>Descripcion del proyecto</InputGroup.Text>
                            <FormControl aria-label="First name" onChange={(e) => setdescProy(e.target.value)} />
                        </InputGroup>
                        <button className='btn btn-prime btn-block mb-3' onClick={handleReg}>
                            Registrar Nombre del Proyecto
                        </button>
                        <InputGroup className="mb-3" style={{ width: 350 }}>
                            <InputGroup.Text>Seleccione un equipo</InputGroup.Text>
                            <Form.Select onChange={(e) => {
                                setequipname(e.target.value)
                            }} >
                                {equip.map((equi) => (
                                    <option key={equi.idEquipo}> {equi.Nombre} </option>

                                ))}
                            </Form.Select>
                        </InputGroup>
                        <button className='btn btn-prime btn-block mb-3' onClick={handleSubmit}>
                            Buscar integrantes
                        </button>
                    </Card.Title>
                    <Card.Text>

                        <InputGroup className="mb-3" style={{ width: 600 }}>
                            <InputGroup.Text>Seleccione un equipo</InputGroup.Text>
                            <Form.Select onChange={(e) => {
                                setequipname(e.target.value)
                            }} >
                                {Integrantes.map((integ) => (
                                    <option key={integ.idIntegrante}>
                                        {integ.Nombre + ' ' + integ.ApPat + ' ' + integ.ApMat}
                                    </option>

                                ))}
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-3" style={{ width: 500 }}>
                            <InputGroup.Text>Nom_Tarea</InputGroup.Text>
                            <FormControl aria-label="task" onChange={(e) => setNameTask(e.target.value)} />
                        </InputGroup>
                        <InputGroup className="mb-3" style={{ width: 500 }}>
                            <InputGroup.Text>Tarea: </InputGroup.Text>
                            <FormControl aria-label="task" onChange={(e) => settask(e.target.value)} />
                        </InputGroup>
                        <DatePicker
                            selected={adate}
                            onChange={(date) => setdate(date)}
                            dateFormat="yyy/MM/dd"
                            calendarStartDay={3}
                            withPortal
                            portalId="root-portal"
                        />
                        <InputGroup className="mt-3 mb- 3" style={{ width: 500 }}>
                            <InputGroup.Text>Seleccione un Estado</InputGroup.Text>
                            <Form.Select onChange={(e) => {
                                setEsta(e.target.value)
                            }} >
                                {timew.map((tim) => (
                                    <option key={tim.id}>
                                        {tim.Estado}
                                    </option>

                                ))}
                            </Form.Select>
                        </InputGroup>
                        <button className='btn btn-prime btn-block mt-3' onClick={handleSave}>
                            Guardar tarea
                        </button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}
