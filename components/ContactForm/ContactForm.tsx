import { sendContactForm } from "@/lib/api";
import IconInvalid from "@/public/IconInvalid";
import PatternRings from "@/public/PatternRings";
import React, { ChangeEvent, useState } from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
  subject: "From My Website",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function ContactForm({
  setIsToastShown,
}: {
  setIsToastShown: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      type: string;
      text: string;
    }>
  >;
}) {
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
      showToast({ type: "success", text: "Successfully Sent" });
      // showToast();
      // toast({
      //   title: "Message sent.",
      //   status: "success",
      //   duration: 2000,
      //   position: "top",
      // });
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      showToast({ type: "warning", text: formState.error });
    }
  };

  const showToast = ({ type, text }: { type: string; text: string }) => {
    setIsToastShown((prev) => ({
      ...prev,
      status: true,
      type,
      text,
    }));

    // automatically hide the toast after 5 seconds
    // your can set a shorter/longer time if you want
    setTimeout(() => {
      setIsToastShown((prev) => ({
        ...prev,
        status: false,
        text: "",
        type: "",
      }));
    }, 3000);
  };

  return (
    <section id="contact" className="contact bg-less-dark">
      <div className="wrapper contact__wrapper bottom-border">
        <div className="contact__text">
          <h2 className="contact__headline header-xl">Contact</h2>
          <p className="contact__description">
            I can`t guarantee I`m fully available for your project now. Anyway,
            feel free to drop me en email through this form, so we can discuss.
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
