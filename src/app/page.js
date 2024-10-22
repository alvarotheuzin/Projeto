'use client';

import { Carousel } from "react-bootstrap";
import Pagina from "./components/Pagina";
import './styles/style.css';

export default function Page() {
    return (
        <Pagina>
            <div className="full-width-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tpc.googlesyndication.com/simgad/9741072406721062648?"
                            alt="Slide 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tpc.googlesyndication.com/simgad/9741072406721062648?"
                            alt="Slide 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tpc.googlesyndication.com/simgad/9741072406721062648?"
                            alt="Slide 3"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </Pagina>
    );
}
