var myDataRef = new Firebase('https://meos.firebaseio.com/');
myDataRef.push({name: 'Name', text: 'text'});
myDataRef.on('child_added', function(snapshot) {
  console.log('Test', snapshot)
});