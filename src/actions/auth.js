import { auth, provider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";


export const startLoginEmailPassword = (email, password) =>{
    return (dispatch)=> {

        dispatch(startLoading());

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName, user.email));
                dispatch(finishLoading())
        })
         .catch(e => {
             dispatch(finishLoading())
             Swal.fire('Error', 'Usuario no encontrado, o fue eliminado', 'error')
         })

    }
}

export const startRegisterEmailPassword = (email, password, name) =>{
    return (dispatch)=> {
        createUserWithEmailAndPassword(auth,email,password)
            .then(async({user}) =>{
                await updateProfile(user,{
                    displayName: name
                })

                dispatch(
                    login(user.uid, user.displayName, user.email)
                )

            })
            .catch(e => {
                Swal.fire('Error','El usuario ya existe', 'error');
            })
    }
}


export const startGoogleLogin = ()=>{
    return (dispatch)=> {
        signInWithPopup(auth, provider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL)
                )
        })
    }
}



export const login = (uid,displayName, email,photoURL) =>({
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            photoURL

        }
})

export const startLogout = () =>{
    return async(dispatch) => {
        await signOut(auth);

        dispatch(logout());
    }
}

export const logout = () =>({
    type: types.logout
})