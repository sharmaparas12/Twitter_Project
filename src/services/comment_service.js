import { Tweetrepository,CommentRepository } from "../repository/index.js";
class CommentService{
    constructor()
    {
        this.tweetrepository=new Tweetrepository();
        this.commentrepository=new CommentRepository();
        
    }

    async create_comment(userId,modelId,text,modelType){
        try {
              if(modelType=="Tweet")
              {
                var to_comment=await this.tweetrepository.find(modelId);
             }

              else if(modelType=="Comment"){
                var to_comment=await this.commentrepository.find(modelId);
              
               }
              else{
                console.log("undefined modelType");
                throw {error};
              }
              
              const new_coment=await this.commentrepository.create({content:text,onModel:modelType,commentable:modelId,User:userId});
              await to_comment.comments.push(new_coment.id);
              await to_comment.save();
              return new_coment;
            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }

    
}
export default CommentService;