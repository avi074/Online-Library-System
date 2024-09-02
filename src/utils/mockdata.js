/**
 * @typedef {Object} BookDetails
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {number} rating - Book's current rating.
 * @property {string} image - Book's cover image url.
 * @property {string} description - The description of the book.
 * @property {string[]} category - Categories of the book.
 */

/**
 * @typedef {{[isbn:string]: BookDetails}} BookCollection
 *
 * A collection of books where each key is a `isbn`(International Standard Book Number)
 * and the value is an object containing the book details.
 */

/** @type {BookCollection} books */
export const booksObj = {
  "978-1503290563": {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.25,
    image: "https://m.media-amazon.com/images/I/51tiK-eB3JL._SY780_.jpg",
    description:
      "A classic novel of manners that depicts the emotional development of the protagonist, Elizabeth Bennet, who learns the error of making hasty judgments.",
    category: ["Classic", "Romance"],
  },
  "978-0547928227": {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.27,
    image: "https://img.bookchor.com/images/cover/580/9780007487288.jpg",
    description:
      "A fantasy novel that follows the journey of Bilbo Baggins, a hobbit who is drawn into an epic quest to help a group of dwarves reclaim their home from the dragon Smaug.",
    category: ["Fantasy", "Classic"],
  },
  "978-0060935467": {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.27,
    image: "https://m.media-amazon.com/images/I/71smIoGNeiL._SY425_.jpg",
    description:
      "A novel set in the 1930s American South, focusing on themes of racial injustice and moral growth through the eyes of young Scout Finch.",
    category: ["Classic", "Historical"],
  },
  "978-0441013593": {
    title: "Dune",
    author: "Frank Herbert",
    rating: 4.21,
    image: "https://m.media-amazon.com/images/I/41KnOXaLyuL._SY445_SX342_.jpg",
    description:
      "A science fiction epic set in a distant future where noble families vie for control of the desert planet Arrakis and its precious spice, melange.",
    category: ["Science Fiction", "Fantasy"],
  },
  "978-0441569595": {
    title: "Neuromancer",
    author: "William Gibson",
    rating: 4.16,
    image: "https://m.media-amazon.com/images/I/81m-rJnUdRL._AC_UY218_.jpg",
    description:
      "A groundbreaking science fiction novel that explores themes of artificial intelligence, cyberspace, and virtual reality.",
    category: ["Science Fiction", "Cyberpunk"],
  },
  "978-0307454546": {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    rating: 4.12,
    image: "https://m.media-amazon.com/images/I/81YW99XIpJL._AC_UY218_.jpg",
    description:
      "A gripping mystery involving a journalist and a hacker who investigate a decades-old disappearance of a young girl from a powerful family.",
    category: ["Mystery", "Thriller"],
  },
  "978-0307588371": {
    title: "Gone Girl",
    author: "Gillian Flynn",
    rating: 4.06,
    image: "https://m.media-amazon.com/images/I/61Sx28fdUoL._AC_UY218_.jpg",
    description:
      "A psychological thriller about a woman who goes missing and the subsequent investigation that reveals dark secrets about her marriage.",
    category: ["Thriller", "Mystery"],
  },
  "978-0385121675": {
    title: "The Shining",
    author: "Stephen King",
    rating: 4.25,
    image: "https://m.media-amazon.com/images/I/81zqohMOk-L._AC_UY218_.jpg",
    description:
      "A horror novel that follows the story of a family who becomes isolated in a haunted hotel during the winter, leading to terrifying events.",
    category: ["Horror", "Thriller"],
  },
  "978-0143039983": {
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    rating: 4.05,
    image: "https://m.media-amazon.com/images/I/81-PKwy-mPL._AC_UY218_.jpg",
    description:
      "A classic horror novel about a group of people who stay in a supposedly haunted house and experience disturbing phenomena.",
    category: ["Horror", "Classic"],
  },
  "978-0062316097": {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    rating: 4.43,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY218_.jpg",
    description:
      "A non-fiction book that explores the history of humankind from the emergence of Homo sapiens to the present day, offering insights into human society and culture.",
    category: ["Non-Fiction", "Historical"],
  },
  "978-0399590504": {
    title: "Educated",
    author: "Tara Westover",
    rating: 4.47,
    image: "https://m.media-amazon.com/images/I/71N2HZwRo3L._AC_UY218_.jpg",
    description:
      "A memoir about a woman who grows up in a strict and abusive household in rural Idaho and eventually escapes to pursue an education.",
    category: ["Non-Fiction", "Memoir"],
  },
  "978-0525478812": {
    title: "The Fault in Our Stars",
    author: "John Green",
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/817tHNcyAgL._AC_UY218_.jpg",
    description:
      "A young adult novel about two teenagers with cancer who fall in love and navigate their illness while exploring themes of mortality and meaning.",
    category: ["Young Adult", "Romance"],
  },
  "978-0439023481": {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    rating: 4.32,
    image: "https://m.media-amazon.com/images/I/81zlHaEBHaS._AC_UY218_.jpg",
    description:
      "A dystopian novel set in a future where children are chosen to participate in a televised death match, and one girl's fight for survival and justice.",
    category: ["Young Adult", "Dystopian"],
  },
  "978-0544336261": {
    title: "The Giver",
    author: "Lois Lowry",
    rating: 4.12,
    image: "https://m.media-amazon.com/images/I/618x0bQBWkL._AC_UY218_.jpg",
    description:
      "A dystopian novel about a society that has eliminated pain and suffering by converting to 'Sameness,' a plan that has also eradicated emotional depth from their lives.",
    category: ["Young Adult", "Dystopian"],
  },
  "978-0316769488": {
    title: "Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 3.8,
    image: "https://m.media-amazon.com/images/I/7108sdEUEGL._AC_UY218_.jpg",
    description:
      "A novel about a disenchanted teenager, Holden Caulfield, who struggles with his transition into adulthood while narrating his journey through New York City.",
    category: ["Classic", "Young Adult"],
  },
  "978-0374332881": {
    title: "The Goldfinch",
    author: "Donna Tartt",
    rating: 3.86,
    image: "https://m.media-amazon.com/images/I/71NLqZuPLsL._AC_UY218_.jpg",
    description:
      "A novel about a young boy who survives an explosion at an art museum and steals a priceless painting, leading to a turbulent life filled with dark twists.",
    category: ["Classic", "Historical"],
  },
  "978-0143133150": {
    title: "The Immortalists",
    author: "Chloe Benjamin",
    rating: 4.03,
    image: "https://m.media-amazon.com/images/I/81ultKZbg7L._AC_UY218_.jpg",
    description:
      "A novel that follows four siblings who, after visiting a fortune teller who predicts their dates of death, struggle with the knowledge and the impact it has on their lives.",
    category: ["Historical", "Fiction"],
  },
}

/**
 * @type {{[categName: string] : [bookISBN:string[]]}} category
 *  
 * Category collection of books with their respective isbns'
 */
export const categoryObj = {
  Classic: [
    "978-1503290563", // Pride and Prejudice
    "978-0547928227", // The Hobbit
    "978-0060935467", // To Kill a Mockingbird
    "978-0316769488", // Catcher in the Rye
    "978-0374332881", // The Goldfinch
  ],
  Romance: [
    "978-1503290563", // Pride and Prejudice
    "978-0525478812", // The Fault in Our Stars
  ],
  Fantasy: [
    "978-0547928227", // The Hobbit
  ],
  Historical: [
    "978-0060935467", // To Kill a Mockingbird
    "978-0062316097", // Sapiens: A Brief History of Humankind
    "978-0374332881", // The Goldfinch
    "978-0143133150", // The Immortalists
  ],
  "Science Fiction": [
    "978-0441013593", // Dune
    "978-0441569595", // Neuromancer
  ],
  Cyberpunk: [
    "978-0441569595", // Neuromancer
  ],
  Mystery: [
    "978-0307454546", // The Girl with the Dragon Tattoo
    "978-0307588371", // Gone Girl
  ],
  Thriller: [
    "978-0307588371", // Gone Girl
    "978-0385121675", // The Shining
  ],
  Horror: [
    "978-0385121675", // The Shining
    "978-0143039983", // The Haunting of Hill House
  ],
  "Non-Fiction": [
    "978-0062316097", // Sapiens: A Brief History of Humankind
    "978-0399590504", // Educated
  ],
  Memoir: [
    "978-0399590504", // Educated
  ],
  "Young Adult": [
    "978-0525478812", // The Fault in Our Stars
    "978-0439023481", // The Hunger Games
    "978-0544336261", // The Giver
  ],
  Dystopian: [
    "978-0439023481", // The Hunger Games
    "978-0544336261", // The Giver
    "978-0143133150", // The Immortalists
  ],
}
