import Likesservice from "../services/like_service.js";
const like_service=new Likesservice();



const createlike =async (req,res) => {
    try {
        var obj={
            modelId:req.body.modelId,
            modelType:req.body.modelType,
            userId:req.body.userId
        };
        const response=await like_service.togglelike(obj.modelId,obj.modelType,obj.userId);
        if(response==true)
        var m="like created successfully";
    else
    var m="like deleted succesfully";
    
        return res.status(201).json({
            data:response,
            message:m,
            err:{},
            status:true
        });
        
    } catch (error) {
        return res.status(401).json({
            data:{},
            message:"like  not created successfully",
            err:error,
            status:false
        });
        

        
    }

}
export{
    createlike
}