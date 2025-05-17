const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
	const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

	if (!name || name.trim() === '') {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. Mohon isi nama buku'
		});
		response.code(400);
		return response;
	}

	if (readPage > pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
		});
		response.code(400);
		return response;
	}

	const id = nanoid(16);
	const insertAt = new Date().toISOString();
	const updateAt = insertAt;
	const finished = pageCount === readPage ? true : false;

	const newBook = {
		id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertAt, updateAt
	};

	books.push(newBook);

	const isSuccess = books.filter((book) => book.id === id).length > 0;

	if (isSuccess) {
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil ditambahkan',
			data: {
				bookId: id
			}
		});
		response.code(201);
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Gagal menambahkan buku'
	});
	response.code(500);
	return response;
};

const getAllBooksHandler = (request, h) => {
	const response = h.response({
		status: 'success',
		data: {
			books: books.map((book) => ({
				id: book.id,
				name: book.name,
				publisher: book.publisher
			}))
		}
	});
	response.code(200);
	return response;
};

const getBooksDetailHandler = (request, h) => {
	const { bookId } = request.params;
	const book = books.filter((dt) => dt.id === bookId)[0];

	if (book !== undefined) {
		const response = h.response({
			status: 'success',
			data: {
				book,
			}
		});
		response.code(200);
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Buku tidak ditemukan'
	});
	response.code(404);
	return response;
};


const editBooksByIdHandler = (request, h) => {
	const { bookId } = request.params;
	const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
	const idx = books.findIndex((dt) => dt.id === bookId);

	if (idx === -1) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. Id tidak ditemukan'
		});
		response.code(404);
		return response;
	}

	if (!name || name.trim() === '') {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. Mohon isi nama buku'
		});
		response.code(400);
		return response;
	}

	if (readPage > pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
		});
		response.code(400);
		return response;
	}

	const updateAt = new Date().toISOString();
	const finished = pageCount === readPage ? true : false;

	if (idx !== -1) {
		books[idx] = {
			...books[idx], name, year, author, summary, publisher, pageCount, readPage, finished, reading, updateAt
		};
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil diperbarui'
		});
		response.code(200);
		return response;
	}

	const response = h.response({
		status: 'fail',
		message: 'Gagal memperbarui buku'
	});
	response.code(500);
	return response;
};

module.exports = { addBookHandler, getAllBooksHandler, getBooksDetailHandler, editBooksByIdHandler };