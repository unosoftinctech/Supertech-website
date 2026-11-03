"use client";

import { type FormEvent, useState } from "react";

import { buttonClass } from "@/components/ui/button-styles";
import { company } from "@/data/site";

const field =
  "w-full rounded-[4px] border border-line bg-white px-[14px] py-[13px] font-[inherit]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const whatsappText = `Hello SuperTech, I am ${name || "[name]"} (${phone || "[phone]"}). ${message}`;
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input
        className={field}
        placeholder="Your name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={field}
        placeholder="Phone number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className={field}
        rows={5}
        placeholder="Component, quantity, material and application details"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className={buttonClass()}>
        Send Enquiry by Email
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener"
        className={buttonClass("outline")}
      >
        Send on WhatsApp
      </a>
      <small>
        The email option opens your mail app with the details filled in. Attach your
        drawing there.
      </small>
    </form>
  );
}
