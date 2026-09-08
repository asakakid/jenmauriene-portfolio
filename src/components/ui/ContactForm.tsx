"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  AlertCircle,
  LoaderCircle,
  Send,
  Sparkles,
} from "lucide-react";

import Button from "./Button";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [feedback, setFeedback] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "That didn’t go through."
        );
      }

      setStatus("success");
      setFeedback(
        "Sent! Your message is on its way ✦"
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setFeedback(error.message);
      } else {
        setFeedback(
          "Tiny plot twist — something went wrong."
        );
      }
    }
  }

  const inputClass = `
    w-full
    rounded-[18px]
    border
    border-[#e6e0e7]
    bg-white/75
    px-4
    py-3.5
    text-[#29232d]
    outline-none
    transition-all
    duration-300
    placeholder:text-[#b1a7af]
    hover:border-[#d8cff4]
    hover:bg-white
    focus:border-[#b9a7ee]
    focus:bg-white
    focus:shadow-[0_0_0_4px_rgba(185,167,238,0.10)]
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* HONEYPOT */}
      <div className="hidden">
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME + EMAIL */}
      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >
        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-xs
              font-medium
              text-[#7d707a]
            "
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="Hi, I’m..."
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="
              mb-2
              block
              text-xs
              font-medium
              text-[#7d707a]
            "
          >
            Your email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="message"
          className="
            mb-2
            block
            text-xs
            font-medium
            text-[#7d707a]
          "
        >
          Tell me about it
        </label>

        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1200}
          rows={6}
          placeholder="The idea, the problem, the vibe..."
          className={`
            ${inputClass}
            min-h-[170px]
            resize-none
          `}
        />

        <p
          className="
            mt-2
            text-xs
            leading-5
            text-[#9b8f99]
          "
        >
          Messy notes absolutely allowed.
        </p>
      </div>

      {/* SUBMIT */}
      <Button
        type="submit"
        disabled={status === "loading"}
        showArrow={false}
        variant="secondary"
        className="w-full px-6 py-3.5"
      >
        {status === "loading"
          ? "Sending..."
          : "Send it over"}
      </Button>

      {/* FEEDBACK */}
      {feedback && (
        <div
          role="status"
          aria-live="polite"
          className={`
            flex
            items-center
            gap-2
            rounded-[16px]
            px-3
            py-3
            text-sm

            ${
              status === "success"
                ? "bg-[#f3fbf6] text-[#5f7f6d]"
                : "bg-[#fff5f2] text-[#9a6259]"
            }
          `}
        >
          {status === "success" ? (
            <Sparkles size={16} />
          ) : (
            <AlertCircle size={16} />
          )}

          {feedback}
        </div>
      )}
    </form>
  );
}