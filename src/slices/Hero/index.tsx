import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="max-w-page py-16 text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{ heading1: ({ children }) => <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">{children}</h1> }}
        />
        <PrismicRichText
          field={slice.primary.paragraph}
          components={{ paragraph: ({ children }) => <p className="mb-6 text-lg font-normal text-gray-700 max-w-xl mx-auto lg:text-xl">{children}</p> }}
        />
        <PrismicNextLink
          field={slice.primary.link}
          className="primary-button inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-full mb-8 md:mb-12 lg:mb-16"
        />
        <PrismicNextImage field={slice.primary.image} className="w-full mx-auto max-w-md md:max-w-3xl xl:max-w-4xl" priority />
      </div>
    </section>
  );
};

export default Hero;
