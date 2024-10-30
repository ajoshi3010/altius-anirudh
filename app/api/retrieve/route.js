import prisma from "@/app/lib/client";
export default async function POST(req){
    const {id}=req.json();
    const invoice=await prisma.invoice.find({
        where:{
            id
        }
    })
    return res.json({invoice})
}