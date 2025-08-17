"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";

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
    }, 3000);
  }

  function handleSubmitted() {
    if (isSubmitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  }

  handleSubmitted();

  return (
    <Formik initialValues={formData} validate={handleValidations} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          {isSubmitted ? <div className="max-w-md mx-auto text-center w-full p-4 mb-4 text-sm text-green-800 rounded-3xl bg-green-50 border border-green-300">Form submitted successfully</div> : null}
          <Form className="bg-brand-light p-4 rounded-3xl border border-hover max-w-md mx-auto">
            <div className="mb-5">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <Field id="fullname" type="text" name="fullname" className="form-input capitalize" placeholder="John Doe" />
              <ErrorMessage name="fullname" component="div" className="text-red-500 mt-1" />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field id="email" type="email" name="email" className="form-input lowercase" placeholder="example@email.com" />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <Field id="message" component="textarea" name="message" className="form-input resize-none h-40" placeholder="Write your message here..." />
              <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
            </div>
            <button className="primary-button w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}
