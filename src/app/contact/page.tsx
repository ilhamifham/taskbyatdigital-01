import { Metadata } from "next";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "A contact page description.",
};

export default function Contact() {
  return (
    <section>
      <div className="max-w-section pb-16">
        <h1 className="heading1 text-center mb-8">Contact</h1>
        <ContactForm />
      </div>
    </section>
  );
}
