import React from 'react'
import { ProyEntries } from './ProyEntries'

export const Sidebar = () => {
    return (
        <aside className="proy__sidebar">
            <div className="proy__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Fernando</span>
                </h3>
                <button className="btn">
                    logout
                </button>
            </div>

            <div className="proy__new-entry">
                <i className="fas fa-project-diagram fa-2x"></i>
                <p>Proyecto</p>
            </div>

            <div className="proy__new-entry mt-5">
                <i className="far fa-user fa-2x"></i>
            </div>
            

            <ProyEntries/>

        </aside>
    )
}
