import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList.js";
import AddUser from "./components/AddUser.js";
import EditPengguna from "./components/EditPengguna.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditPengguna/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
