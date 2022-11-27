import { useEffect, useState } from 'react';
import axios from 'axios';

export const DisplayIndex = () => {
  const [title, setTitle] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const itemList = [
    { id: 1, name: 'pen', price: 300 },
    { id: 2, name: 'apple', price: 100 },
    { id: 3, name: 'note', price: 200 },
  ];
  const item = { id: 1, name: 'pen', price: 300 };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(function (response) {
        console.log(response);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const clickedButton = () => {};

  return (
    <>
      <div>DisplayIndex</div>
      <div>{item.name}</div>
      {itemList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};
