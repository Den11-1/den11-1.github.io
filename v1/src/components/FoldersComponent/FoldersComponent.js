import './FoldersComponent.css';
import { Link } from "react-router-dom";

export default function FoldersComponent({setTab}) {
    return (
        <>
        <div class="foldersComponent">
            <div class="div">
                <div class="overlap">
                    <div class="div-2">
                        <div class="text-wrapper-5" onClick={() => setTab(0)}>folders</div>
                        <Link to="/open_folders"><div class="studying">
                            <img class="line" src="/v1/build/images/Line_r.svg" />
                            <div class="text-wrapper-6">studying</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow.png" />
                        </div></Link>
                        <div class="studying-2">
                            <img class="line" src="/v1/build/images/Line_g.svg" />
                            <div class="text-wrapper-6">traveling</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow-1.png" />
                        </div>
                        <div class="studying-3">
                            <img class="line" src="/v1/build/images/Line_y.svg" />
                            <div class="text-wrapper-6">hobby</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow-2.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}