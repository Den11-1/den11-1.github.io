import './AdditionalOptions.css';
import { auth } from '../../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdditionalOptions({currentUser, setIs_visible_additional_options}) {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/")        
            console.log("User logged out");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div class="additional-options">
            <div class="overlap-wrapper">
                <div class="overlap">
                    <div class="background" onClick={() => setIs_visible_additional_options(false)}></div>
                    <div class="menu">
                        <img class="user-icon" src="https://c.animaapp.com/maodwzbnDbMrau/img/user-icon.png" />
                        <div class="user-name">
                            <div class="text-wrapper-10">{currentUser.email.split("@")[0]}</div>
                            <div class="text-wrapper-11">{currentUser.email}</div>
                        </div>
                        <div class="text-wrapper-12">Notes</div>
                        <div class="text-wrapper-13">Calendar</div>
                        <div class="text-wrapper-14">Manage Lists</div>
                        <div class="text-wrapper-15">Settings</div>
                        <div class="text-wrapper-16">Support</div>
                        <div class="text-wrapper-17" onClick={handleLogout}>Log Out</div>
                    </div>
                </div>
            </div>
        </div>
    );
}