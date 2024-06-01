import { Heading, Text } from "@/shared";

type CardProps = {
  title: string;
  text: string;
};

export default function Card({ title, text }: CardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl bg-secondary-blue p-8">
      <Heading as="h4">{title}</Heading>
      <Text className="text-xs font-medium leading-4 text-gray-2">{text}</Text>
    </article>
  );
}
