
import prisma from "../lib/client";
export default async function PUT(req,res){
    const{id,date,invoiceNumber,customerName,billingAddress,shippingAddress,gSTIN,totalAmount,invoiceItems,invoiceBillSundrys}=await req.json();
    const totalAmountInvoiceItems = invoiceItems.reduce(function (sum, invoice_item) {
        invoice_item.amount=invoice_item.quantity*invoice_item.price
        return sum + (invoice_item.amount);
    }, 0);
    const totalAmountBillSundry=invoice.bill_sundrys.reduce(function (sum, bill_sundry) {
        return sum + bill_sundry.amount;
    }, 0);
    const amount=totalAmountBillSundry+totalAmountInvoiceItems;
    const invoiceItemsList=await prisma.invoiceItem.updateManyAndReturn({
        data:invoiceItems
    })
    const invoiceSundrysList=await prisma.invoiceBillSundry.updateManyAndReturn({
        data:invoiceBillSundrys
    })
    const invoiceDone=await prisma.invoice.update({
        where:{
            id:id
        },
        data:{
            date,
            invoiceNumber,
            customerName,
            billingAddress,
            shippingAddress,
            gSTIN,
            totalAmount:amount,
            invoiceItems:invoiceItemsList,
            invoiceBillSundrys:invoiceSundrysList
        }
    })
    return res.json({message:"invoice updated"})
    
}