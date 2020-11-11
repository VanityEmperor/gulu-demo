<template>
  <div>
      <h2>基础栅格</h2>
      <div>
          <g-row>
            <g-col span="24">
              <div class="blue1">col-24</div>
            </g-col>
          </g-row>
          <g-row>
            <g-col span="12">
              <div class="blue1">col-12</div>
            </g-col>
            <g-col span="12">
              <div class="blue2">col-12</div>
            </g-col>
          </g-row>
          <g-row>
            <g-col span="8">
              <div class="blue1">col-8</div>
            </g-col>
            <g-col span="8">
              <div class="blue2">col-8</div>
            </g-col>
            <g-col span="8">
              <div class="blue1">col-8</div>
            </g-col>
          </g-row>
          <g-row>
            <g-col span="6">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue2">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue2">col-6</div>
            </g-col>
          </g-row>          
      </div>
      <h2>代码</h2>
      <pre><code>{{content1}}</code></pre>
      <h2>区块间隔</h2>
      <div>
          <g-row gutter="20">
            <g-col span="12">
              <div class="blue1">col-12</div>
            </g-col>
            <g-col span="12">
              <div class="blue2">col-12</div>
            </g-col>
          </g-row>
          <g-row gutter="20">
            <g-col span="8">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="8">
              <div class="blue2">col-6</div>
            </g-col>
            <g-col span="8">
              <div class="blue1">col-6</div>
            </g-col>
          </g-row>
          <g-row gutter="20">
            <g-col span="6">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue2">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="6">
              <div class="blue2">col-6</div>
            </g-col>            
          </g-row>          
      </div>
      <h2>代码</h2>
      <pre><code>{{content2}}</code></pre>
      <h2>偏移</h2>
      <div>  
          <g-row>
            <g-col span="4">
              <div class="blue1">col-4</div>
            </g-col>
            <g-col span="18" offset="2">
              <div class="blue1">col-18</div>
            </g-col>
          </g-row>           
          <g-row>
            <g-col span="4">
              <div class="blue1">col-4</div>
            </g-col>
            <g-col span="8" offset="2">
              <div class="blue1">col-8</div>
            </g-col>
            <g-col span="8" offset="2">
              <div class="blue1">col-8</div>
            </g-col>
          </g-row>
          <g-row>
            <g-col span="4">
              <div class="blue1">col-4</div>
            </g-col>
            <g-col span="4" offset="6">
              <div class="blue1">col-6</div>
            </g-col>
            <g-col span="8" offset="2">
              <div class="blue1">col-8</div>
            </g-col>
          </g-row>         
      </div>
      <h2>代码</h2>
      <pre><code>{{content3}}</code></pre>
      <h3>属性</h3>
      <table>
        <thead>
        <tr>
          <td>参数</td>
          <td>说明</td>
          <td>类型</td>
          <td>可选值</td>
          <td>默认值</td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>gutter</td>
            <td>栅格间隔</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>栅格左侧的间隔格数</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>       
  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
  export default {
    components: {
      'g-row': Row,
      'g-col': Col
    },
    data () {
      return {
        content1: `
<g-row>
  <g-col span="24">
    <div class="blue1">col-24</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="12">
    <div class="blue1">col-12</div>
  </g-col>
  <g-col span="12">
    <div class="blue2">col-12</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="8">
    <div class="blue1">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="blue2">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="blue1">col-8</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="6">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue2">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue2">col-6</div>
  </g-col>
</g-row>        

<style scoped lang="scss">
  .blue1{
    background: #40ADFF;
    text-align: center;
    padding:10px 0;
  }
  .blue2{
    background: #0092FF;
    text-align: center;
    padding:10px 0;
  }
</style>
      `.trim(),
        content2: `
<g-row gutter="20">
  <g-col span="12">
    <div class="blue1">col-12</div>
  </g-col>
  <g-col span="12">
    <div class="blue2">col-12</div>
  </g-col>
</g-row>
<g-row gutter="20">
  <g-col span="8">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="8">
    <div class="blue2">col-6</div>
  </g-col>
  <g-col span="8">
    <div class="blue1">col-6</div>
  </g-col>
</g-row>
<g-row gutter="20">
  <g-col span="6">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue2">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="blue2">col-6</div>
  </g-col>            
</g-row>     

<style scoped lang="scss">
  .blue1{
    background: #40ADFF;
    text-align: center;
     padding:10px 0;
  }
  .blue2{
    background: #0092FF;
    text-align: center;
    padding:10px 0;
  }
</style>
      `.trim(),
        content3: `
<g-row>
  <g-col span="4">
    <div class="blue1">col-4</div>
  </g-col>
  <g-col span="18" offset="2">
    <div class="blue1">col-18</div>
  </g-col>
</g-row>           
<g-row>
  <g-col span="4">
    <div class="blue1">col-4</div>
  </g-col>
  <g-col span="8" offset="2">
    <div class="blue1">col-8</div>
  </g-col>
  <g-col span="8" offset="2">
    <div class="blue1">col-8</div>
  </g-col>
</g-row>
<g-row>
  <g-col span="4">
    <div class="blue1">col-4</div>
  </g-col>
  <g-col span="4" offset="6">
    <div class="blue1">col-6</div>
  </g-col>
  <g-col span="8" offset="2">
    <div class="blue1">col-8</div>
  </g-col>
</g-row>  

<style scoped lang="scss">
  .blue1{
    background: #40ADFF;
    text-align: center;
     padding:10px 0;
  }
  .blue2{
    background: #0092FF;
    text-align: center;
    padding:10px 0;
  }
</style>
      `.trim(),      
      }
    }
  }
</script>
<style scoped lang="scss">
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  .row{
    margin-top: 10px;
  }
  .blue1{
    background: #40ADFF;
    text-align: center;
     padding:10px 0;
  }
  .blue2{
    background: #0092FF;
    text-align: center;
    padding:10px 0;
  }
</style>