import user from "@/models/user";
import connectDb from "@/mongo/mongoose";

const handler = async (req, res) => {
    let dataofuser = await user.find();
    res.status(200).json(dataofuser);
};


export default connectDb(handler);