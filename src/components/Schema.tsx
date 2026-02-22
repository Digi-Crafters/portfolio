"use client";
import Script from "next/script";

export default function Schema() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; 

  return (
    <Script type="application/ld+json" id="schema">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Digi Crafters",
        url: "https://digi-crafters.vercel.app",
        logo: "https://digi-crafters.vercel.app/digicrafters.png",
        sameAs: ["https://www.instagram.com/digi._.crafters/"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: phoneNumber,
            contactType: "customer service",
          },
        ],
        description:
          "Digi Crafters is a web development and design agency helping businesses build fast, modern, and scalable websites.",
      })}
    </Script>
  );
}
