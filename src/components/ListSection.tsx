import BoxSection from "./BoxSection";

type ListItem = {
  text: string;
  description?: string;
  href?: string;
  copyable?: boolean;
};

type ListSectionProps = {
  title: string;
  description?: React.ReactNode;
  items: ListItem[];
};

export default function ListSection({ title, description, items }: ListSectionProps) {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-sm">{title}</h2>

      {description && (
        <p className="text-neutral-400 text-sm">{description}</p>
      )}

      <ul className="list-none mt-1.5 rounded-xl overflow-hidden">
        {items.map((item) => (
          <li key={item.href ?? item.text} className="border-b border-b-[#212125] last:border-none">
            <BoxSection
              href={item.href}
              text={item.text}
              description={item.description}
              copyable={item.copyable}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}