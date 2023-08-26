import React from "react";
import routes from "../data/routers";
import logo from "../Assets/llevele-llevele.png";

const Header = () => {
  return (
    <header class="container mx-auto flex items-center justify-between p-8 bg-mint">
      <div className="flex justify-start">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          {routes.map((route) => {
            const isActive = route.to;
            return (
              <li key={route.to}>
                <a
                  href={route.to}
                  className={`text-lg pr-4 focus:text-pink-1 md:text-base sm:text-base px-2 ${
                    isActive ? "text-red" : "text-dark"
                  }`}
                >
                  {route.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
