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
    console.log('我已经在 constructor 里将 props 和 state 初始化好了')
  }
  componentWillMount() {
    console.log('运行到这里的话，说明马上就要运行 render 了')
  }
  render() {
    console.log('嗯，这里是 render')
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
  componentDidMount() {
    console.log('已经挂载到页面里了')
  }
}

export default Welcome // 为什么要 export，为什么要加 default