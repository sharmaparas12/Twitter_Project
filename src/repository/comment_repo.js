import CrudRepository from "./crud_repository.js";
import Comment from '../model/comments.js';
class CommentRepository extends CrudRepository{
    constructor()
    {
        super(Comment);
    }
    async find(id){
        try {
            
            const response=await Comment.findById(id);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }
}

export default CommentRepository