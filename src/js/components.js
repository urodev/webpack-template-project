import '../css/components.css';
// import webpacklogo from '../assets/imgs/webpack-logo.png';
export const sayHello = (name) => {
  console.log('Creating H1 tag');
  const h1 = document.createElement('h1');
  h1.innerText = `Hi ${name}!`;
  document.body.append(h1);
  // const img = document.createElement('img');
  // img.src = webpacklogo;
  // document.body.append(img);
}