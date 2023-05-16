import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
    return (
        <>
            <div>
                <Alert>
                    {/* To test if <Alert></Alert> would allows complex compilation */}
                    Hello <span>World</span>
                </Alert>
            </div>
            <Button color="warning" onClick={() => console.log("Click")}>
                My Button
            </Button>
        </>
    );
};

export default App;
