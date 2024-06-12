import { booksData } from '../data/books';

const populateBooks = () => {
  const books = [];

  for(const index in booksData){
    books.push({ ...booksData[index], id: +(parseInt(index) + 1) });
  }

  return books;
};

export const resolvers = {
  Query: {
    books: () => populateBooks(),
  },
};
