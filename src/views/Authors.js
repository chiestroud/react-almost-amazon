import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/AuthorCard';
import '../App/App.scss';

function Authors({ authors, setAuthors }) {
  return (
    <div className='App'>
      {authors.map((authorInfo) => (
        <AuthorCard key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          first_name={authorInfo.first_name}
          last_name={authorInfo.last_name}
          email={authorInfo.email}
          favorite={authorInfo.favorite}
          setAuthors={setAuthors}
        />
      ))}
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
