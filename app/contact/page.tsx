import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jane Doe.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl font-light text-foreground mb-4">
        Contact
      </h1>
      <p className="text-muted-foreground mb-12 max-w-lg">
        Available for freelance, contract, and consulting engagements. Response
        within 48 hours.
      </p>

      <div className="flex gap-6 mb-12 text-sm">
        <a
          href="mailto:jane@example.com"
          className="text-foreground hover:text-muted-foreground underline underline-offset-4"
        >
          jane@example.com
        </a>
        <a
          href="https://linkedin.com/in/janedoe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-muted-foreground underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>

      <Separator className="mb-12" />

      <ContactForm />
    </div>
  );
}
