import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一

const store = {
  counterStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
