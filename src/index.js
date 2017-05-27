import React from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import './index.css'
import Staff from './Staff.js';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            staff : new Staff(),
            staffDetail: null
        }
        this.addStaffItem=this.addStaffItem.bind(this)
        this.removeStaffItem=this.removeStaffItem.bind(this)
        this.searchStaff=this.searchStaff.bind(this);
        this.onClickDetail=this.onClickDetail.bind(this);
        this.onClickClose=this.onClickClose.bind(this);
        this.editStaffItem=this.editStaffItem.bind(this);
        this.sortStaff=this.sortStaff.bind(this);
        this.filterStaff=this.filterStaff.bind(this);
    }
    addStaffItem(item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }
    editStaffItem(item){
        this.setState({
            staff: this.state.staff.editStaffItem(item)
        });
    }
    removeStaffItem (key){
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        });
    }
    searchStaff(value){
        this.setState({
            staff: this.state.staff.searchStaff(value)
        });
    }
    sortStaff(value){
        this.setState({
            staff: this.state.staff.sortStaff(value)
        });
    }
    filterStaff(value){
        this.setState({
            staff: this.state.staff.filtStaff(value)
        });
      }
    onClickDetail(key){
        this.setState({
          staffDetail: this.state.staff.staff.filter(item => {
            return item.key === key;
          })[0]
        });
    }
    onClickClose(){
        this.setState({
            staffDetail:null 
        });
    }
    render(){
      return (
        <div>
          <StaffHeader searchStaff={this.searchStaff} sortStaff={this.sortStaff} filterStaff={this.filterStaff}/>
          <StaffItemPanel onClickDetail={this.onClickDetail} items={this.state.staff.staff} removeStaffItem={this.removeStaffItem}/>
          <StaffFooter addStaffItem={this.addStaffItem}/>
          <StaffDetail editStaffItem={this.editStaffItem} staffDetail={this.state.staffDetail} onClickClose={this.onClickClose}/>
        </div> 
      );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);