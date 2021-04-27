import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAuthor = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createAuthor = (author) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/authors.json`, author)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthor().then((authorArray) => resolve(authorArray));
        });
    }).catch((err) => reject(err));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/authors/${firebaseKey}.json`)
    .then(() => getAuthor().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (author) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/authors/${author.firebaseKey}.json`, author)
    .then(() => getAuthor().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

export {
  createAuthor, getAuthor, deleteAuthor, updateAuthor
};
