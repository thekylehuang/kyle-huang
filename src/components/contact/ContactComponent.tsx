"use client"
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    if (message.trim() === '') {
      return;
    }
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      console.log("Message sent successfully:", response);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return(
    <div className="mt-14 mx-auto mb-24 w-11/12 max-w-[500px] min-h-[890px] text-neutral-950 dark:text-zinc-50">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-14 mb-14">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="email@example.com" className="mb-4" onChange={(e) => setEmail(e.target.value)} required />
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="John Doe" className="mb-4" onChange={(e) => setName(e.target.value)} required />
        <Label htmlFor="message">Message</Label>
        <Textarea placeholder="Type your message here." id="message" className="mb-4" onChange={(e) => setMessage(e.target.value)} required />
        <Button type="submit" disabled={!message.trim()}>{ isSent ? 'Sent' : 'Send Message' }</Button>
      </form>
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mt-8">Social Media</h2>
      <div className="mt-4 flex gap-4">
        <a href="https://www.instagram.com/thekylehuang/"
        target="_blank" 
        rel="noopener noreferrer">
          <img alt="Instagram Logo" 
          src="/images/contact/instagram.png" 
          className="w-10"/>
        </a>
        <a href="#"
        target="_blank" 
        rel="noopener noreferrer">
          <img alt="LinkedIn Logo" 
          src="/images/contact/linkedin.png" 
          className="w-10"/>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;