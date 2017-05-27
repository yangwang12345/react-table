import React from 'react';

const Save=(props)=>{
  if(!props.save) return null;
  return  <p className='tips'>修改成功</p>
}
export default class StaffDetail extends React.Component{
    constructor(props){
      super(props);
      this.handleClose=this.handleClose.bind(this);
      this.handleFinish=this.handleFinish.bind(this);
      this.state={
        save:false
      }
    }
    handleClose(){
      this.props.onClickClose();
      this.setState({
        save:false
      })
    }
    handleFinish(e){
      let staffDetail = this.props.staffDetail;  
      e.preventDefault();
      let item = {};
      item.sex = document.getElementById('staffEditSex').value;
      item.id = document.getElementById('staffEditId').value;
      item.name = document.getElementById('staffEditName').value.trim();
      item.age = document.getElementById('staffEditAge').value.trim();
      item.descrip = document.getElementById('staffEditDescrip').value.trim();
      item.key=staffDetail.key;
      this.props.editStaffItem(item);
      this.setState({
        save:true
      })
    }
    render(){
      let staffDetail = this.props.staffDetail;  
      if(!staffDetail)
        return null;
      return (
          <div className="overLay">
            <h4 style={{'textAlign':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
            <hr/>
            <table>
              <tbody>
                <tr>
                <th>姓名</th>
                <td><input id='staffEditName' type="text" defaultValue={staffDetail.info.name}></input></td>
              </tr>
                <tr>
                <th>年龄</th>
                <td><input id='staffEditAge' type="text" defaultValue={staffDetail.info.age}></input></td>
              </tr>
                <tr>
                <th>性别</th>
                <td>
                  <select defaultValue={staffDetail.info.sex} id='staffEditSex'>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
                </td>
              </tr>
              <tr>
                <th>身份</th>
                        <td>
                  <select defaultValue={staffDetail.info.id} id='staffEditId'>
                  <option value="主任">主任</option>
                  <option value="老师">老师</option>
                  <option value="学生">学生</option>
                  <option value="实习">实习</option>
                </select>
                </td>
              </tr>
                <tr>
                <th>个人描述</th>
                <td><textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}></textarea></td>
              </tr>
              </tbody>
            </table>
            <Save save={this.state.save}/>
            <button onClick={this.handleFinish}>完成</button>
            <button onClick={this.handleClose}>关闭</button>
          </div>
      );
    }
}