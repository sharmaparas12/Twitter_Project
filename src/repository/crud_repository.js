

class CrudRepository{
    constructor(Model)
    {
        this.model=Model;
    }

    async create(data){
        try {
            
            const response=await this.model.create(data);
            return response;
            
        } catch (error) {
            console.log("error in  layer");
            throw {error};
            
        }
    }
    async destroy(id){
        try {
            const response=await this.model.findByIdAndDelete(id);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }
    async update(id,data){
        try {
            const response=await this.model.findByIdAndUpdate(id,data,{new:true});
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }
    async get(id){
        try {
            const response=await this.model.findById(id);
            return response;
            
        } catch (error) {
            console.log("error in repo layer");
            throw {error};
            
        }
    }
    

}
export default CrudRepository;