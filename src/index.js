import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103',
    author: 'by William Patrick Martin'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81kRsgayVDL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Richard Jackson Saga Booklist',
    author: 'by Ed Nelson'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/814zUtStvQL._AC_UY218_.jpg',
    title: 'They Fight Like Devils: Stories from Lucknow During the Great Mutiny, 1857-1858',
    author: 'by D. A. Kinsley'
  },
  {
    id: 4,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41loJ609dTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'She Erased Her',
    author: 'by Himanshu Rai'
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/I/61kGFiddWHL._AC_UY218_.jpg',
    title: 'When Life tricked me',
    author: 'by Vivek Khanna'
  }
];

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }
  const complexExample = () => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));