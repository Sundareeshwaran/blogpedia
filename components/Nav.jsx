"use client";

import React, { useState, useEffect } from "react";
import Link from "@node_modules/next/link";
import Image from "@node_modules/next/image";
import {
  signIn,
  signOut,
  getProviders,
  useSession,
} from "@node_modules/next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center" prefetch={true}>
        <Image
          src="/assets/images/logo.png"
          alt="Blogpedia Logo"
          height={34}
          width={34}
          className="object-contain"
          loading="lazy"
        />
        <p className="logo_text underline decoration-sb-400">Blogpedia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-blog" className="black_btn" prefetch={true}>
              Create own Blog
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile" prefetch={true}>
              <Image
                src={session?.user.image}
                alt="Profile"
                height={34}
                width={34}
                className="rounded-full"
                loading="lazy"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="Profile"
              height={34}
              width={34}
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
              loading="lazy"
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                  prefetch={true}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-blog"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                  prefetch={true}
                >
                  Create own Blog
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
