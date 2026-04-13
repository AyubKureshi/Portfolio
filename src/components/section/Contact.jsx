import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const CONTACT_EMAIL = "ayubkureshi.scoe.comp@gmail.com";
const CONTACT_PHONE = "+919322128872";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayub-kureshi-010274223/",
    label: "Open LinkedIn profile",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/AyubKureshi",
    label: "Open GitHub profile",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.21.7-3.89-1.36-3.89-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

const buildMailtoLink = ({ name, email, message }) => {
  const subject = `Portfolio inquiry from ${name || "a visitor"}`;
  const body = [
    `Name: ${name || "-"}`,
    `Email: ${email || "-"}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const buildSmsLink = ({ name, message }) => {
  const text = [
    `Hi Ayub, this is ${name || "a visitor"}.`,
    message || "I reached out through your portfolio and wanted to connect.",
  ].join("\n");

  return `sms:${CONTACT_PHONE}?body=${encodeURIComponent(text)}`;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailtoLink(formData);
  };

  const handleSmsClick = () => {
    window.location.href = buildSmsLink(formData);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="mb-12 text-center text-3xl font-bold text-pastel-text md:text-4xl">
        Get In Touch
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-pastel-text">
              Let&apos;s connect
            </h3>
            <p className="text-pastel-muted">
              Whether you have a question, a project idea, or just want to say
              hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 text-pastel-muted transition-colors hover:text-blue-500"
            >
              <div className="rounded-full border border-gray-100 bg-white p-3 shadow-sm">
                <Mail size={20} />
              </div>
              <span>{CONTACT_EMAIL}</span>
            </a>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-4 text-pastel-muted transition-colors hover:text-blue-500"
            >
              <div className="rounded-full border border-gray-100 bg-white p-3 shadow-sm">
                <Phone size={20} />
              </div>
              <span>+91-9322128872</span>
            </a>
            <div className="flex items-center gap-4 text-pastel-muted">
              <div className="rounded-full border border-gray-100 bg-white p-3 shadow-sm">
                <MapPin size={20} />
              </div>
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.label}
                title={link.name}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-100 bg-white p-3 text-pastel-text shadow-sm transition-all hover:bg-pastel-text hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <form
          className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="contact-name" className="ml-1 text-sm font-medium text-pastel-text">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border-transparent bg-gray-50 px-4 py-3 text-pastel-text outline-none transition-all focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-email" className="ml-1 text-sm font-medium text-pastel-text">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full rounded-xl border-transparent bg-gray-50 px-4 py-3 text-pastel-text outline-none transition-all focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="ml-1 text-sm font-medium text-pastel-text">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
              className="w-full resize-none rounded-xl border-transparent bg-gray-50 px-4 py-3 text-pastel-text outline-none transition-all focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-pastel-text py-4 font-medium text-white shadow-md transition-colors hover:bg-black">
            <Send size={18} />
            Send Message
          </button>
          <button
            type="button"
            onClick={handleSmsClick}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-4 font-medium text-pastel-text transition-colors hover:border-blue-200 hover:text-blue-500"
          >
            <MessageSquare size={18} />
            Send Text Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
