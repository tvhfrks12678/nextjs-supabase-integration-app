import { useEffect } from 'react';
import { useState } from 'react';

export default function State() {
  const [list, setList] = useState([
    { name: 1, age: 2 },
    { name: 3, age: 4 },
  ]);

  console.log(list);

  const [state, setState] = useState({
    name: '',
    pass: '',
  });

  useEffect(() => {
    let newList = list;
    newList[0] = { name: 4, age: 5 };
    setList(newList);
    const changeList = list.map((x, i) => (i === 0 ? { name: 7, age: 9 } : x));
    console.log('////////////');
    console.log(changeList);
    setList(changeList);
    setState({ ...state, name: '111' });
  }, []);

  console.log(state);
  return (
    <>
      <div>StateStudy</div>
    </>
  );
}
