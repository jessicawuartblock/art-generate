const express = require('express');
const handlebars = require('express-handlebars');
const utils = require('./utils');
const md = require('markdown-it')();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
  }),
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  const readme = md.render(utils.getReadme());

  res.render('main', {
    ...utils.getNavAttributes(),
    readme
  });
});

app.get('/:route', (req, res) => {
  const query = req.query;
  console.log(query['tokenId']);
  res.render('piece', {
    ...utils.getNavAttributes(),
    scriptName: `${req.params.route}.js`,
    // tokenId: query['tokenId'],
    hash: query['hash'] + '',
      // hash: '0x838473ca4a7617806b0fb97c9cdcb7c2047bed85e0031dd270c450f11eb51cc5'
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
