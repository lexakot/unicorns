import start from './src/app';

(async () => {
  try {
    await start();
  } catch (error) {
    console.log(error);
  }
})();
