import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
);
const Title = () => <h1>The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103 </h1>;
const Author = () => <h4> by William Patrick Martin</h4>;

ReactDOM.render(<Booklist />, document.getElementById('root'));