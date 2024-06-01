import { Logo, Button } from "@/shared";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-secondary-blue">
      <div className="container flex flex-col items-center justify-between px-[3.625rem] py-14 md:flex-row">
        <div className="mb-[1.875rem] md:mb-0">
          <Logo variant="footer" />
          <FooterNav />
        </div>
        <Button variant="download">Download</Button>
      </div>
      <Copyright />
    </footer>
  );
}
