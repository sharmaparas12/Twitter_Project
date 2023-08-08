import { Tweetrepository,Likerepository } from "../repository/index.js";
class LikeService{
    constructor()
    {
        this.tweetrepository=new Tweetrepository();
        this.likerepository=new Likerepository();
    }

    async togglelike(modelId,modelType,userId){

        try {
            if(modelType=='Tweet'){
                var likeable=await this.tweetrepository.find(modelId);
                

            }
            else if(modelType=='Comment'){

            }
            else{
                throw new Error('unknow model type');
            }
            const exists=await this.likerepository.findByUserAndLikable({
                User:userId,
                onModel:modelType,
                likeable:modelId

            });
            if(exists){ 
            
                likeable.likes.pull(exists.id);
                await likeable.save();
                //await exists.remove();
                await this.likerepository.destroy(exists.id);
                var isadded=false;

            }
            else{
                const newlike=await this.likerepository.create({
                    User:userId,
                    onModel:modelType,
                    likeable:modelId
                });
                likeable.likes.push(newlike.id);
                await likeable.save();
                var isadded=true;


            }
            return isadded;

            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }

}
export default LikeService