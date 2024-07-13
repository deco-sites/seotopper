import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string; // @format rich-text
  description?: string; // @format textarea
  formHtml?: HTMLWidget;
  /** @format color-input */
  backgroundColor?: string;
}

export default function ContactSection({ title = "Contact Us", description = "Please fill out the form below and we'll get back to you as soon as possible.", formHtml, backgroundColor = "#f9fafb" }: Props) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4" style={{ backgroundColor }}>
      <div>
        <h2 class="text-3xl font-bold mb-4">{title}</h2>
        <p class="text-lg mb-8">{description}</p>
      </div>
      <div class="bg-white p-8 rounded shadow-md" dangerouslySetInnerHTML={{ __html: formHtml as any }} />
    </div>
  );
}