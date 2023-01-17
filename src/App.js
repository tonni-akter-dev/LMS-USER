import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './Pages/context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardPort from './Pages/Dashboard/DashboardPort/DashboardPort';
import MyAccount from './Pages/Dashboard/MyAccount/MyAccount';
import Books from './Pages/Dashboard/UserCatalogs/Books/Books';
import RequestForAbook from './Pages/Dashboard/UserCatalogs/Books/RequestForAbook';
import ReqFromBooks from './Pages/Dashboard/UserCatalogs/Books/ReqFromBooks';
import Journals from './Pages/Dashboard/UserCatalogs/Journals/Journals';
import Thesis from './Pages/Dashboard/UserCatalogs/Thesis/Thesis';
import About from './Pages/Home/About/About';
import AskALibrarian from './Pages/Home/AskALibrarian/AskALibrarian';
import Catalog from './Pages/Home/CatalogPages/Catalog/Catalog';
import SearchCatalog from './Pages/Home/CatalogPages/SearchCatalog/SearchCatalog';
import Home from './Pages/Home/Home/Home';
import NoticeBoard from './Pages/Home/NoticeBoard/NoticeBoard';
import AllDatabase from './Pages/Home/Resources/AllDatabase/AllDatabase';
import DetailsA from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchA/DetailsA/DetailsA';
import SearchA from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchA/SearchA';
import SearchB from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchB/SearchB';
import SearchC from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchC/SearchC';
import SearchD from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchD/SearchD';
import SearchE from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchE/SearchE';
import SearchF from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchF/SearchF';
import SearchG from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchG/SearchG';
import SearchH from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchH/SearchH';
import SearchI from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchI/SearchI';
import SearchJ from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchJ/SearchJ';
import SearchK from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchK/SearchK';
import SearchL from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchL/SearchL';
import SearchM from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchM/SearchM';
import SearchN from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchN/SearchN';
import SearchO from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchO/SearchO';
import SearchP from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchP/SearchP';
import SearchQ from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchQ/SearchQ';
import SearchR from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchR/SearchR';
import SearchS from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchS/SearchS';
import SearchT from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchT/SearchT';
import SearchU from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchU/SearchU';
import SearchV from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchV/SearchV';
import SearchW from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchW/SearchW';
import SearchX from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchX/SearchX';
import SearchY from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchY/SearchY';
import SearchZ from './Pages/Home/Resources/AllDatabase/AllDatabase/SearchZ/SearchZ';
import NewCollection from './Pages/Home/Resources/NewCollection/NewCollection';
import TopCollection from './Pages/Home/Resources/TopCollection/TopCollection';
import Register from './Pages/Login/Register/Register';
import UpdateProfile from './Pages/Dashboard/MyAccount/UpdateProfile';
import LoginFromDB from './Pages/Login/Login/LoginFromDB';
import Login from './Pages/Login/Login/Login';
import ViewThesis from './Pages/Dashboard/UserCatalogs/Thesis/ViewThesis';
function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* user routes  starts */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/asklibrarian" element={<AskALibrarian />} />
            <Route path="/noticeboard" element={<NoticeBoard />} />
            {/* resouces route */}
            <Route path="/topcollection" element={<TopCollection />} />
            <Route path="/newcollection" element={<NewCollection />} />
            <Route path="/alldatabase" element={<AllDatabase />} />
            {/* resouces route ends*/}
            <Route path="/login" element={<LoginFromDB />} />
            <Route path="/LoginFromDB" element={isLoggedIn === "true" ? <Dashboard /> : <LoginFromDB />} />
            <Route path="/register" element={<Register />} />
            {/* dashboard starts */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard></Dashboard>
              }
            >
              <Route path={`/dashboard`} element={<DashboardPort />} />
              <Route path={`/dashboard/myaccount`} element={<MyAccount />} />
              <Route path={`/dashboard/catalouge/books`} element={<Books />} />
              <Route path={`/dashboard/catalouge/journals`} element={<Journals />} />
              <Route path={`/dashboard/catalouge/thesis`} element={<Thesis />} />
              <Route path={`/dashboard/viewThesis/:id`} element={<ViewThesis />} />
              <Route path="/dashboard/reqFromBooks/:id" element={<ReqFromBooks />} />
              <Route path={`/dashboard/books/requestforAbook`} element={<RequestForAbook />} />
              <Route path={`/dashboard/updateProfile`} element={<UpdateProfile />} />
              <Route path={`/dashboard/updateProfile/:id`} element={<UpdateProfile />} />
              {/* dashboard ends */}
            </Route>
            {/* user routes  ends */}
            {/* Catalog pages------------start */}
            <Route path="/searchcatalog" element={<SearchCatalog />} />
            <Route path="/searchcatalog" element={<SearchCatalog />} />
            {/* Catalog pages------------start */}
            {/* All Database routes  starts */}
            <Route path="letterA" element={<SearchA />} />
            <Route path="letterA/:id" element={<DetailsA />} />
            <Route path="letterB" element={<SearchB />} />
            <Route path="letterC" element={<SearchC />} />
            <Route path="letterD" element={<SearchD />} />
            <Route path="letterE" element={<SearchE />} />
            <Route path="letterF" element={<SearchF />} />
            <Route path="letterG" element={<SearchG />} />
            <Route path="letterH" element={<SearchH />} />
            <Route path="letterI" element={<SearchI />} />
            <Route path="letterJ" element={<SearchJ />} />
            <Route path="letterK" element={<SearchK />} />
            <Route path="letterL" element={<SearchL />} />
            <Route path="letterM" element={<SearchM />} />
            <Route path="letterN" element={<SearchN />} />
            <Route path="letterO" element={<SearchO />} />
            <Route path="letterP" element={<SearchP />} />
            <Route path="letterQ" element={<SearchQ />} />
            <Route path="letterR" element={<SearchR />} />
            <Route path="letterS" element={<SearchS />} />
            <Route path="letterT" element={<SearchT />} />
            <Route path="letterU" element={<SearchU />} />
            <Route path="letterV" element={<SearchV />} />
            <Route path="letterW" element={<SearchW />} />
            <Route path="letterX" element={<SearchX />} />
            <Route path="letterY" element={<SearchY />} />
            <Route path="letterZ" element={<SearchZ />} />
            {/* All Database routes  ends */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
