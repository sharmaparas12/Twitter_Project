import {Tweetrepository,Hashtagrepository} from '../repository/index.js';


class Tweetservice {

    constructor(){
        this.tweetrepository=new Tweetrepository();
        this.hashtagrepository=new Hashtagrepository();
    }
    async create(data) {
        const content=data.content;
        var tags=content.match(/#[a-zA-Z0-9_]+/g);
        if(tags)
        tags=tags.map((tag) =>tag.substring(1));
        const tweet=await this.tweetrepository.create(data);
        if(tags){
        var presenttags=await this.hashtagrepository.findbynames(tags);
        var alreadypresenttags=presenttags.map(tags => tags.title);
        var tagstocreate=tags.filter(tag => !alreadypresenttags.includes(tag));
        tagstocreate=tagstocreate.map(tag => {
            return {title:tag,tweets:[tweet.id]};
        });
        const response=await this.hashtagrepository.bulkcreate(tagstocreate);
    

        presenttags.forEach((tag) =>{

            tag.tweets.push((tweet.id));
            tag.save();
        });
    }
        return tweet;

    }
    

    


}


export default Tweetservice;