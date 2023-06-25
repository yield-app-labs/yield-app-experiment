import Image, { StaticImageData } from "next/image";

export interface MainBannerProps {
  title: {
    pre?: string;
    mid?: string;
    post?: string;
  };
  description: string;
  links?: {
    id: number;
    url: string;
    text: string;
    variant: "primary" | "secondary";
  }[];
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export default function MainBanner({
  title,
  description,
  links,
  image,
}: MainBannerProps) {
  return (
    <section
      className="main-banner"
      style={{
        background: "linear-gradient(0deg,#e1eeff,#fff 85.2%)",
      }}
    >
      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center">
          <div className="max-w-xl mr-32">
            <h1 className="text-6xl font-bold">
              {title.pre && (
                <span className="text-black-900">{title.pre} </span>
              )}
              {title.mid && (
                <span className="text-primary-light">{title.mid}</span>
              )}
              {title.post && (
                <span className="text-black-900"> {title.post}</span>
              )}
            </h1>
            <p className="text-gray-600 mt-5">{description}</p>
            {links && links.length > 0 && (
              <div className="mt-8">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className={`${
                      link.variant === "primary"
                        ? "text-white bg-primary"
                        : "text-primary"
                    } font-bold rounded-lg py-4 px-6 border border-primary mr-2 last-of-type:mr-0`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
          <Image
            src={image.src}
            quality={75}
            alt={image.alt}
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
