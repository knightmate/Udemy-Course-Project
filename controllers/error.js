exports.get404 = (req, res, next) => {
  console.log('into error');
  res.status(404).render('404', { 
  pageTitle: 'Page Not Found',
  path: '/404' });
};
