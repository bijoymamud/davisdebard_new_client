


// const books = [
//   {
//     id: 1,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A story of wealth, love, and the American Dream in the 1920s.",
//   },
//   {
//     id: 2,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A powerful story of racial injustice and moral growth in the American South.",
//   },
//   {
//     id: 3,
//     title: "1984",
//     author: "George Orwell",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A dystopian novel about totalitarianism, surveillance, and thought control.",
//   },
//   {
//     id: 4,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A romantic novel of manners set in early 19th-century England.",
//   },
//   {
//     id: 5,
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A fantasy novel about the adventures of Bilbo Baggins.",
//   },
//   {
//     id: 6,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "The first book in the Harry Potter series about a young wizard.",
//   },
//   {
//     id: 7,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A novel about teenage alienation and loss of innocence.",
//   },
//   {
//     id: 8,
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "An epic high-fantasy novel set in Middle-earth.",
//   },
//   {
//     id: 9,
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A dystopian novel about a futuristic World State and its citizens.",
//   },
//   {
//     id: 10,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     coverImage: "/placeholder.svg?height=300&width=200",
//     description: "A philosophical novel about following your dreams.",
//   },
// ]

// export default function Books() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">My Book Collection</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {books.map((book) => (
//           <div
//             key={book.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="relative h-64 w-full">
//               <img
//                 src={book.coverImage || "/placeholder.svg"}
//                 alt={`Cover of ${book.title}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="font-bold text-lg line-clamp-1">{book.title}</h2>
//               <p className="text-gray-600 text-sm mb-2">{book.author}</p>
//               <p className="text-gray-500 text-xs line-clamp-2">{book.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



import React, { useState } from 'react';
import { Search, BookOpen, ChevronDown } from 'lucide-react';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description: "A story of wealth, love, and the American Dream in the 1920s.",
    genre: "Classic"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
    description: "A powerful story of racial injustice and moral growth in the American South.",
    genre: "Classic"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
    description: "A dystopian novel about totalitarianism, surveillance, and thought control.",
    genre: "Science Fiction"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description: "A romantic novel of manners set in early 19th-century England.",
    genre: "Romance"
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage: "https://bookowlsbd.com/cdn/shop/files/224_970aa38f-7342-48e2-94d3-1129bfb51456.png?v=1728936027?auto=format&fit=crop&w=800&q=80",
    description: "A fantasy novel about the adventures of Bilbo Baggins.",
    genre: "Fantasy"
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description: "The first book in the Harry Potter series about a young wizard.",
    genre: "Fantasy"
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
    description: "A novel about teenage alienation and loss of innocence.",
    genre: "Classic"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg?auto=format&fit=crop&w=800&q=80",
    description: "An epic high-fantasy novel set in Middle-earth.",
    genre: "Fantasy"
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
    description: "A dystopian novel about a futuristic World State and its citizens.",
    genre: "Science Fiction"
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description: "A philosophical novel about following your dreams.",
    genre: "Philosophy"
  },
];

function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [hoveredBook, setHoveredBook] = useState(null);

  const genres = ['All', ...Array.from(new Set(books.map(book => book.genre)))];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
 <section className="bg-[#FDFBF5] md:py-10 py-5 px-3 md:px-20"> 
       <div>
      <div className="container mx-auto px-4 md:py-12 py-8d">
        <div className="flex flex-col items-center justify-center md:mb-20">
          <img src="" alt="" />
          <h1 className="text-4xl font-bold text-gray-800">Curated Pages: A Personal Library</h1>
          <p className='mt-2 font-medium text-gray-800'>A Collection of Stories, Knowledge, and Inspiration</p>
        </div>

        <div className="flex justify-end md:flex-row md:gap-4 gap-2 md:mb-8 my-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="relative h-72">
                <img
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex items-center justify-center p-4 ${hoveredBook === book.id ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white text-sm text-center">{book.description}</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                  {book.genre}
                </div>
                <h2 className="font-bold text-lg text-gray-800 line-clamp-1 mb-1">{book.title}</h2>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No books found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
 </section>
  );
}

export default Books;