import React, { useEffect, useState } from 'react'
import { Button, CreatePostsContainer } from '../GlobalStyles'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let navigate = useNavigate();


  const createPost = async () => {

    /* 
      `addDoc` takes 2 arguments 
        1. ref to table being accessed
        2. data which we want to add.
    */


    // creating a ref for addDoc function
    const postsCollectionRefs = collection(db, "posts");

    // let navigate = useNavigate();

    await addDoc(postsCollectionRefs, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });

    navigate('/');
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [])

  console.log(title, content);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (title == '' || content == '') {
      alert('Input fields left empty');
      return;
    } 
    
    createPost();

    setTitle('');
    setContent('');
  }

  return (
    <div>
      CREATE POSTS

      <CreatePostsContainer>
        <h2>Create a post</h2>
        <form onSubmit={formSubmitHandler}>
          <div className="title-section">

            <label>Title </label>
            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div className="content-section">
            <label htmlFor="content">content</label>
            <textarea
              placeholder='post content'
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
            />
          </div>

          <Button>Submit</Button>
        </form>
      </CreatePostsContainer>
    </div>
  )
}

export default CreatePost
