import React from 'react'
import { CreateProyect } from '../screen/CreateProyect'
//import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const proy = () => {
    return (
        <>
            <div className="proy__main">
                <Sidebar/>
                <main>
                    {/*<NothingSelected/>*/}
                    <CreateProyect/>
                </main>
            </div>
        </>
    )
}
