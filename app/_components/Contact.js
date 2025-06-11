"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md  p-4 rounded-md mx-auto space-y-4"
    >
      <input
        type="email"
        placeholder="your mail"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 focus:outline-none text-primary-20 bg-primary-100 focus:border-none rounded-lg "
      />

      <textarea
        placeholder="message"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
        className="w-full resize-none p-2 focus:outline-none text-primary-20 bg-primary-100 rounded-lg min-h-56"
      />

      <button
        type="submit"
        disabled={loading}
        className={`glossy-button p-2 rounded text-white ${
          loading ? "bg-primary-50 cursor-not-allowed" : ""
        }`}
      >
        Send
      </button>

      {status === "success" && alert("Message sent successfully!")}
      {status === "error" && alert("Something went wrong. Please try again.")}
    </form>
  );
}
