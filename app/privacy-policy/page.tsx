import { Navbar } from "@/components/NavBar";
import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";

export default async function PrivacyPolicy() {
  const content = await getMarkdownContent("privacy-policy.md");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}
