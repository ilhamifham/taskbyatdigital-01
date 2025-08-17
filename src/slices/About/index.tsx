import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="last:pb-16">
      <div className="max-w-section md:flex md:gap-8 xl:gap-16 xl:items-center">
        <div className="mb-5 md:mb-0 md:flex-1">
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => <h1 className="heading1 mb-4">{children}</h1>,
              heading2: ({ children }) => <h2 className="heading2 mb-4">{children}</h2>,
            }}
          />
          <PrismicRichText
            field={slice.primary.paragraph}
            components={{
              heading6: ({ children }) => <p className="paragraph1">{children}</p>,
              paragraph: ({ children }) => <p className="xl:text-lg">{children}</p>,
            }}
          />
        </div>
        <picture className="md:flex-1">
          <PrismicNextImage field={slice.primary.image} className="rounded-lg" />
        </picture>
      </div>
    </section>
  );
};

export default About;
