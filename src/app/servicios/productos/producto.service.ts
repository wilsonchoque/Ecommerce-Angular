import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto/producto';
import { collectionData, deleteDoc, Firestore, getDoc  } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private firestore:Firestore ) { } 

  agregarProducto(producto:Producto){
    const productoRef = collection(this.firestore, 'productos');
    return addDoc(productoRef, producto);
  }
  obtenerProducto():Observable<Producto[]>{
    const productoRef = collection(this.firestore, 'productos')
    return collectionData(productoRef, {idField:'id'}) as Observable<Producto[]>;
  }
  eliminarProducto( producto : Producto){
    const productoRef = doc(this.firestore, `productos/${producto.id}`)
    return deleteDoc(productoRef);
  } 
  obtenerProductoporID(id:string){
    const productoRef=doc(this.firestore, `productos/${id}`)
   return getDoc(productoRef);
  }

  deletedProducto(Producto: Producto) {
    const productoRef = doc(this.firestore, `productos/${Producto.id}`)
    return deleteDoc(productoRef);
  }




}
