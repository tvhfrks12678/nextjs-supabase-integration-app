import { useState } from 'react';

export default function ArrayInAssocistiveArrayForm() {
  const [blogList, setBlogList] = useState([
    { title: 'react tutorial', author: 'yamada' },
    { title: 'vue tutorial', author: 'suzuki' },
  ]);

  const onTitleChanged = (e, formIndex) => {
    const newBlogList = blogList.map((blog, index) => {
      if (index === formIndex) {
        blog.title = e.target.value;
        return blog;
      }
      return blog;
    });
    setBlogList(newBlogList);
  };

  const onAddBlogClicked = () => {
    setBlogList([...blogList, { title: '', author: '' }]);
  };

  const onDeleteBlogClicked = (e, formIndex) => {
    const newBlogList = blogList.filter((blog, index) => index !== formIndex);
    // const newBlogList = blogList.filter((blog, index) => {
    //   return index !== formIndex;
    // });
    setBlogList(newBlogList);
  };

  return (
    <>
      <div>ArrayInAssocistiveArrayForm</div>
      {blogList.map((blog, formIndex) => {
        return (
          <>
            <input
              type="text"
              key={formIndex}
              value={blog.title}
              onChange={(e) => onTitleChanged(e, formIndex)}
            />
            <button onClick={(e) => onDeleteBlogClicked(e, formIndex)}>
              削除
            </button>
            <br></br>
          </>
        );
      })}
      <button onClick={onAddBlogClicked}>追加</button>
    </>
  );
}
