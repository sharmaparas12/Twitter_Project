import Hashtag from '../model/hashtag.js';



class Hashtagrepository {

    async create(data)
    {
        try {
            const hashtag=await Hashtag.create(data);
            return hashtag;
            
        } catch (error) {
            console.log("error in hashtag repo");
            throw {error};
            
        }
    }
    async bulkcreate(data)
    {
        try {
            console.log(data); 
            const hashtags=await Hashtag.insertMany(data);
            return hashtags;
            
        } catch (error) {
            console.log("error in hashtag repo");
            throw {error};
            
        }
    }
    async get(id)
    {
        try {
            const hashtag=await Hashtag.findById(id);
            return hashtag;
            
        } catch (error) {
            console.log("error in hashtag repo");
            throw {error};
            
        }
    }
    async destroy(id)
    {
        try {
            const hashtag=await Hashtag.findByIdAndDelete(id);
            return hashtag;
            
        } catch (error) {
            console.log("error in hashtag repo");
            throw {error};
            
        }
    }
    async findbynames(data){
        try {
            const response=await Hashtag.find({title:data});
            return response;
            
        } catch (error) {
            console.log("error in hashtag repo");
            throw {error};
            
        }
    }

}

export default Hashtagrepository;