import { useState } from 'react';
import "./State.css"

const Home = () => {
    //let name = 'xxxxx';
    const [hari, setHari] = useState('Hari ini');
    const [tanggal, setTanggal] = useState('Minggu');

    const handleClick = () => {
        setHari('Besok');
        setTanggal('Senin');
    }

    return (
        <div className="home">
            <h2>Kelompok 36</h2>
            <p>{ hari } adalah hari { tanggal }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;