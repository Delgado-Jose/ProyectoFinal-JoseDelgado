import React, { useState, useEffect } from 'react'
import { ItemList } from '../itemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig.js'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { categoria } = useParams()
  
  useEffect(() => {
    if(categoria){
      getDocs(query(collection(db, "productos"), where("categoria","==",categoria)))
      .then(snapShot => {
        const coleccionProductos = snapShot.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(coleccionProductos)
      })
    }else{
      getDocs(collection(db, "productos")).then(snapShot => {
        const coleccionProductos = snapShot.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(coleccionProductos)
      })
    }
  }, [categoria])

  return (
    <div className="container mx-auto my-8">
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
