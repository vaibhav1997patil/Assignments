function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  const promise1 = delay(2000).then(() => {
    console.log('Promise 1 resolved');
    return 'Hello';
  });
  
  const promise2 = delay(3000).then(() => {
    console.log('Promise 2 resolved');
    return 'World';
  });
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log('All promises resolved');
      console.log(results);                  // ["Hello", "World"]
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
  