import { collection, addDoc } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startNewProyect = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        //se puede hacer con destructurizacion 
        //const {uid} = getState().auth;
        const newProyect = {
            title: '',
            number: '',
            email: '',
            area: {
                tareas:{
                    nametask: '',
                    importance: '',
                    process: ''
                },
                programer: {
                    id: '',
                    progrmaername: '',
                    roll: ''
                },
            },
            description: '',
            date: new Date().getTime()
        }

        const docRef = await addDoc(collection(db,`Proyectos/${uid}/proy`), newProyect);

        dispatch(activeProyect(docRef.id,newProyect))


    }
}

export const activeProyect = (id, proyect) => ({
    type: types.proyectActive,
    payload: {
        id,
        ...proyect
    }
})