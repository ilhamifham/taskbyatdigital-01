import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer>
      <div className="max-w-footer flex flex-wrap gap-6 justify-center items-center min-[587px]:justify-between">
        <ul className="font-semibold flex gap-4 text-slate-700">
          {footer.data.social_links.map((link) => (
            <li key={link.key}>
              <PrismicNextLink field={link} className="hover:text-brand" />
            </li>
          ))}
        </ul>
        <div className="text-xs min-[587px]:-order-1">Copyright &copy; 2025 {footer.data.site_name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
