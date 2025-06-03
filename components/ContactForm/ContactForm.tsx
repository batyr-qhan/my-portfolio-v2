"use client";

import { sendContactForm } from "@/lib/api";
import IconInvalid from "@/public/IconInvalid";
import PatternRings from "@/public/PatternRings";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const initValues = {
  name: "",
  email: "",
  message: "",
  subject: "From My Website",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function ContactForm() {
  const [formState, setFormState] = useState(initState);

  const {
    values: { name, email, message },
  } = formState;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm({
        ...formState.values,
        subject: "From My Website",
      });
      setFormState(initState);
      toast.success(
        "Message sent successfully! I will get back to you as soon as possible.",
        {
          duration: 3000,
          position: "top-right",
        }
      );
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      toast.error(`Error: ${formState.error}`, {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <section id="contact" className="contact bg-less-dark">
      <div className="wrapper contact__wrapper bottom-border">
        <div className="contact__text">
          <h2 className="contact__headline header-xl">Contact</h2>
          <p className="contact__description">
            Feel free to drop me en email through this form!
          </p>
        </div>
        <form onSubmit={onSubmit} className="contact__form">
          <div className="contact__control">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={handleChange}
            />
            <IconInvalid className="contact__invalid-icon" />
          </div>
          <div className="contact__control">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={email}
            />

            <IconInvalid className="contact__invalid-icon" />
          </div>
          <div className="contact__control">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={3}
              placeholder="Message"
              required
              onChange={handleChange}
              value={message}
            ></textarea>
            <IconInvalid className="contact__invalid-icon" />
          </div>
          <div className="contact__control align-right">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <PatternRings className="contact__rings" />
    </section>
  );
}
