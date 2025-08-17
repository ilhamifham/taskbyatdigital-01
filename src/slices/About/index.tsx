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
        <div className="md:flex-1">
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">{children}</h1>,
              heading2: ({ children }) => <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">{children}</h2>,
            }}
          />
          <PrismicRichText field={slice.primary.paragraph} components={{ paragraph: ({ children }) => <p className="mb-5 text-gray-700 md:mb-6 xl:text-lg xl:mb-7">{children}</p> }} />
        </div>
        <picture className="md:flex-1">
          <PrismicNextImage field={slice.primary.image} className="rounded-lg" priority />
        </picture>
      </div>
    </section>
  );
};

export default About;
