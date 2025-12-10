import BoxSection from "./BoxSection";

type ListItem = {
  href: string;
  text: string;
};

type ListSectionProps = {
  title: string;
  description?: React.ReactNode;
  items: ListItem[];
};

export default function ListSection({ title, description, items }: ListSectionProps) {
  return (
    <section className="mt-6">
      <h1 className="font-bold text-sm">{title}</h1>

      {description && (
        <p className="text-neutral-400 text-sm">{description}</p>
      )}

      <ul className="list-none mt-1.5">
        {items.map((item) => (
          <BoxSection key={item.href} href={item.href} text={item.text} />
        ))}
      </ul>
    </section>
  );
}