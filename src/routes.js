const { addBookHandler, getAllBooksHandler, getBooksDetailHandler } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookHandler,
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBooksHandler
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: getBooksDetailHandler
	},
];

module.exports = routes;