"use client";

import { useState } from "react";

export default function SupportForm({ onAddTicket }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [status, setStatus] = useState("Pending");

  function handleSubmit(e) {
    e.preventDefault();

    const newTicket = {
      id: id,
      name: name,
      email: "demoemail@gmail.com",
      subject: subject,
      createDate: createDate,
      status: status,
    };

    onAddTicket(newTicket);

    // Input clear
    setName("");
    setId("");
    setSubject("");
    setCreateDate("");
    setStatus("Pending");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-[#101828] mb-5">
        Create Support Ticket
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2"> Name </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
           placeholder="Enter name" className="w-full h-11 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#465fff]"  required/>
        </div>

        {/* ID */}
        <div>
          <label className="block text-sm font-medium mb-2"> Ticket ID</label>

          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="#323539"
            className="w-full h-11 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#465fff]"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium mb-2"> Subject </label>

          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            className="w-full h-11 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#465fff]"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Create Date
          </label>

          <input
            type="text"
            value={createDate}
            onChange={(e) => setCreateDate(e.target.value)}
            placeholder="01 May, 2027"
            className="w-full h-11 border border-gray-300 rounded-lg px-4 outline-none focus:border-[#465fff]"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-11 border border-gray-300 rounded-lg px-4 outline-none"
          >
            <option value="Pending">Pending</option>
            <option value="Solved">Solved</option>
          </select>
        </div>

      </div>

      <button
        type="submit"
        className="mt-5 bg-[#465fff] text-white px-6 py-2.5 rounded-lg hover:bg-[#3641d9]">
        Save Ticket
      </button>
    </form>
  );
}