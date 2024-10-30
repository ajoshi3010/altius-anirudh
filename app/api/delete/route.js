import prisma from "@/app/lib/client";
export default async function DELETE(req,res){
    const {id}=req.json();
    const deletedInvoice=await prisma.invoice.delete({
        where:{
            id
        }
    })
    return res.json({message:"invoice deleted"})
}