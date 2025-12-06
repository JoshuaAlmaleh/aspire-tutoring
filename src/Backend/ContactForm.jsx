"use client"; 

import { useState } from "react";
import { supabase } from "../supabaseClient";
import '../CSS_folder/ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(null);

  // 1️⃣ Save the form data in Supabase (optional)
  const { error: insertError } = await supabase
    .from("contact_form")
    .insert({
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

  if (insertError) {
    setError("Something went wrong while saving your message: " + insertError.message);
    setLoading(false);
    return;
  }

  // 2️⃣ Send email through Vercel API route
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setError("Message saved but failed to send email: " + (data.error || "Unknown error"));
    } else {
      setSuccess("Message submitted and email sent successfully!");
      setFormData({
        name: "",
        lastname: "",
       email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  } catch (err) {
    setError("Message saved but email failed: " + err.message);
  }

  setLoading(false);
};



  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        name="lastname"
        placeholder="Your Last Name"
        value={formData.lastname}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="phone"
        name="phone"
        placeholder="Your PhoneNumber"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
