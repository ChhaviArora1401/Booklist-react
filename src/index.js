import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103',
    author: 'by William Patrick Martin'
  },
  {
    img: 'https://m.media-amazon.com/images/I/81kRsgayVDL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Richard Jackson Saga Booklist',
    author: 'by Ed Nelson'
  },
  {
    img: 'https://m.media-amazon.com/images/I/814zUtStvQL._AC_UY218_.jpg',
    title: 'They Fight Like Devils: Stories from Lucknow During the Great Mutiny, 1857-1858',
    author: 'by D. A. Kinsley'
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41loJ609dTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'She Erased Her',
    author: 'by Himanshu Rai'
  },
  {
    img: 'https://m.media-amazon.com/images/I/61kGFiddWHL._AC_UY218_.jpg',
    title: 'When Life tricked me',
    author: 'by Vivek Khanna'
  }
];


function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return (
          <Book book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));