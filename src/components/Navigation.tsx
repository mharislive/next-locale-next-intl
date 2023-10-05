import Link from "next-intl/link";
import LocaleSwitcher from "./LocaleSwitcher";

const Navigation = () => {
  return (
    <ul className="list-disc list-inside mb-3">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <LocaleSwitcher />
      </li>
    </ul>
  );
};

export default Navigation;
