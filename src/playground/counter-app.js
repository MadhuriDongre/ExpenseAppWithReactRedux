let count = 0;
const addOne = () => {
    count++;
    renderApp();
    console.log('added 1!!', count);
};
const minusOne = () => {
    count--;
    renderApp();
    console.log('subtracted 1!!!', count);
};
const reset = () => {
    count = 0;
    renderApp();
    console.log('Reset value')
};

const renderApp = () => {
    const templateUI = (
        <div>
            <h1>Counter</h1>
            <button className="btn btn-primary m-2 p-1" onClick={addOne}>+1</button>
            {count}
            <button className="btn btn-primary m-2 p-1" onClick={minusOne}>-1</button>
            <button className="btn btn-warning p-1" onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateUI, document.getElementById('app'));
};
renderApp();