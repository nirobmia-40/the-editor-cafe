import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Editor Cafe — Stories, thoughtfully edited",
  description: "An independent creative studio shaping thoughtful stories through film, photography and design.",
  icons: { icon: "/Pasted%20Image.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
