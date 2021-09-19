import { useState } from 'react';
import "./State.css"

const Home = () => {
    //let name = 'afrina';
    const [name, setName] = useState('afrina');
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName('jeremy');
        setAge(21);
    }

    return (
        <div className="home">
            <h2>Kelompok 36</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;