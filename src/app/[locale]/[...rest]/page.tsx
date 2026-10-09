import { notFound } from "next/navigation";

// Unknown paths under a locale render the localized [locale]/not-found
// instead of falling through to the root (English, unstyled) 404.
export default function CatchAll() {
  notFound();
}
