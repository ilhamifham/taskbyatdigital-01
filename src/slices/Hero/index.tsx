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
        <PrismicRichText field={slice.primary.heading} components={{ heading1: ({ children }) => <h1 className="heading1 mb-4 mx-auto max-w-xl xl:max-w-none">{children}</h1> }} />
        <PrismicRichText field={slice.primary.paragraph} components={{ paragraph: ({ children }) => <p className="paragraph1 mb-5 max-w-xl mx-auto xl:mb-6">{children}</p> }} />
        <PrismicNextLink field={slice.primary.link} className="primary-button mb-12" />
        <PrismicNextImage field={slice.primary.image} className="w-full mx-auto max-w-[64.375rem]" />
      </div>
    </section>
  );
};

export default Hero;
