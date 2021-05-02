import {useEffect, useState} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import {useRouter} from "next/router";
import CircularIndeterminate from "../loading/loading";
import CustomizedSnackbars from "../ui/successAlert";

function Comments(props) {
  const router=useRouter()
  const { eventId } = props;
  const [comments,setcomments]=useState([])
  const [showComments, setShowComments] = useState(false);
  const [check,setcheck]=useState(false)
  useEffect(()=>{
        const interval = setInterval(() => {
           fetch('/api/comments/'+eventId).then((response)=>response.json()).then((data)=>{
      setcomments(data)
      })

  }, 1000);

    },[])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
    
  }

  function addCommentHandler(commentData) {
    fetch('/api/comments/'+eventId,{
      method:'POST',
      body:JSON.stringify(commentData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((response)=>(setcheck(true)))
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>

        {showComments ? 'Hide' : 'Show'} Comments
      </button>

      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
      <CustomizedSnackbars open={check} message={'Comment Added'}/>

    </section>
  );
}

export default Comments;
