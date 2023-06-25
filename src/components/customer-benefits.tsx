import Image from "next/image";

interface Benefit {
  id: number;
  title: string;
  icon: {
    url: string;
    alt: string;
  };
  description: string;
}

interface CustomerBenefitsProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

export default function CustomerBenefits({
  title,
  subtitle,
  benefits,
}: CustomerBenefitsProps) {
  return (
    <div className="customer-benefits container px-16 mx-auto mt-24">
      {title && (
        <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>
      )}
      {subtitle && (
        <h3 className="text-gray-500 text-center mb-2">{subtitle}</h3>
      )}
      <section className="flex justify-center mt-12">
        {benefits.map(({ id, title, icon, description }) => (
          <article className="mx-4 p-8 shadow rounded-lg max-w-md" key={id}>
            <header className="flex justify-between items-center">
              <h5 className="text-black-900 font-sans font-bold text-2xl leading-8 inline-block align-baseline">
                {title}
              </h5>
              <Image
                alt={icon.alt}
                src={icon.url}
                loading="lazy"
                width={56}
                height={56}
              />
            </header>
            <p className="text-gray-500 py-5">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
