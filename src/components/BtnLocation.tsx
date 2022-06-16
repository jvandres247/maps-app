import React, { useContext } from 'react'
import { PlacesContext, MapContext } from '../context';

export const BtnLocation = () => {

    const {map, isMapReady} = useContext(MapContext);
    const {userLocation} = useContext(PlacesContext)

    const onClick = () => {
        if(!isMapReady) throw new Error('Mapa no esta listo');
        if(!userLocation) throw new Error('No hay ubicacion de usuario');

        map?.flyTo({
            zoom: 15,
            center: userLocation
        })
    }

  return (
    <button className='btn btn-primary'
        onClick={onClick}
        style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 999
        }}
    >
        Mi Ubicacion
    </button>
  )
}
