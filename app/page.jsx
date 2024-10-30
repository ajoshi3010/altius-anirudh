"use client"
import { useEffect, useState } from "react";

export default async function Page(){
  const [invoices,setInvoices]=useState([]);
  useEffect(async ()=>{
    const response=await fetch('./api/list');
    setInvoices(response.data.invoices)
  },[])

  return(
    <>
      <table className="w-full bg-gray-50 shadow rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">User URL</th>
              <th className="py-2 px-4 text-left max-w-xs">Real URL</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <td>{invoice.id}</td>
            ))}
          </tbody>
        </table>
    </>
  )
}