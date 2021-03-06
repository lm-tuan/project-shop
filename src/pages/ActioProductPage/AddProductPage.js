import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as  actions from './../../actions/index';

class ActioProductPage  extends Component {
	 constructor(props){
		super(props);
		this.state = {
		  id:'',
		  txtName:'',
		  numberPrice:'',
		  numberRating:'',
		  fileImg:'https://firebasestorage.googleapis.com/v0/b/uploads-d88c1.appspot.com/o/DBH10.jpg?alt=media&token=9e91035c-24a2-4780-9ae0-fc2646ac0a95',
		  description:'',
		}
	 }

	 componentDidMount(){
		const {match} = this.props;
		if( match){
		  this.props.atcGetProductRequest(match.params.id);
		}
	 }

	 componentWillReceiveProps(nextProps){
		if(nextProps && nextProps.itemEditing){
		  let {id, name,price,rating,linkImg,description} = nextProps.itemEditing;
		  this.setState({
			 id,
			 txtName:name,
			 numberPrice:price,
			 numberRating:rating,
			 fileImg:linkImg,
			 description
		  })
		}
	 }

	 onChange = (e) => {
		let name = e.target.name;
		var value = e.target.value;
		this.setState({
		  [name]:value
		})
	 }

	 onSubmit = (e) => {
		e.preventDefault();
		const {history} = this.props;
		const {id, txtName,numberPrice,numberRating,fileImg,description} = this.state;
		if(id==='') {
		  let data = {
			 id ,
			 name: txtName,
			 rating: parseInt(numberRating),
			 price: parseInt(numberPrice),
			 description: description,
			 linkImg: fileImg
		  }
		  this.props.actAddProductRequest(data);
		  }else{
			let product = {
				id:id,
				name: txtName,
				rating: parseInt(numberRating),
				price: parseInt(numberPrice),
				description: description,
				linkImg: fileImg
			}
		  this.props.actUpdateProductRequest(product);
		}
		history.goBack();
	 }

	 render(){

		  return (
			 <div className="container mt-100 mb-100">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="card">
							<div className="card-header">
								Thêm sản phẩm
							</div>
							<div className="card-body">
							<form onSubmit = {this.onSubmit}>
										<div className="form-group">
											<label >Name Product</label>
											<input name="txtName" type="text" className="form-control" value={this.state.txtName} onChange = {this.onChange} />

										</div>
										<div className="form-group">
											<label >Price</label>
											<input name="numberPrice" type="number" className="form-control" value={this.state.numberPrice} onChange = {this.onChange}  />
										</div>
										<div className="form-group">
											<label >Rating</label>
											<input name="numberRating" type="number" min="1" max="5" className="form-control" value={this.state.numberRating} onChange = {this.onChange} />
										</div>
										<div className="form-group">
											<label >Description</label>
											<textarea name="description" className="form-control" value={this.state.description} onChange = {this.onChange}  rows="3"></textarea>
										</div>

										<div className="row">
										<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
											<button type="submit" className="btn btn-outline-success btn-block">
											{
												this.state.id === '' ? 'Add' : ' Lưu'
											}</button>
										</div>
										<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
											<Link to="/products" className="btn btn-outline-warning btn-block">Back</Link>
										</div>
										</div>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		  );
		}
   }

const mapStateToProps = state => {
  return {
	 itemEditing:state.itemEditing
  	}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
		actAddProductRequest: (product) => {
		  return dispatch(actions.actAddProductRequest(product));
	 },
		atcGetProductRequest:(id) => {
		  return dispatch(actions.atcGetProductRequest(id));
	 },
	 actUpdateProductRequest:(product) => {
		return dispatch(actions.actUpdateProductRequest(product));
	 }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ActioProductPage);