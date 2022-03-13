import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
    return(
        <>
            <h1>Hello World </h1>
            <ul>
                <Item>First Item</Item>
                <Item>Second Item</Item>
                <Item>Third Item</Item>
            </ul>
            <Card />
        </>
        
    )
}

export default App;
