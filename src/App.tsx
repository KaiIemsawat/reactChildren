import Alert from "./components/Alert";

const App = () => {
    return (
        <div>
            <Alert>
                {/* To test if <Alert></Alert> would allows complex compilation */}
                Hello <span>World</span>
            </Alert>
        </div>
    );
};

export default App;
