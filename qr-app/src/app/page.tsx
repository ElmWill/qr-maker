"use client";

import { useState } from "react";

export default function Home(){
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const generateQr = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    if(data.qr){
      setQr(data.qr);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
    <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
    <input
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      className="border border-gray-300 p-2 mb-4 w-full"
      placeholder="Enter URL"
    />
    <button
      onClick={generateQr}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Generate QR Code
    </button>
    {qr && (
      <div className="mt-6 flex flex-col items-center">
        <img src={qr} alt="QR Code"/>
        <a
          href={qr}
          download="qrcode.png"
          className="mt-6 bg-green-500 text-white p-2 rounded"
        >
          Download QR Code
        </a>
      </div>
    )}
    </main>
  );
}