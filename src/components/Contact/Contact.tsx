import React, { useState } from "react";
import { MainWrapper, StyledButton } from "./styles";
import { useForm } from "@tanstack/react-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || "";

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      textArea: "",
    },
    onSubmit: async ({ value }) => {
      setIsSending(true);

      try {
        const result = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            user_email: value.email,
            message: value.textArea,
          },
          PUBLIC_KEY
        );

        console.log("Message sent!", result.text);
        toast.success("Your message was sent successfully! 🎉");
        form.reset();
      } catch (error) {
        console.error("Sending failed:");
        toast.error("Oops! Something went wrong. Please try again. ❌");
      } finally {
        setIsSending(false);
      }
    },
  });

  return (
    <MainWrapper id="contact">
      <h1>CONTACT</h1>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        className="custom-toast-container"
      />

      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="formField">
            <form.Field
              name="email"
              children={(field) => (
                <input
                  className="email"
                  type="email"
                  placeholder="EMAIL"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                />
              )}
            />
            <form.Field
              name="textArea"
              children={(field) => (
                <textarea
                  className="textarea"
                  placeholder="MESSAGE"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                />
              )}
            />
          </div>
          <StyledButton type="submit" disabled={isSending} className={isSending ? "sending" : ""}>
            {isSending ? "Sending..." : "Send"}
          </StyledButton>
        </form>
      </div>
    </MainWrapper>
  );
};

export default ContactSection;
