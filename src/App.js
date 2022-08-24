import AuthProvider from "./auth/authProvider";
import AppRouter from "./routers/appRouter";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
