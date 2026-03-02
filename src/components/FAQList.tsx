import type { FAQ } from "../content/site.config";

type Props = {
  items: FAQ[];
};

export default function FAQList({ items }: Props) {
  return (
    <dl className="divide-y divide-neutral-200">
      {items.map((item) => (
        <div key={item.question} className="py-6">
          <dt className="text-sm font-semibold text-neutral-900 mb-2">
            {item.question}
          </dt>
          <dd className="text-sm text-neutral-600 leading-relaxed">
            {item.answer}
          </dd>
        </div>
      ))}
    </dl>
  );
}
