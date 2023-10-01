import { Nav } from "@/components/index";

export default function Header() {
  return (
    <header className={`fixed left-0 right-0 top-0 px-6 py-8`}>
      <Nav />
    </header>
  );
}