<template>
  <div>
    <div class="fab" @click="open">
        <img src="imagenes/close-button.png" alt="">
    </div>

    <div class="box">
    
      <a href="" class="item item1"><img src="imagenes/whatsapp.png" alt=""></a>
      <a href="" class="item item2"><img src="ic_instagram.png" alt=""></a>
      <a href="" class="item item3"><img src="ic_twitter.png" alt=""></a>
      <a href="" class="item item4"><img src="ic_whatsapp.png" alt=""></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppointmentComponent',
  props: {
    msg: String
  },
  methods: {
    open() {
      document.querySelector('.box').classList.toggle('box-active');
      document.querySelector('.fab').classList.toggle('fab-active');
    }
  }
}

</script>

<style scoped>

.fab {
    position: fixed;
    bottom: 32px;
    right: 32px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #f44336;
    box-shadow: 1px 2px 4px grey;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.fab:hover {
    cursor: pointer;
}

.fab img {
    width: 45%;
    transform: rotate(45deg);
    transition: 0.4s;
}

.box {
    background-color: white;
    border-radius: 15px 15px 2px 2px;
    width: 300px;
    height: 0px;
    bottom: 5px;
    right: 5px;
    position: fixed;
    transition-delay: 0.3s;
    transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-between;
}

.item {
    overflow: hidden;
    border-radius: 50%;
    transition: 0.4s ease-in;
    width: 44px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 3px grey;
}

.item1 {
    transition-delay: 0.2s;
    background-color: #1565c0;
}

.item2 {
    transition-delay: 0.2s;
    background-color: #ff4336;
}

.item3 {
    transition-delay: 0.3s;
    background-color: #29b6fc;
}

.item4 {
    transition-delay: 0.4s;
    background-color: green;
    margin-bottom: 69px;
}

.item:hover {
    cursor: pointer;
}

.item:hover img{
    transform: rotate(360deg);
    transition: all 0.5s;
}

.box-active {
    height: 450px;

}

.fab-active img {
    transform: rotate(270deg);
    width: 40%;
}
</style>