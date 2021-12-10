import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books = [
  {
    author: 'by William Patrick Martin',
    title: 'The Mother of All Booklists: The 500 Most Recommended Nonfiction Reads for Ages 3 to 103',
    img: 'https://m.media-amazon.com/images/I/81UoflSDrCL._AC_UY327_FMwebp_QL65_.jpg'
  },
  {
    img: 'https://m.media-amazon.com/images/I/81kRsgayVDL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Richard Jackson Saga Booklist',
    author: 'by Ed Nelson'
  }
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newNames);
function Booklist() {
  return (
    <section className='booklist'>
      {newNames}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));