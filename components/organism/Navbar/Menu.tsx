import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={`nav-link ${active ? "active" : ""}`} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
