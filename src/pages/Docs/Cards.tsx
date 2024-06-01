import { cardList } from "@/helpers/constants";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8">
      {cardList.map((card) => (
        <Card key={card.id} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
