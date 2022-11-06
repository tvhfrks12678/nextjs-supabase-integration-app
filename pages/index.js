import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import supabase from '../utils/supabase';
import NewTodo from '../components/NewTodo';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await supabase.from('todos').select('*');
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <small>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1 className="title">
        Learn <Link href="/posts/first-post">this page!</Link>
      </h1>
      <div className={styles.container}>
        <NewTodo reload={fetchTodos} />
        {todos.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
      <section className={``}></section>
    </Layout>
  );
}
