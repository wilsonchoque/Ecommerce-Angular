import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor( private firestore:Firestore ) { }
  //funciones
 /* agregarPedido([{uid, idpro, nombre,imagen,fechareg,costo,oferta,total}]:any){
    const usuarioRef = collection(this.firestore, 'pedidos');
    return addDoc(usuarioRef,[{uid, idpro, nombre,imagen,fechareg,costo,oferta,total}] );
  }
  */
}
