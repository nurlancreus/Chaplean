import DocsContent from "./DocsContent";
import { Heading, Text } from "@/shared";

export default function DocsPage() {
  return (
    <section id="docs">
      <header aria-labelledby="primaryDocsHeader" className="mb-[5.75rem]">
        <Heading as="h1" id="primaryDocsHeader" className="">
          Introduction
        </Heading>
        <Text className="mt-3">Welcome to the Chaplean documentation</Text>
      </header>
      <DocsContent />
    </section>
  );
}
