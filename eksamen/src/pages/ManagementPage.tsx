import NavBarManagement from "../components/management/NavBarManagement";
import { Routes, Route } from "react-router-dom"; 
import { AddNewGame, UpdateGame, DeleteGame } from "../components/management";

const ManagementPage = () => {
    return(
        <section>
                <section>
                    <NavBarManagement/>
                </section>
                <section>
                    <Routes>
                        <Route path="add-new-game" element={<AddNewGame/>} />
                        <Route path="update-game" element={<UpdateGame/>} />
                        <Route path="delete-game" element={<DeleteGame/>} />
                    </Routes>
                </section>
        </section>
    )
}

export default ManagementPage;