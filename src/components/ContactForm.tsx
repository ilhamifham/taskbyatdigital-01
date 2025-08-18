"use client";

import { Formik, Form, FormikHelpers } from "formik";
import { useState, useEffect } from "react";

import InputField from "./InputField";

type FormData = { fullname: string; email: string; message: string };

export default function ContactForm() {
  const formData = { fullname: "", email: "", message: "" };
  const [isSubmitted, setSubmitted] = useState(false);

  function handleValidations(values: FormData) {
    const errors: Partial<FormData> = {};

    if (!values.fullname) {
      errors.fullname = "Full Name Required";
    } else if (values.fullname.length < 4) {
      errors.fullname = "Full Name must be at least 4 characters";
    }

    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Message Required";
    } else if (values.message.length < 4) {
      errors.message = "Message must be at least 4 characters";
    }

    return errors;
  }

  function handleSubmit(values: FormData, { setSubmitting, resetForm }: FormikHelpers<FormData>) {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      setSubmitted(true);
      console.log(values);
    }, 2000);
  }

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <Formik initialValues={formData} validate={handleValidations} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          {isSubmitted ? <div className="max-w-md mx-auto text-center w-full p-4 mb-4 text-sm text-green-800 rounded-3xl bg-green-50 border border-green-300">Form submitted successfully</div> : null}
          <Form className="bg-brand-light p-4 rounded-3xl border border-hover max-w-md mx-auto">
            <InputField label="Full Name" type="text" placeholder="John Doe" className="capitalize" />
            <InputField label="Email" type="email" placeholder="example@email.com" className="lowercase" />
            <InputField label="Message" component="textarea" placeholder="Write your message here..." className="resize-none h-40" />
            <button type="submit" className="primary-button w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}
