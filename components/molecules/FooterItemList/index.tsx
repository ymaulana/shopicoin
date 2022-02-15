import Link from "next/link";

interface FooterItemListProps {
  content: string;
  href: string;
}
export default function FooterItemList(props: FooterItemListProps) {
  const { content, href } = props;
  return (
    <li className="mb-6">
      <Link href={`${href}`}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {content}
        </a>
      </Link>
    </li>
  );
}
