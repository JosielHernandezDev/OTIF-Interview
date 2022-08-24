export const interceptor = (instance) => {
  instance.interceptors.request.use(
    (request) => {
      const token = JSON.parse(localStorage.getItem("access_token")) || null;

      if (token && request["url"].indexOf("login") < 0) {
        request.headers["Authorization"] = `${token}`;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
