import React, {useState, useEffect} from "react";

// create your App component here
function App(){
    const [dogImage, setDogImage] = useState((null));

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setDogImage(data.message)
            });
    }, []);


    if (!dogImage){
        return (<p>Loading...</p>);
    } else {
        return(<img src={dogImage} alt="A Random Dog" />);
    }
}

export default App;