import React from 'react'
import { ProyEntry } from './ProyEntry'

export const ProyEntries = () => {

    const entries = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
        <div className="proy__entries">
            {
                entries.map(value=>(
                    <ProyEntry key={value}/>
                ))
            }
        </div>
        </>
        
    )
}
