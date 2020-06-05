<template>
  <div id="app">
    <h1>YJ의 도서 목록</h1>
    <!-- <ul>
      <li v-for="item in books" v-bind:key="item.id">{{item.title}}</li>
    </ul> -->
    <table>
      <thead>
        <tr><th>도서번호</th><th>도서이름</th><th>출판사</th><th>저자</th><th>재고량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books" v-bind:key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.publisher}}</td>
          <td>{{item.author}}</td>
          <td>{{item.stock}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      books: [
        {id:1, title:'책 1', publisher:'출판사 1', author:'지은이 1', stock: 2},
        {id:2, title:'책 2', publisher:'출판사 2', author:'지은이 2', stock: 0},
        {id:3, title:'책 3', publisher:'출판사 3', author:'지은이 3', stock: 5},
        {id:4, title:'책 4', publisher:'출판사 4', author:'지은이 4', stock: 4}
      ]
    }
  }
}
</script>

<style>
  table{
    width: 100%;
    border-collapse: collapse;
  }
  tr:nth-of-type(odd){
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: bold;
  }
  td, th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
  }
</style>
