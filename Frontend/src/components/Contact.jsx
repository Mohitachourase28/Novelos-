/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [sendSuccess, setSendSuccess] = useState(false);
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(null);

    try {
      await emailjs.sendForm(
        "service_2w3ixmb",
        "template_9324bly",
        e.target,
        "N28TzbzYtNg6D_pel"
      );
      setSendSuccess(true);
      setToName("");
      setFromName("");
      setMessageContent("");
    } catch (error) {
      setSendError("Failed to send email. Please try again later.");
    }

    setIsSending(false);
  };

  const handleSend = async () => {
    setIsSending(true);
    setSendSuccess(false);
    setSendError("");

    try {
      // Simulate send operation (replace with actual send logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSending(false);
      setSendSuccess(true);
      navigate("/"); // Redirect to home page
    } catch (error) {
      setIsSending(false);
      setSendError("Failed to send message.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-black-900 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={toName}
            placeholder="Enter your Name"
            onChange={(e) => setToName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
            name="to_name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black-900 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={fromName}
            placeholder="Enter Email ID"
            onChange={(e) => setFromName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
            name="from_name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-black-900 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            value={messageContent}
            placeholder="Leave a message"
            onChange={(e) => setMessageContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            name="message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSending && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
          {sendSuccess && (
            <p className="text-green-500 text-sm">Message sent successfully!</p>
          )}
          {sendError && <p className="text-red-500 text-sm">{sendError}</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
