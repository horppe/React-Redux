import React, { Component } from 'react';

class ProductRow extends Component{
	render(){
		if (this.props.stocked === true) {
			return (
				<tr><td>{this.props.name}</td><td>{this.props.price}</td></tr>
			)
		} else if (this.props.stocked === false){
		return(
			<tr className="notStocked"><td>{this.props.name}</td><td>{this.props.price}</td></tr>
		)
	}
	}
}

class ResultContent extends Component{

	render(){
		const data = this.props.data;
		var category = this.props.category;
		var result = [];
		for(var i = 0; i < data.length; i++){
			const product = data[i];
			if(product.category === category){
			result.push({name: product.name, price: product.price, stocked: product.stocked});
			}
		}
		//Very important part of code
		var elements = [];
		for(var i = 0; i < result.length; i++){
			const data = result[i];
			elements.push((<ProductRow name={data.name} price={data.price} stocked={data.stocked} />));
		}


		return (
			<tbody>
			<tr><th colspan="2" className="header-category">{category}</th></tr>
				{elements}
			</tbody>
		)
}
}

class SearchBar extends Component{

	render(){
				return (
				<div className="search-bar">
 	 
					<input type="text" name="search" placeholder="Search" onChange={this.props.searchHandler}/>
 			     
 	 	    <p>
				<input type="checkbox" value={false} name="onlyStock" onChange={this.props.stockHandler} />
   	 	    <span className="onlyStocked">Only Show Products in Stock</span>
  	  	  </p>
				</div>
			);
	}
}


class ResultTable extends Component{

	render(){

		return (
		<table>
				<th>
					<td colspan="1">Name</td></th> <th> <td colspan="1">Price</td>
				</th>
				<ResultContent category={this.props.categories[0]} data={this.props.data} />
				<ResultContent category={this.props.categories[1]} data={this.props.data} />

		</table>
	);
	}
}

class ProductTable extends Component{

constructor(props){
		super(props);
		this.state = {
			searchName: "",
			onlyStocked: false,
			data: this.props.data
		};

		this.searchHandler = this.searchHandler.bind(this);
		this.stockHandler = this.stockHandler.bind(this);
		this.categories = [];
		this.data = props.data;
		for(var i = 0; i < this.data.length; i++){
			const category = this.data[i].category; //Extract the exact categories from props.dataArray
			if(!this.categories.includes(category)){
				this.categories.push(category);
			}
		}

	}

	searchHandler(event){
		this.setState({searchName: event.target.value});
		this.setData();
	}

	stockHandler(event){
		this.setState({onlyStocked: event.target.value});
	}

	setData(){
		const regex = /\w/;
		if (!(regex.test(this.state.searchName))) {
			alert("I am here")
			this.setState({data: this.props.data});
		}
		else {
			var search = this.state.searchName;
			var data = this.props.data.slice();
			var compData = [];
				for (var i = 0; i < data.length; i++) {
					var tempData = data[i];
					if (tempData.name.includes(search)) {
						compData.push(tempData);
					}
				}
			this.setState({data: compData});
		}


	}



	render(){

		return (
			<div className="product-table">
			<div>{this.state.searchName}</div>
				<SearchBar searchHandler={this.searchHandler} stockHandler={this.stockHandler} />
				<ResultTable categories={this.categories} data={this.state.data}/>
			</div>
		)
	}
}


export default ProductTable;
