import React,{Component} from 'react';

export default class StaffHeader extends Component{
    constructor(props){
      super(props);
      this.handlerSearch=this.handlerSearch.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSortAge=this.handleSortAge.bind(this);
      this.filterStaff=this.filterStaff.bind(this)
    }

    handlerSearch(v){
      document.getElementById('idSelect').value="";
      document.getElementById('orderSelect').value=""
      let value=v.target.value;
        this.props.searchStaff(value);
    }
    handleChange(e){
      document.getElementById('searchBar').value="";
      document.getElementById('orderSelect').value=""
      let value=e.target.value;
      this.props.searchStaff(value);
    }
    filterStaff(e){
      let value=e.target.value;
      this.props.filterStaff(value);
    }
    handleSortAge(e){
      let value=e.target.value;
      this.props.sortStaff(value);
    }
    render(){
        return (
          <div>
              <h3 style={{'textAlign':'center'}}>人员管理系统</h3>
              <table className="optHeader">
                <tbody>
                  <tr>
                    <td className="headerTd"><input id='searchBar' onChange={this.handlerSearch} type='text' placeholder='Search...' /></td>
                    <td className="headerTd">
                        <label htmlFor='idSelect'>人员筛选</label>
                        <select id='idSelect' onChange={this.filterStaff}>
                            <option value='0'>全部</option>
                            <option value='1'>主任</option>
                            <option value='2'>老师</option>
                            <option value='3'>学生</option>
                            <option value='4'>实习</option>
                        </select>
                    </td>
                    <td>
                        <label htmlFor='orderSelect'>排列方式</label>
                        <select id='orderSelect' onChange={this.handleSortAge}>
                            <option value='0'>身份</option>
                            <option value='1'>年龄升</option>
                            <option value='2'>年龄降</option>
                        </select>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
    }
}
