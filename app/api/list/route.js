import prisma from "@/app/lib/client";
export default async function GET(req){
    const invoices=await prisma.invoice.findMany();
    return res.json({invoices})
}