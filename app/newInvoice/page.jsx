"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Page() {
    const router = useRouter();
    const [input, setInput] = useState("")
    const addInvoice=async (e)=>{
        const res=await fetch('../api/create',{
            method:"POST",
            body:JSON.parse(input)
        })
        router.push('/');

    }
    return (
        <>
            {/* <label for="invoice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paste your invoice json here</label> */}
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Json of invoice" onChange={(e) => {
                setInput(e.target.value)
            }}></textarea>
            <button
                onClick={addInvoice}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Add invoice
            </button>
        </>


    )
}