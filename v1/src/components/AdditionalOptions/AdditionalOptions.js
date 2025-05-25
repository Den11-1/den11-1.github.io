import './AdditionalOptions.css';

export default function AdditionalOptions({setIs_visible_additional_options}) {
    return (
        <div class="additional-options">
            <div class="overlap-wrapper">
                <div class="overlap">
                    <div class="background" onClick={() => setIs_visible_additional_options(false)}></div>
                    <div class="menu">
                        <img class="user-icon" src="https://c.animaapp.com/maodwzbnDbMrau/img/user-icon.png" />
                        <div class="user-name">
                            <div class="text-wrapper-10">Sofiia Balaniuk</div>
                            <div class="text-wrapper-11">sophiabalanyuk11@gmail.com</div>
                        </div>
                        <div class="text-wrapper-12">Notes</div>
                        <div class="text-wrapper-13">Calendar</div>
                        <div class="text-wrapper-14">Manege Lists</div>
                        <div class="text-wrapper-15">Settings</div>
                        <div class="text-wrapper-16">Support</div>
                        <div class="text-wrapper-17">Log Out</div>
                    </div>
                </div>
            </div>
        </div>
    );
}