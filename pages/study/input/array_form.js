import { useState } from 'react';

export default function ArrayForm() {
  const [blogList, setBlogList] = useState(['aa']);

  const onBlogChanged = (e, formIndex) => {
    const newBlogList = blogList.map((blog, index) =>
      index === formIndex ? e.target.value : blog
    );
    // const newBlogList = blogList.map((blog, index) => {
    //   if (index === formIndex) {
    //     return (blog = e.target.value);
    //   }
    //   return blog;
    // });
    setBlogList(newBlogList);
  };

  const onAddBlogClicked = () => setBlogList([...blogList, 'new']);
  // const onAddBlogClicked = () => {
  //   setBlogList([...blogList, 'new']);
  // };

  return (
    <>
      <div>ArrayForm</div>
      {blogList.map((blog, formIndex) => (
        <div>
          <input
            type="text"
            value={blogList[formIndex]}
            onChange={(e) => onBlogChanged(e, formIndex)}
            key={formIndex}
          />
        </div>
      ))}
      <button type="button" onClick={onAddBlogClicked}>
        追加
      </button>
    </>
  );
}
