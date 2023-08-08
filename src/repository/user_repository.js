import CrudRepository from "./crud_repository.js";
import User from '../model/User.js';
class Userrepository extends CrudRepository{
    constructor()
    {
        super(User);
    }
    
}

export default Userrepository;