import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";

// 同构: 一套React代码，在服务器端执行一次，在客户端再执行一次

const Home = (props) => {
  return (
    <div>
      <Header />
      <div>This is {props.name}</div>
      <button onClick={() => alert("click")}>click</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps, null)(Home);
