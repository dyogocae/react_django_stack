import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists: null, loading: true }
    
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'token c4d840ee9846e053cd06b80afb535a173dc24ed3';
        
        var url = "http://127.0.0.1:8000/list/"
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }
    
    render()
    {
        return (
            <div>
                <ListComponent listName={"Minha Lista"} />
                <ListComponent listName={"Minha Lista 2"} />
            </div>
        )
    }
}