import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="last:pb-16">
      <div className="max-w-section">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl xl:text-6xl">{children}</h1>,
            heading2: ({ children }) => <h2 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-center md:text-4xl xl:text-5xl">{children}</h2>,
          }}
        />
        <ul className="flex flex-wrap justify-center gap-4">
          {slice.primary.cards.map((card, index) => (
            <li key={index} className="bg-[#F5F9FF] p-4 rounded-lg max-w-[360px] xl:max-w-[300px]">
              <PrismicNextImage field={card.image} className="mb-4 w-16" />
              <PrismicRichText
                field={card.heading}
                components={{
                  heading2: ({ children }) => <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">{children}</h2>,
                  heading3: ({ children }) => <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight">{children}</h3>,
                }}
              />
              <PrismicRichText field={card.paragraph} components={{ paragraph: ({ children }) => <p className="text-gray-700 xl:text-lg">{children}</p> }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
