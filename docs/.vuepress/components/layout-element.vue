<template>
  
  <div>
    <h2>上中下布局</h2>
    <g-layout>
      <g-layout>
        <g-header class="demo" style="background:#7DBCEA;">header</g-header>
        <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
        <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
      </g-layout>
    </g-layout>
    <h2>代码</h2>
    <pre><code>{{content1}}</code></pre>
    <h2>顶部-侧边布局</h2>
    <g-layout style="overflow:hidden;">
      <g-header class="demo" style="background:#7DBCEA;">header</g-header>
      <g-layout>
        <g-sider class="demo" style="background:#3BA0E9;width:150px;height:200px;">sider</g-sider>
        <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
      </g-layout>
      <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
    </g-layout>
    <h2>代码</h2>
    <pre><code>{{content2}}</code></pre>
    <h2>侧边布局</h2>
    <g-layout style="overflow:hidden;">
      <g-sider class="demo" style="background:#3BA0E9;width:200px;">sider</g-sider>
      <g-layout>
        <g-header class="demo" style="background:#7DBCEA;">header</g-header>
        <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
        <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
      </g-layout>
    </g-layout>
    <h2>代码</h2>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Sider from '../../../src/sider'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'  
  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-sider': Sider,
      'g-content': Content,
      'g-footer': Footer
    },
    data () {
      return {
        content1: `
<g-layout>
  <g-layout>
    <g-header class="demo" style="background:#7DBCEA;">header</g-header>
    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
    <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
  </g-layout>
</g-layout>
    `.trim(),
        content2: `
<g-layout style="overflow:hidden;">
  <g-header class="demo" style="background:#7DBCEA;">header</g-header>
  <g-layout>
    <g-sider class="demo" style="background:#3BA0E9;width:150px;height:200px;">sider</g-sider>
    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
  </g-layout>
  <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
</g-layout>
      `.trim(),    
        content3: `
<g-layout style="overflow:hidden;">
  <g-header class="demo" style="background:#7DBCEA;">header</g-header>
  <g-layout>
    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
    <g-sider class="demo" style="background:#3BA0E9;width:150px;height:200px;">sider</g-sider>
  </g-layout>
  <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
</g-layout>  
      `.trim(),    
        content4: `
<g-layout style="overflow:hidden;">
  <g-sider class="demo" style="background:#3BA0E9;width:200px;">sider</g-sider>
  <g-layout>
    <g-header class="demo" style="background:#7DBCEA;">header</g-header>
    <g-content class="demo" style="background:#108EE9;height:200px;">content</g-content>
    <g-footer class="demo" style="background:#7DBCEA;">footer</g-footer>
  </g-layout>
</g-layout>
      `.trim(),                  
      }
    }
  }
</script>
<style scoped lang="scss">
  * {
      // margin: 0;
      // padding: 0;
      box-sizing: border-box;
  }
  .demo{
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>