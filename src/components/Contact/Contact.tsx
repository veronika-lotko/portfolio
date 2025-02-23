import React, { useState } from "react";
import { MainWrapper, StyledButton } from "./styles";
import { useWindowSize } from "@uidotdev/usehooks";
import { useBreakpoints } from "../../helpers/useBreakpoints";
import { useForm } from "@tanstack/react-form";

const ContactSection = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      textArea: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <MainWrapper id="work" className="work-section">
      <h1>CONTACT</h1>
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
                />
              )}
            />
            <form.Field
              name="textArea"
              children={(field) => (
                <textarea
                  className="textarea"
                  // type="textarea"
                  placeholder="MESSAGE"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </div>
          <StyledButton>SEND</StyledButton>
        </form>
      </div>
    </MainWrapper>
  );
};

export default ContactSection;
