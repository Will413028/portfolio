import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy-deep text-on-navy-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 <span className="text-on-navy">Will Wu</span> · {t("tagline")}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/work" className="hover:text-on-navy">
              {t("work")}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-on-navy">
              {t("about")}
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" className="hover:text-on-navy">
              {t("resume")}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/will413028"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-navy"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/will4130/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-navy"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
