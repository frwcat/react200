import React, {Component} from 'react';
import R79_StrAddButton from '../../component/part3/R79_StrAddButton';
import { connect } from 'react-redux';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'

class R079 extends Component{
  render(){
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.str}</span><br/>
        <R79_StrAddButton></R79_StrAddButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  str: state.data.str,
});

export default connect(mapStateToProps)(R079);