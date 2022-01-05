import {useRouter} from "next/router";
import styles from '../../styles/post.module.scss';
import MainContainer from "../../components/MainContainer";

export default function Post({post}) {
    const {query} = useRouter()
  




    return (
        <MainContainer keywords={post.id}>
            <div className={styles.box}>
                
                <img className={styles.image} src="https://www.jotform.com/blog/wp-content/uploads/2019/08/small-business-blogs-to-read-7063e8-2.png"></img>
                <div className={styles.title}> {post.title}</div>
                <div className={styles.body}> {post.body}</div>

                
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await response.json();

    return {
        props: {post}, 
    }
}
