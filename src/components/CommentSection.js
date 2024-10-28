import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { YOUTUBE_COMMENT_API_URL } from '../utils/constants';


const CommentSection = ({vidId}) => {
    // const commentList = [
    //     {
    //         name: "Rishabh Tiwari",
    //         text: "Wow!! bro such a nice video loved it!!",
    //         reply: []
    //     },
    //     {
    //         name: "Priya Sharma",
    //         text: "Great explanation! This really helped me understand the concept.",
    //         reply: [
    //             {
    //                 name: "Amit Patel",
    //                 text: "Yes, totally agree! Very clear and concise.",
    //                 reply: [
    //                     {
    //                         name: "Sonal Agarwal",
    //                         text: "Same here! This video cleared up a lot of confusion.",
    //                         reply: []
    //                     },
    //                     {
    //                         name: "Rajesh Iyer",
    //                         text: "Absolutely, the examples were spot on!",
    //                         reply: [
    //                             {
    //                                 name: "Vikram Choudhary",
    //                                 text: "I even took notes for future reference.",
    //                                 reply: []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 name: "Sana Khan",
    //                 text: "I had the same doubts before watching this!",
    //                 reply: []
    //             }
    //         ]
    //     },
    //     {
    //         name: "Vikas Gupta",
    //         text: "Could you cover more advanced topics in the next video?",
    //         reply: [
    //             {
    //                 name: "Manoj Verma",
    //                 text: "I second that! Would love to see more advanced content.",
    //                 reply: [
    //                     {
    //                         name: "Shreya Desai",
    //                         text: "I agree, especially on the latest technologies.",
    //                         reply: [
    //                             {
    //                                 name: "Neha Kapoor",
    //                                 text: "Yes, particularly in AI and machine learning.",
    //                                 reply: [
    //                                     {
    //                                         name: "Karan Singh",
    //                                         text: "Machine learning would be great to see!",
    //                                         reply: []
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Kavita Singh",
    //         text: "Awesome tutorial! Can you provide some resources for further reading?",
    //         reply: [
    //             {
    //                 name: "Suresh Kumar",
    //                 text: "Check the description, I think they already shared some links.",
    //                 reply: [
    //                     {
    //                         name: "Deepa Yadav",
    //                         text: "There are some great articles on Medium regarding this topic.",
    //                         reply: [
    //                             {
    //                                 name: "Rahul Pandey",
    //                                 text: "Also, StackOverflow has some good threads on this.",
    //                                 reply: []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         name: "Ankit Mehta",
    //         text: "This was super helpful, thanks for uploading!",
    //         reply: [
    //             {
    //                 name: "Ravi Malhotra",
    //                 text: "Glad you found it helpful too!",
    //                 reply: [
    //                     {
    //                         name: "Ajay Singh",
    //                         text: "Same here! Looking forward to the next video.",
    //                         reply: [
    //                             {
    //                                 name: "Simran Kaur",
    //                                 text: "I'm excited for the next one too!",
    //                                 reply: []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];
    const [vidComments, setVidComments] = useState([]);
    // console.log("comment section page:");
    
    
    useEffect(() => {
        const getComments = async() => {
            const data = await fetch(YOUTUBE_COMMENT_API_URL+vidId);
            const json = await data.json();
            // console.log(json.items);
            setVidComments(json.items);
        }
        getComments();
    }, [vidId])

    
    return (
        <div className="p-4">

            {/* <h1 className="text-2xl font-bold mb-6">Comments</h1>
            <div className="space-y-6">
                {commentList.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div> */}
            <h1 className='text-2xl font-bold mb-6'>Comments : </h1>
            <div>
                {vidComments?.map((comment, index) => {
                    return (<Comment key={index} commentData={comment}/>)
                })}
            </div>
        </div>
    );
};

export default CommentSection;
