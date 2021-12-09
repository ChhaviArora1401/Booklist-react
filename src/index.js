import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const firstBook = {
  author: 'by William Patrick Martin',
  title: 'The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103',
  img: 'https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81kRsgayVDL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'The Richard Jackson Saga Booklist',
  author: 'by Ed Nelson'
}

function Booklist() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));