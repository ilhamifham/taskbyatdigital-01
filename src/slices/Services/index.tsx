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
            heading1: ({ children }) => <h1 className="heading1 mb-8 text-center">{children}</h1>,
            heading2: ({ children }) => <h2 className="heading2 mb-8 text-center">{children}</h2>,
          }}
        />
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          {slice.primary.cards.map((card, index) => (
            <li key={index} className="bg-brand-light p-4 rounded-lg max-w-[22rem] xl:max-w-[24.625rem]">
              <PrismicNextImage field={card.image} className="mb-4 w-16" />
              <PrismicRichText
                field={card.heading}
                components={{
                  heading2: ({ children }) => <h2 className="heading3 mb-3">{children}</h2>,
                  heading3: ({ children }) => <h3 className="heading3 mb-3">{children}</h3>,
                }}
              />
              <PrismicRichText
                field={card.paragraph}
                components={{
                  heading6: ({ children }) => <p className="paragraph1">{children}</p>,
                  paragraph: ({ children }) => <p className="xl:text-lg">{children}</p>,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
