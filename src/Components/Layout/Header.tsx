import { Link } from "react-router-dom";
import { header as headerData, IHeaderItem } from "../../Content/header.en.ts";
import {useEffect, useState} from "react";

const Content: React.FC<{ items: IHeaderItem[] }> = ({ items }) => (
  <ul className="menu menu-horizontal">
    {items.map((item, index) => (
      <li key={index}>
        {item.children.length > 0 ? (
          <details>
            <summary>{item.name}</summary>
            <ul className="bg-base-100">
              <Content items={item.children} />
            </ul>
          </details>
        ) : (
          <Link className="link link-hover" to={item.url}>
            {item.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const ContentVertical: React.FC<{ items: IHeaderItem[] }> = ({ items }) => (
    <ul className="menu menu-vertical">
        {items.map((item, index) => (
        <li key={index}>
            {item.children.length > 0 ? (
            <details>
                <summary>{item.name}</summary>
                <ul className="bg-base-100">
                <ContentVertical items={item.children} />
                </ul>
            </details>
            ) : (
            <Link className="link link-hover" to={item.url}>
                {item.name}
            </Link>
            )}
        </li>
        ))}
    </ul>
    );
export const Header: React.FC = () => {
    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem("Login") === "true";
        setLoggedin(loginStatus);
    }, []);
  const Title = (
    <div className="flex-1">
      <Link to="/">
        <img className="lg:h-16 h-8" src={headerData.titleImage} alt="title" />
      </Link>
    </div>
  );
  const SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
  const Hamburger = (
    <div className="flex-none lg:hidden">
      <label htmlFor="my-drawer-3" className="btn btn-ghost lg:hidden">
        {SVG}
      </label>
    </div>
  );
  const drawer = (
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-200">
        <ContentVertical items={headerData.content} />
          <div className="flex flex-row w-full justify-center">
              {loggedin? <button onClick={()=>{
                  localStorage.setItem("Login", "false");
                  window.location.replace("/");
              }} className="btn btn-primary btn-sm">Logout</button>:<>
              <Link to={"/login"} className="btn btn-primary btn-sm">
                  Login
              </Link>
              <Link to={"/register"} className="btn ml-1 btn-primary btn-sm">
                  Register
                </Link>
              </>}
          </div>
      </ul>
    </div>
  );
  return (
    <header className="navbar drawer bg-base-100">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      {Title}
      {Hamburger}
      <div className="hidden lg:flex">
        <Content items={headerData.content} />
          {loggedin? <button onClick={()=>{
                localStorage.setItem("Login", "false");
                window.location.replace("/");
          }} className="btn btn-primary btn-sm">Logout</button>:<>
              <Link to={"/login"} className="btn btn-primary btn-sm">
                  Login
              </Link>
              <Link to={"/register"} className="btn ml-1 btn-primary btn-sm">
                  Register
              </Link>
          </>}
      </div>
      {drawer}
    </header>
  );
};
