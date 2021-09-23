const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const express = require('express');
const app = express();

const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

const partialDir = path.join(__dirname, './views/partials');
app.set('view engine', 'hbs');
hbs.registerPartials(partialDir);

app.get('/', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('index', { ...dataJson, title: 'Home' });
});

app.get('/about', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('about', { ...dataJson, title: 'about us' });
});

app.get('/menu', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('menu', { ...dataJson, title: 'menu' });
});

app.get('/blog', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('blog', { ...dataJson, title: 'blog' });
});

app.get('/gallery', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('gallery', { ...dataJson, title: 'gallery' });
});

app.get('/contact', (req, res) => {
  const data = fs.readFileSync('./public/data/data.json', 'utf-8');
  const dataJson = JSON.parse(data);
  res.render('contact', { ...dataJson, title: 'contact' });
});

app.listen(3000, () => {
  console.log('its running on port 3000');
});
