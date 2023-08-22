import jwt from "jsonwebtoken";

export const sendcookie = (user,res,message,statusCode = 200)=>{
    const token = jwt.sign({_id: user._id }, process.env.jwt_SECRET);

    res
        .status(statusCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite:process.env.NODE_ENV ==="Development" ? "lax" : "none",
            secure:process.env.NODE_ENV ==="Development" ? false :true,
                     // this cookies will not work in postman we use this cookie for deployment
                                                //for postman sameSite:"lex" and secure:false
        })
        .json({
            success: true,
            message,
        });
}