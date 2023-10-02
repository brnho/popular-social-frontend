import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import axios from "../axios";
import Pusher from "pusher-js";

const Feed = () => {
    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        console.log("Syncing");
        axios.get("/posts").then((res) => {
            console.log(res);
            setPostsData(res.data);
        });
    };

    useEffect(() => {
        /*
        const pusher = new Pusher("83488526a6fabbdc69b", {
            cluster: "us3",
        });
        */
        var pusher = new Pusher("b05a2aebe41bbe9b58dc", {
            cluster: "us2",
        });
        const channel = pusher.subscribe("posts");
        channel.bind("inserted", (data) => {
            console.log("hello");
            syncFeed();
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    useEffect(() => {
        syncFeed();
    }, []);

    return (
        <FeedWrapper>
            <Stories />
            <Messenger />
            {postsData.map((entry, i) => (
                <Post
                    key={i}
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            ))}
            {/*
                <>
                    <Post
                        profilePic="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
                        message="Awesome post on CSS Animation. Loved it"
                        timestamp="1609512232424"
                        imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1598295332/CSS_Animation_xrvhai.png"
                        username="Brian"
                    />
                    <Post
                        profilePic="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
                        message="BookList app in Vanilla JavaScript"
                        timestamp="1509512232424"
                        imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1609138312/Booklist-es6_sawxbc.png"
                        username="TWD"
                    />
                </>
                */}
        </FeedWrapper>
    );
};
const FeedWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default Feed;
