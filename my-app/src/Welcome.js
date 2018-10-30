import React from 'react'; // 为什么要 import React
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
    setInterval(() => { // 搜索「JS 箭头函数 MDN」
      this.setState({
        date: new Date() // 更新 date
      })
    })
  }
  render() {
    return ( <
      div >
      <
      h1 > Hello, {
        this.props.name
      } < /h1> <
      h2 > {
        this.state.date.toString()
      } < /h2> < /
      div >
    );
  }
}

export default Welcome // 为什么要 export，为什么要加 default