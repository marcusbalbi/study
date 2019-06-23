import firebase from 'firebase'
import uuid from 'uuid'

var firebaseConfig = {
    apiKey: "AIzaSyC_LUgxe-dJLN1qAsKkdirTGHHqVcxRVGI",
    authDomain: "expenses-dd3ec.firebaseapp.com",
    databaseURL: "https://expenses-dd3ec.firebaseio.com",
    projectId: "expenses-dd3ec",
    storageBucket: "expenses-dd3ec.appspot.com",
    messagingSenderId: "258387353223",
    appId: "1:258387353223:web:0bfbf1db05f5d040"
  };  
let app = firebase.initializeApp(firebaseConfig);


let despesas = {}

despesas[uuid.v4()] = { desc: 'TESTE', value: 12.2 }
despesas[uuid.v4()] = { desc: 'TESTES', value: 12.5 }

firebase.database(app).ref('despesas').set(despesas)

let keys = Object.keys(despesas)

firebase.database(app).ref('despesas/' + keys[0] + '/desc').set('Isabela deve muito')

console.log(firebase.database(app).ref('despesas'))
