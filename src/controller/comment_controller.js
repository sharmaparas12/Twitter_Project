import commentservice from '../services/comment_service.js';

const comment_service=new commentservice();



const createcomment =async (req,res) => {
    try {
        var obj={
            modelId:req.body.modelId,
            modelType:req.body.modelType,
            userId:req.body.userId,
            content:req.body.content
        };
        const response=await comment_service.create_comment(obj.userId,obj.modelId,obj.content,obj.modelType);
        return res.status(201).json({
            data:response,
            message:"comment created successfully",
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
    createcomment
}