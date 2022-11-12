import { useState } from 'react';

export default function Form() {
  const [title, setTitle] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);

  const onSaveBookClicked = () => console.log(`タイトルは${title}です`);
  // const onSaveBookClicked = () => {
  //   console.log(`タイトルは${title}です`);
  // };

  return (
    <>
      <label htmlFor="bookTitle">Book Title:</label>
      <input
        type="text"
        id="bookTitle"
        name="bookTitle"
        value={title}
        onChange={onTitleChanged}
      />
      <button type="button" onClick={onSaveBookClicked}>
        Save Post
      </button>
    </>
  );
}
