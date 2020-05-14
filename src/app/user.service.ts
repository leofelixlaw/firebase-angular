import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}
  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  deleteUsers(userId: string){
    this.firestore.doc('users/' + userId).delete();
  }
  postUser(user: User){
    return this.firestore.collection('users').add(user);
  }
  updateUser(user: User, id: any){
    this.firestore.doc('users/' + id).update(user);
  }
}
