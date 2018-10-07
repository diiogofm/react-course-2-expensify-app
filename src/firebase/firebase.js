import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCUlf9QLBUN9hJzHXf7VcpMcTN872DLap0",
    authDomain: "expensify-95c8f.firebaseapp.com",
    databaseURL: "https://expensify-95c8f.firebaseio.com",
    projectId: "expensify-95c8f",
    storageBucket: "expensify-95c8f.appspot.com",
    messagingSenderId: "692906970060"
  };

  firebase.initializeApp(config);

 const database = firebase.database();

export { firebase, database as default };








/*  database.ref('expenses').once('value').then((snapshot) =>{
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
          expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          });
      });
      console.log(expenses);
  });
 */
/* database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); */

  //Arrays

/* database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 232423423,
    createdAt: 123123123
});
 */




 /*  const notes = [{
      id: '12',
      title: 'Fist title',
      body: 'This is note'
  }, 
  {
    id: '12',
    title: 'Fist title',
    body: 'This is note'
}];

database.ref('notes').set(notes); */



  //get data from database

/*   database.ref().once('value').then((snapshot) =>{
    const val = snapshot.val();
    console.log(val);
  }).catch((e) =>{
    console.log('Error fetching data', e);
  });

  //or

  database.ref().on('value', (snapshot) => {
      console.log(snapshot.val());
  });
 */

/*  database.ref().set({
    name: 'Diogo Magalhães',
    age: 27,
    isSinge: true,
    location: {
        city: 'Lisboa',
        country: 'Portugal'
    }
  }).then(() => {
    console.log('Data is saved!');
  }).catch((e) =>{
    console.log('This failed', e);
  }); */

  //update database. se não tiver a ref, apaga o que tinha antes e define este

/*   database.ref('age').set(27);
  database.ref('location/city').set('New York'); */

  //adicionar novos atributos
 /*  database.ref('attributes').set({
      height: 71,
      weight: 100
  }).then(() => {
      console.log('Second set call worked!');
  }).catch((e) =>{
      console.log('Things didnt for the second error', e);
  })
 */

//REMOVE DATA FROM DATABASE

/* database.ref('isSinge').remove().then(() => {
    console.log('Data was removed');
}).catch((e) => {
    console.log('Did not remove data', e);
}); */

//ou então

// database.ref('isSinge).set(null);


//update
/* database.ref().update({
    name:'Mike',
    age: 29,
    job: 'Consultant',
    'location/city': 'Lisbon'
}); */

