import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="md:flex items-center gap-x-5">
          <Image src="/images/logo.svg" alt="logo" width={20} height={24} />
        </div>
      </Link>
    </div>
  );
};
export default Logo;
