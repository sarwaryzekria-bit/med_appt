import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./components/Notification";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import InstantConsultation from "./components/InstantConsultation";
import ReviewForm from "./components/ReviewForm";


function App() {
  return (
    <BrowserRouter>
          <Notification>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
				 <Route path="<component_route>" element={<component_name/>}/> //Replace the component_route with the component path and component_name with the component name as imported in the App.js file. 
              </Routes>
          </Notification>
          <ReviewForm
            doctorName="Dr. Sarah Johnson"
            specialty="Cardiologist"
            consultationDate="September 15, 2026"
          />
    </BrowserRouter>
  );
}

export default App;