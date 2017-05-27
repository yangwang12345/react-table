import React from 'react';
export default class StaffItem extends React.Component{
    constructor(props){
      super(props);
      this.handleClick=this.handleClick.bind(this);
      this.handleClickDetail=this.handleClickDetail.bind(this);
    }
    handleClickDetail(e){
        e.preventDefault();
        const key2=this.props.item.key;
        this.props.onClickDetail(key2)
    }
    handleClick (e){
        const key=this.props.item.key;
        e.preventDefault();
        this.props.removeStaffItem(key);
    }
    render(){
        return (
              <tr
                style={{'cursor': 'pointer'}}
              >
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className="itemBtn" onClick={this.handleClick}>删除</a>
                    <a className="itemBtn" onClick={this.handleClickDetail} >详情</a>
                </td>
              </tr>
        );
    }
}