import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { isAuthenticated } from "./lib/token-control";


export async function middleware(req){


            try{
              
                const result = await isAuthenticated(req)

                if (result) {
                    return NextResponse.next();
                }else{
                    return NextResponse.json({success:false, code:403});
                }

            }catch(e){
                console.log(e)
                return NextResponse.json({success:false, code:403});
            }
        

    c

}

export const config= {
    matcher:'/api/product'
}