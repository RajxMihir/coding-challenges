const books = [
    {title: 'Book 1', author: 'john doe', year: 2005},
    {title: 'Book 2', author: 'jane smith', year: 2012},
    {title: 'Book 3', author: 'joe schmoe', year: 2009},
    {title: 'Book 4', author: 'alice wonderland', year: 2015},
    {title: 'Book 5', author: 'bob builder', year: 2008},
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010);
  
  const booksWithCapitalizedAuthor = filteredBooks.map(book => {
    return {
      title: book.title,
      author: book.author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' '),
      year: book.year,
    };
  });
  
  console.log(booksWithCapitalizedAuthor);
  