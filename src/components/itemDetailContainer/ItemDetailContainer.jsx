import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig.js'

const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [producto, setProducto] = useState([])
    
    useEffect(()=>{
      const referencia = doc(db, "productos", productoId)
      getDoc(referencia).then(snapShot =>{
        const data = snapShot.data()
        setProducto({id: snapShot.id, ...data})
      })
    },[productoId])

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer