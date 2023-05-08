<script>
    export default{
        data(){
          return {
            // this are state variables
            count:0,
          }
        },
      }
</script>

<template>
    <main>
      <div class="container">
        <h2>The counter is ..</h2>
        <div >{{ count }}</div>
        <button  @click="this.count--">-</button>
        <button  @click="this.count++">+</button> 
      </div>
    </main>
</template>

<style scoped>
main{
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  font-size: 5em;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

}
button{
  width: 4em;
  font-size: 1.2em;
  font-weight: 700;
  margin: 40px;
}
.container{
  text-align: center;
}
</style>
