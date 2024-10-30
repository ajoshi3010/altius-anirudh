"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page(){
  const router = useRouter();
  const [invoices,setInvoices]=useState([]);
  useEffect(async ()=>{
    const response=await fetch('./api/list');
    setInvoices(response.data.invoices)
  },[])

  return(
    <>
    <button
      onClick={() => router.push('/newInvoice')}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
    Add invoice
    </button>
      <table className="w-full bg-gray-50 shadow rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Invoice Id</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr>

              <td>{invoice.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}