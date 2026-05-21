import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-neutral-primary fixed top-0 z-20 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center py-2 border-b-2 border-gray-200 rounded-lg">
        <div
          className="items-center justify-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="
              flex justify-center w-full
              gap-4 md:gap-32 lg:gap-52
              mt-0 lg:mt-2
              text-[13.5px] md:text-[16px]
              font-medium
              md:flex-row
            "
          >
            {menus.map((menu, index) => {
              const isActive = location.pathname === menu.path;

              return (
                <li key={index}>
                  <Link
                    to={menu.path}
                    className={`
                      relative block w-[90px] text-center
                      py-2 px-3 md:p-0
                      font-cascadia font-bold
                      transition-all duration-300 ease-in-out
                      hover:-translate-y-[5px]

                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-[3px]
                      after:rounded-full
                      after:bg-gradient-to-r
                      after:from-pink-500
                      after:via-cyan-400
                      after:to-blue-500
                      after:transition-all
                      after:duration-300

                      ${
                        isActive
                          ? "text-black after:w-full"
                          : "text-heading after:w-0 hover:after:w-full"
                      }
                    `}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}