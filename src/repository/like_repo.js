import CrudRepository from "./crud_repository.js";
import Like from '../model/Like.js';
class Likerepository extends CrudRepository{
    constructor()
    {
        super(Like);
    }
    async findByUserAndLikable(data){
        try {
            const response=await Like.findOne(data);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }
}

export default Likerepository;