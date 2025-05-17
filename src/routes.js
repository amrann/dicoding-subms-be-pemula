const { addBookHandler, getAllBooksHandler, getBooksDetailHandler, editBooksByIdHandler } = require('./handler');

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
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: editBooksByIdHandler
	},
];

module.exports = routes;