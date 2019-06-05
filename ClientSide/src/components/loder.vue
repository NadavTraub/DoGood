<template>
<div class="back">
<div class="loader"></div>
<p><br>מעבד נתונים</p>
</div>
  
</template>

<script>

export default {
  name: 'loder',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid brown; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
.back{
    margin: 30%;
    padding: 60px;
    width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: #fff;
  border: 3px solid brown;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
