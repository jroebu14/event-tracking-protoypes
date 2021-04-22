const sendEventToAti = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('EVENT SENT!');
      resolve();
    }, 4000);
  });

export default sendEventToAti;
