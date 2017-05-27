import React from 'react';
export default class StaffFooter extends React.Component{
    constructor(props){
      super(props);
      this.handleChange=this.handleChange.bind(this);
      this.handlerAddClick=this.handlerAddClick.bind(this);
      this.state={
        name:'',
        age:'',
        sex:'男',
        descrip:'',
        id:'主任'
      }
    }
    handleChange(e){
      const target=e.target;
      const name=target.name;
      this.setState({
        [name]:target.value
      })
    }
    handlerAddClick(e){
      const item=Object.assign({},this.state);
      e.preventDefault();
      this.props.addStaffItem(item);
      this.setState({
        name:'',
        age:'',
        sex:'男',
        descrip:'',
        id:'主任'
      })
    }
    render(){
        return (
          <div>
            <h4 style={{'textAlign':'center'}}>人员新增</h4>
            <hr/>
            <form id='addForm' className="addForm">
                <div>
                  <label htmlFor='staffAddName' style={{'display': 'block'}}>姓名</label>
                  <input name="name" value={this.state.name} type='text' onChange={this.handleChange} placeholder='Your Name'/>
                </div>
                <div>
                  <label htmlFor='staffAddAge' style={{'display': 'block'}}>年龄</label>
                  <input name="age" type='text' value={this.state.age} onChange={this.handleChange} placeholder='Your Age(0-150)'/>
                </div>
                <div>
                  <label htmlFor='staffAddSex' style={{'display': 'block'}}>性别</label>
                  <select name="sex" value={this.state.sex} onChange={this.handleChange} id='staffAddSex'>
                    <option value='男'>男</option>
                    <option value='女'>女</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='staffAddId' style={{'display': 'block'}}>身份</label>
                  <select value={this.state.id} name="id" onChange={this.handleChange} id='staffAddId'>
                    <option value='主任'>主任</option>
                    <option value='老师'>老师</option>
                    <option value='学生'>学生</option>
                    <option value='实习'>实习</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
                  <textarea value={this.state.descrip} name="descrip" onChange={this.handleChange} ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                </div>
                <p ref="tips" className='tips'  style={{'display': 'none'}}>提交成功</p>
                <p ref='tipsUnDone' className='tips' style={{'display': 'none'}}>请录入完整的人员信息</p>
                <p ref='tipsUnAge' className='tips' style={{'display': 'none'}}>请录入正确的年龄</p>
                <div>
                  <button onClick={this.handlerAddClick}>提交</button>
                </div>
            </form>
          </div>
        )
    }
}