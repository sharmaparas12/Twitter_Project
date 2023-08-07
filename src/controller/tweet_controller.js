import Tweetservice from "../services/tweet_service.js";
const tweetservice=new Tweetservice();



const create =async (req,res) => {
    try {
        const response=await tweetservice.create(req.body);
        return res.status(201).json({
            data:response,
            message:"tweet created successfully",
            err:{},
            status:true
        });
        
    } catch (error) {
        return res.status(401).json({
            data:{},
            message:"tweet  not created successfully",
            err:error,
            status:false
        });
        

        
    }

}
export{
    create
}