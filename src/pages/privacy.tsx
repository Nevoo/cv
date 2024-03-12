import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";

import "../app/globals.css";
import Link from "next/link";
import { HomeIcon, ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <header className="container relative mx-auto scroll-my-12 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <Link
            href="/"
            className="inline-flex gap-x-1.5 align-baseline leading-none"
          >
            <div className="flex max-w-md items-center text-pretty font-mono text-xs text-muted-foreground hover:underline">
              <ArrowLeft size={18} />
              <p className="text-s ml-2">Back</p>
            </div>
          </Link>
        </section>
      </header>
      <main className="spaceb container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <pre
            style={{
              fontFamily: "Inter",
              textAlign: "left",
              paddingTop: "150px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {`Privacy Policy for luehrs.dev

Effective Date: 01.03.2024

Thank you for visiting luehrs.dev (the "Website").
Your privacy is important to me, and I am committed to protecting your personal information. 
This Privacy Policy outlines the types of information collected when you visit our Website, 
how I use and protect that information, and your rights regarding your personal data.

As the owner and operator of luehrs.dev, I prioritize privacy and data compliance. 
I utilize Vercel Web Analytics to gather insights about website traffic while ensuring user privacy.

Data collected:
Vercel Analytics: To enhance our website, we use Vercel Web Analytics. 
These tools collect aggregated data to provide insights into website usage and performance, with no individual visitor identification. 
For more information on Vercel's data practices, please refer to their privacy policies:
    `}
          </pre>
          <div
            style={{
              fontFamily: "Inter",
              textAlign: "left",
            }}
          >
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none text-blue-600 visited:text-purple-600 hover:underline"
              href="https://vercel.com/docs/analytics/privacy-policy"
            >
              <ul className="list-inside list-disc">
                <li>Vercel Web Analytics Privacy and Compliance</li>
              </ul>
            </a>
          </div>
          <pre
            style={{
              fontFamily: "Inter",
              textAlign: "left",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {`
Updates to the Privacy Policy:
This Privacy Policy may be updated periodically to reflect changes in our privacy practices.
I will notify users of any material changes by posting the updated Privacy Policy on our Website.
Your continued use of the Website after the posting of changes constitutes your acceptance of such changes.

Contact Information:
If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact me at [rouven@luehrs.dev].

By using our Website, you consent to the collection and use of non-personal data as described in this Privacy Policy.
If you do not agree with the terms of this Policy, please do not use our Website.
`}
          </pre>
          <CommandMenu
            links={[
              {
                url: RESUME_DATA.personalWebsiteUrl,
                title: "Personal Website",
              },
              ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                url: socialMediaLink.url,
                title: socialMediaLink.name,
              })),
            ]}
          />
        </section>
      </main>
      <footer className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <Link
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </p>
        </section>
      </footer>
    </>
  );
}
