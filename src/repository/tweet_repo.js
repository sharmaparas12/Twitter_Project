import Tweet from '../model/tweet.js';

class Tweetrepository {

    async create(data)
    {
        try {

            const response=await Tweet.create(data);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }

    async destroy(tweet_id)
    {
        try {

            const response=await Tweet.findByIdAndDelete(tweet_id);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }



   


}

export default Tweetrepository;












