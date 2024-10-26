import express from 'express';
import articles from '../data/articles.js';
import side_tabs from '../data/side-tabs.js';
import side_tabs_content from '../data/side-tabs-content.js';
import top_tabs from '../data/top-tabs.js';
import top_tabs_content from '../data/top-tabs-content.js';

let article_id = 3;

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Product Listing', articles: articles, side_tabs: side_tabs, side_tabs_content: side_tabs_content, top_tabs: top_tabs, top_tabs_content: top_tabs_content});
});

router.get('/articles/:id', (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));

  res.render('article', {title: article.name, article: article});
});

router.get('/side_tabs/:id', (req, res) => {
  const tab = side_tabs_content.find((a) => a.id === parseInt(req.params.id));

  res.render('side-tabs-content', {title: tab.body[0], tab: tab});
});

router.get('/top_tabs/:id', (req, res) => {
  const tab = top_tabs_content.find((a) => a.id === parseInt(req.params.id));

  res.render('top-tabs-content', {title: tab.body[0], tab: tab});
});

router.post('/articles', (req, res) => {
  const name = req.body.name;
  const body = req.body.body;

  const id = (article_id + 1);
  article_id += 1;

  const article = {
    id: id,
    name,
    body
  };

  articles.push(article);

  res.render('partials/list', {articles: articles});
});

export default router;

