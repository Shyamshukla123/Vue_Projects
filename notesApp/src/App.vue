<script setup>

  import {ref} from 'vue';


  const showModel = ref(false);
  const newNote =ref("");
  //  const previousNotes =JSON.parse(localStorage.notes||[]);

  const notes = ref([]);
 const errorMessage=ref("");

  function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)"; 
 }

  const addNotes= ()=>{
    if(newNote.value.length<10){
      return errorMessage.value="note should be 10 character or more";
    }

    notes.value.push({
        id:Math.floor(Math.random()*1000000),
        text:newNote.value,
        date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        backgroundColor: getRandomColor(),
      });
      localStorage.setItem('notes',notes.value);
      showModel.value=false;
      newNote.value="";
      errorMessage.value="";
  }



</script>

<template>
  <main>
    
  <div v-show="showModel" class="overlay">
    <div class="modal">
     <!-- v-model directives used here for 2-way binding -->
     <!-- Also using trim functionality to remove the void spaces from both ends -->
      <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <!-- click event is use here  to add the  note-->
      <button @click="addNotes">Add Note</button>
      <button @click="showModel=false" class="close">Close</button>
    </div>
  </div>
      <div class="container">
        
         <header>
          <h1>Notes</h1>
          <button @click="showModel=true">+</button>
         </header>
         <div class="cards-container">

          <!-- v-for directives is use here  for rendering the notes -->
          <!-- Added inline style for random background color -->
          <!-- key attribute after v-for is used for uniqueness -->
           <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor:note.backgroundColor}">
             <p class="main-text">{{note.text}}</p>
             <p class="date">{{note.date}}</p>
          </div>

         </div>
     
      </div>
  </main>
</template>

<style scoped>
      main{
        height: 100vh;
        width: 100vw;
      }
      .container{
        max-width: 1000px;
        padding: 10px;
        margin: 0 auto;
      }
      header{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h1{
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 5rem;

      }
      header button{
        border: none;
        width: 3rem;
        height: 3rem;
        padding: 10px;
        cursor: pointer;
        font-size: 1.2rem;
        background-color: rgb(21,20,20);
        border-radius: 50%;
        color: aliceblue;
      }
      .card{
        width: 225px;
        height: 225px;
        background-color: rgb(222, 222, 18);
        padding: 10px;
        border-radius: 15px;
        margin-right: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
      }
      .date{
        font-size: 12px;
        font-weight: bold;
      }
      .cards-container{
        display: flex;
        flex-wrap: wrap;
      }
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.77);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal{
        width: 750px;
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .modal button{
        padding: 10px 20px;
        font-size: 20px;
        width: 100%;
        background-color: blueviolet;
        color: white;
        cursor: pointer;
        margin-top: 15px;
      }
      .modal .close{
        background-color: rgb(159, 25, 25);
        margin-top: 7px;
      }
      .modal p{
        color: red;
      }
</style>
