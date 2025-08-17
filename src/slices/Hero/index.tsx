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
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="last:pb-16">
      <div className="max-w-section text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{ heading1: ({ children }) => <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight mx-auto max-w-xl md:text-5xl xl:text-6xl xl:max-w-none">{children}</h1> }}
        />
        <PrismicRichText field={slice.primary.paragraph} components={{ paragraph: ({ children }) => <p className="mb-5 text-lg text-gray-700 max-w-xl mx-auto xl:text-xl xl:mb-6">{children}</p> }} />
        <PrismicNextLink field={slice.primary.link} className="primary-button mb-12" />
        <PrismicNextImage field={slice.primary.image} className="w-full mx-auto max-w-[64.375rem]" priority />
      </div>
    </section>
  );
};

export default Hero;
