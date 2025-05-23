import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://blogpedia-six.vercel.app"),
  title: "Blogpedia",
  description:
    "Blogpedia is a community-driven platform for developers passionate about AI, Full Stack, and MERN technologies. Join us to learn, share, and grow.",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Blogpedia",
    description:
      "Blogpedia is a community-driven platform for developers passionate about AI, Full Stack, and MERN technologies. Join us to learn, share, and grow.",
    url: "https://blogpedia-six.vercel.app/",
    siteName: "Blogpedia",
    images: [
      {
        url: "https://blogpedia-six.vercel.app/assets/images/logo.png",
        width: 680,
        height: 680,
        alt: "Blogpedia Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogpedia",
    description:
      "Blogpedia is a community-driven platform for developers passionate about AI, Full Stack, and MERN technologies. Join us to learn, share, and grow.",
    images: ["https://blogpedia-six.vercel.app/assets/images/logo.png"],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
            <footer className="relative w-full">
              <hr className="text-sb-950/20" />
              <div className="flex flex-row justify-between items-center w-full text-sb-950/70">
                <p className="mt-2 font-bold md:text-lg text-base">
                  Explore. Learn. Evolve. Blogpedia
                </p>
                <p className="font-medium text-base">v0.1</p>
              </div>
            </footer>
            <SpeedInsights />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
