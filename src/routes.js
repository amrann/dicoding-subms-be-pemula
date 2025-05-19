const {
	addBookHandler,
	getBooksHandler,
	getBooksDetailHandler,
	editBooksByIdHandler,
	deleteBooksByIdHandler,
} = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookHandler
	},
	{
		method: 'GET',
		path: '/books',
		handler: getBooksHandler
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
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: deleteBooksByIdHandler
	}
];

module.exports = routes;