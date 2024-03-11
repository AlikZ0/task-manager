// App.vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.app{
  padding: 20px;
}
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display:flex ;
  align-items: center;
  justify-content: space-between;
}
form{
  display: flex;
  flex-direction: column;
}
strong{
  color:  teal;
}
.input{
  width: 97%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn{
  margin-top: 15px;
  margin-right: 10px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
a{
  text-decoration: none;
}
.posts{
  padding: 15px;
  width: 100%;
  margin-top: 15px;
  display:flex ;
  align-items: center;
  justify-content: space-between;
}
.G-flex_a_tag{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* justify-content: space-between; */
  margin-bottom: 30px ;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active в <2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
  /* transform: translateZ(10px); */
}
</style>
