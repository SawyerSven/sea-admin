<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
div,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5 {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}

body .el-table .warning-row {
  background: oldlace;
}

body .el-table .success-row {
  background: #f0f9eb;
}
</style>
