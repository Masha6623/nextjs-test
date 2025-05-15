"use client";

import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResponse("");
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const fetchResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await fetchResponse.json();
      if (fetchResponse.ok) {
        setResponse(
          data.message || `Thank you for your interest, ${formData.name}!`
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong on the server");
      }
    } catch (err: unknown) {
      console.error("Submit error:", err);
      if (err instanceof Error) {
        setError(
          "Failed to send message. Please try again. Error: " + err.message
        );
      } else {
        setError("Failed to send message. An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    response,
    error,
    isLoading,
    handleChange,
    handleSubmit,
    setResponse,
    setError,
  };
};
