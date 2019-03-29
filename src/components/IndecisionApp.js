import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state ={
        options : [],
        selectedOption : undefined
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
    handleDeleteAll= ()=>{
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     };
        // });

        this.setState( ()=>({ options:[] })  );
    }

    handleDeleteOption=(removeOption)=>{
        this.setState((prevState)=>({ options: prevState.options.filter((opt)=>opt!==removeOption) }));
    }
    handlePick=()=>{
        if(this.state.options.length>0){
            let option = Math.floor(Math.random()*this.state.options.length);
            this.setState(()=>({selectedOption: this.state.options[option]}));
        }
    }

    handleAddOption=(option)=>{
        if(!option){
            return 'Please enter valid Option';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This Option already exist!';
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }

    handleClearOption = ()=>{
        this.setState(()=>({selectedOption: undefined}));
    }
    render(){
        const subtitle ="Put your life in the Hands of Computer!!";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOption ={this.state.options.length>0} handlePick= {this.handlePick}/>
                    <div className="widget">
                        <Options  options={this.state.options} handleDeleteAll={this.handleDeleteAll} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption= {this.state.selectedOption} handleClearOption = {this.handleClearOption}/>
            </div>
        );
    }
}