import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createAuthor, updateAuthor } from './helpers/data/AuthorData';

const AuthorForm = ({
  formTitle,
  firebaseKey,
  // eslint-disable-next-line camelcase
  first_name,
  // eslint-disable-next-line camelcase
  last_name,
  email,
  favorite,
  setAuthors
}) => {
  const [author, setAuthor] = useState({
    firebaseKey: firebaseKey || null,
    // eslint-disable-next-line camelcase
    first_name: first_name || '',
    // eslint-disable-next-line camelcase
    last_name: last_name || '',
    email: email || '',
    favorite: favorite || false
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      createAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <>
      <div className='author-form'>
        <form
          id='addStudentForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>First Name: </label>
          <input
            name='first_name'
            type='text'
            placeholder='First Name'
            value={author.first_name}
            onChange={handleInputChange}
          ></input>
          <label>Last Name: </label>
          <input
            name='last_name'
            type='text'
            placeholder='Last Name'
            value={author.last_name}
            onChange={handleInputChange}
          ></input>
          <label>Email: </label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={author.email}
            onChange={handleInputChange}
          ></input>
          <div className="form-check">
            <input
              name='favorite'
              type="checkbox"
              id="favorite"
              checked={author.favorite}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Favorite Author?</label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string,
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool
};

export default AuthorForm;
