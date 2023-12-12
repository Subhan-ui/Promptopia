import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia | Subhan's",
  description:
    "This is a next js project created by Subhan for just learning purposes.",
};

export default function Layouts({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider >
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
              {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
