import React from 'react'
import {FaRegTimesCircle} from 'react-icons/fa'
import { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)

  return (
    <>
      
      {alert !== null && (<div className='pb-1'><FaRegTimesCircle className='inline mx-2'/>{alert.msg}</div>)}
    </>
  )
}

export default Alert