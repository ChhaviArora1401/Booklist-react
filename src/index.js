import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'by William Patrick Martin';
const Book = () => {
  const title = 'The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103';
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p> {let x = 6}</p> error */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));