import Image from "next/image";
import CaretIcon from "./caret-icon";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow">
      <div className="container px-32 mx-auto">
        <nav className="flex justify-between items-center py-6">
          <Link href="/" className="flex justify-between items-center">
            <Image
              src="https://yield.app/_next/static/media/navbar-logo.2fc8d039.svg"
              alt="navbar-logo.svg"
              width={112}
              height={26}
              className="mr-8"
            />
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="mr-8 relative">
                <p className="font-bold text-sm peer cursor-pointer flex items-center">
                  <span className="mr-2">Products</span>
                  <CaretIcon />
                </p>
                <div className="absolute hidden -left-72 top-4 peer-hover:block hover:block">
                  <div className="w-[680px] flex flex-col bg-white border border-slate-100 shadow-lg rounded-lg mt-4 p-8">
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/about-us"
                    >
                      <span className="font-bold pb-2">About Us</span>
                      <span className="text-xs text-gray-500">
                        Learn how Yield App can help you manage and grow your
                        digital wealth.
                      </span>
                    </Link>
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/careers"
                    >
                      <span className="font-bold pb-2">Careers</span>
                      <span className="text-xs text-gray-500">
                        Want to work at Yield App? See if we could be a good fit
                      </span>
                    </Link>
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/security"
                    >
                      <span className="font-bold pb-2">Security</span>
                      <span className="text-xs text-gray-500">
                        Our multi-layered security infrastructure is designed to
                        generate sustainable yield
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="mr-8">
                <a className="font-bold text-sm" href="/">
                  Businesses
                </a>
              </li>
              <li className="mr-8">
                <a className="font-bold text-sm" href="/">
                  Yield App Labs
                </a>
              </li>
              <li className="mr-8 relative">
                <p className="font-bold text-sm peer cursor-pointer flex items-center">
                  <span className="mr-2">Company</span>
                  <CaretIcon />
                </p>
                <div className="absolute hidden -left-36 top-4 peer-hover:block hover:block">
                  <div className="w-72 flex flex-col bg-white border border-slate-100 shadow-lg rounded-lg mt-4 p-6">
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/about-us"
                    >
                      <span className="font-bold pb-2">About Us</span>
                      <span className="text-xs text-gray-500">
                        Learn how Yield App can help you manage and grow your
                        digital wealth.
                      </span>
                    </Link>
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/careers"
                    >
                      <span className="font-bold pb-2">Careers</span>
                      <span className="text-xs text-gray-500">
                        Want to work at Yield App? See if we could be a good fit
                      </span>
                    </Link>
                    <Link
                      className="px-5 py-3 hover:bg-gray-200 flex flex-col rounded"
                      href="/security"
                    >
                      <span className="font-bold pb-2">Security</span>
                      <span className="text-xs text-gray-500">
                        Our multi-layered security infrastructure is designed to
                        generate sustainable yield
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="mr-8">
                <Link className="font-bold text-sm" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="mr-8">
                <a className="font-bold text-sm" href="/">
                  FAQ
                </a>
              </li>
            </ul>
            <a
              href="/"
              className="text-primary rounded-lg py-2 px-4 border border-primary text-sm mr-2"
            >
              Login
            </a>
            <a
              href="/"
              className="text-white bg-primary rounded-lg py-2 px-4 border border-primary text-sm"
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
