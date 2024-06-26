let books = [
    {
        id: 0,
        title: "Harry Potter à l'école des sorciers",
        release_year: 1997
    },
    {
        id: 1,
        title: "Harry Potter et la Chambre des secrets",
        release_year: 1998
    },
    {
        id: 2,
        title: "Harry Potter et le Prisonnier d'Azkaban",
        release_year: 1999
    },
    {
        id: 3,
        title: "Harry Potter et la Coupe de feu",
        release_year: 2000
    },
    {
        id: 4,
        title: "Harry Potter et l'Ordre du phénix",
        release_year: 2003
    },
    {
        id: 5,
        title: "Harry Potter et le Prince de sang-mêlé",
        release_year: 2005
    },
    {
        id: 6,
        title: "Harry Potter et les Reliques de la Mort",
        release_year: 2007
    }
]

exports.getBooks = () => {
    return books;
}

exports.getBookById = (id) => {
    return books.find((book) => book.id === id);
}

exports.addBook = (title, release_year) => {
    books.push({
        id: books.length,
        title,
        release_year
    });
}

exports.deleteBookById = (id) => {
    books.splice(books.findIndex(book => book.id === id), 1);
}