import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../AuthorForm';

const AddAuthor = ({ setAuthors }) => (
  <div>
    <h1>Add A Great Author</h1>
    <AuthorForm
        setAuthors={setAuthors}/>
      <hr />
  </div>
);

AddAuthor.propTypes = {
  setAuthors: PropTypes.func.isRequired
};

export default AddAuthor;
