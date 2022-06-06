import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout'
import { Homepage } from './pages/Homepage';
import Cards from './pages/Cards';
import Tour from './pages/Tour';
import Other from './pages/Other';
import "./index.css";
// import { About } from './pages/Aboutpage';
// import { Blogpage } from './pages/Blogpage';
// import { Createpost } from './pages/Createpost';
// import { Editpost } from './pages/Editpost';
// import { Singlepage } from './pages/Singlepage';
// import { Notfoundpage } from './pages/Notfoundpage';
// import { LoginPage } from './pages/Loginpage';


// import { RequireAuth } from './hoc/RequireAuth'
// import { AuthProvider } from './hoc/AuthProvider'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="cards" element={<Cards />} />
          <Route path="tour" element={<Tour />} />
          <Route path="other" element={<Other />} />
          {/* <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
