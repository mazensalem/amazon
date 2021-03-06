import React from "react";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/client";

export default function SignIn({ providers, csrfToken }) {
  return (
    <>
      <div className="bg-gray-100 w-screen h-screen flex flex-col items-center justify-start pt-10">
        <div className="bg-white p-10 shadow-md w-2/4">
          <h1 className="text-yellow-500 mb-5 font-bold text-xl">
            Account Login
          </h1>
          <div className="text-center justify-between mt-3.5 flex flex-col md:flex-row">
            {Object.values(providers).map((provider) => {
              if (provider.name === "Email") {
                return;
              }
              return (
                <div
                  className="bg-blue-500 p-1 rounded-md mt-2"
                  key={provider.name}
                >
                  <button
                    onClick={() => {
                      signIn(provider.id);
                    }}
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });
  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await getProviders(context),
    csrfToken: await getCsrfToken(context),
  };
};
