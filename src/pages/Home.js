import React, { useEffect, useState } from 'react'
import { HomePage } from '../GlobalStyles'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { PostsSection, Post } from '../GlobalStyles';

const Home = () => {

    const [postsList, setPostsList] = useState([]);
    const postsCollectionRef = collection(db, 'posts');



    useEffect(() => {
        const getPosts = async () => {

            /*
                similar to addDocs we have to ref which collection to get documents from.
            */

            const data = await getDocs(postsCollectionRef);

            setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getPosts();
    });

    return (
        <HomePage>
            <PostsSection>
                {
                    postsList.map((post) => {
                        return (
                            <Post>
                                <h2>{post.title}</h2>
                                <h4>{post.content}</h4>
                            </Post>
                        )
                    })
                }
            </PostsSection>
        </HomePage>
    )
}

export default Home;
