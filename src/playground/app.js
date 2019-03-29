class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options : []
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        }
        catch(e){
            //swallow the error
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!=this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWilUnmount');
    }
    handleDeleteAll (){
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     };
        // });

        this.setState( ()=>({ options:[] })  );
    }

    handleDeleteOption(removeOption){
        this.setState((prevState)=>({ options: prevState.options.filter((opt)=>opt!==removeOption) }));
    }
    handlePick(){
        if(this.state.options.length>0){
            let option = Math.floor(Math.random()*this.state.options.length);
            alert(this.state.options[option]);
        }
    }

    handleAddOption(option){
        if(!option){
            return 'Please enter valid Option';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This Option already exist!';
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }

    render(){
        const subtitle ="Put your life in the Hands of Computer!!";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOption ={this.state.options.length>0} handlePick= {this.handlePick}/>
                <Options  options={this.state.options} handleDeleteAll={this.handleDeleteAll} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps ={
    title: "Indecision App"
}

const Action = (props)=>{
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOption}>What Should I do?</button>
        </div>
    );
}

const Options = (props)=>{
    return (
        <div>
            <button onClick={props.handleDeleteAll}>removeAll</button>
            {props.options.length===0 && <p>Please add an option to get started</p>}
            <ol>
               {props.options.map((option,index)=>
                    <li key={index}><Option option={option} handleDeleteOption={props.handleDeleteOption}/></li>
                )}
            </ol>
        </div>
    );
}

const Option = (props)=>{
    return (
        <div>
            {props.option}
            <button onClick={(e)=>{props.handleDeleteOption(props.option)}}>Remove</button>
        </div>  
    );
}
// class Option extends React.Component{
//     render(){
//         return (
//             <li>{this.props.option}</li>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value= null;
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p> {this.state.error }</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type ="text" name="option"/>
                    <button> Add </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));