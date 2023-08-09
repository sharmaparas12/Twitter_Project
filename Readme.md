# Requirements

1. Should be able to post new tweets (can be text, image).
   1.1: Video can be uploaded in a similar way as an image.
   
2. Should be able to like and comment on the tweets.

3. Tweets with hashtags should be added to corresponding hashtags.

4. Should be able to follow other users.

5. Should have a newsfeed feature consisting of tweets from the people the user is following.

6. Should be able to search tweets.
   6.1: Based on hashtags.

# API End Points

1. POST 

    1.`/api/v1/tweets`
       - In the body, accepts content-text with #tags.

    2.'/api/vi/tweets/likes
       -Toggles a like on the tweet or comment
    
    3.'/api/v1/comment
       -To comment on a tweet
       -To comment on a comment
       -Accepts text to comment on the tweet

    


