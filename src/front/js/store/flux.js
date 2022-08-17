const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      login: async (username, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-dnlg88-jwtauthenticatio-amswopmg168.ws-eu61.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            new Error("error from login in context");
            return false;
          }
          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore(data.access_token);
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
        console.log("logging out");
      },
      getTokenFromSession: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
        console.log(
          "message from useEffect, getting token from session storage"
        );
      },
    },
  };
};

export default getState;
