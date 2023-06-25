import Image from "next/image";
import { FC } from "react";

interface ExtraBenefit {
  id: number;
  title: string;
  description: string;
  img: {
    alt: string;
    url: string;
  };
  link?: {
    url: string;
    text: string;
  };
}

interface CustomerExtraBenefitsProps {
  title?: string;
  extraBenefits: ExtraBenefit[];
}

const CustomerExtraBenefits: FC<CustomerExtraBenefitsProps> = ({
  title,
  extraBenefits,
}) => {
  return (
    <div className="customer-extra-benefits container mx-auto mt-24">
      {title && (
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
      )}
      <section className="flex flex-col justify-center">
        {extraBenefits.map(({ id, title, description, img, link }) => (
          <article
            className={`flex max-w-6xl items-center mx-auto my-4 p-8 ${
              id % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            key={id}
          >
            <Image
              alt={img.alt}
              src={img.url}
              loading="lazy"
              width={400}
              height={300}
              className="mx-8"
            />
            <section className={`${id % 2 === 0 ? "pl-8" : "pr-8"}`}>
              <h5 className="text-black-900 font-sans font-bold text-2xl leading-8 inline-block align-baseline">
                {title}
              </h5>
              <p className="text-gray-500 py-5 mb-4">{description}</p>
              {link && (
                <a
                  href={link.url}
                  className="text-white bg-primary font-bold rounded-lg py-4 px-6 border border-primary"
                >
                  {link.text}
                </a>
              )}
            </section>
          </article>
        ))}
      </section>
    </div>
  );
};

export default CustomerExtraBenefits;
