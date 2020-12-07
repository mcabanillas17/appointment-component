<template>
  <div>
    <div class="fab" @click="open">
        <!-- <img src="../assets/floating-button.png" alt=""> -->
        <img src="@/assets/floating-button.png" alt="">
    </div>

    <div class="box">
      <div id="bottom" class="div">
        <div class="content-bottom">
          <img src="@/assets/hello.png" alt="Agendamiento">
          <div class="content-title">
            <span class="title">Agenda tu asesoría con un agente</span>
          </div>
        </div>
      </div>
      <div id="top" class="div">
        <div class="content-top">
          <div class="options-appointment">
            <a href ="#" class="btn-link" >
              <div class="button" >
                  <img src ="@/assets/phone-call.png" alt="img" >
                  <span> Llámame lo antes posible </span>
              </div>
            </a>
            <a href ="#" class="btn-link" >
              <div class="button" >
                  <img src ="@/assets/phone-call.png" alt="img" >
                  <span> Quiero reservar una cita </span>
              </div>
            </a>
          </div>
          <div class="contact">
            <span>Mi Contacto:</span>
            <div class="full-input">
              <label for="cellphone">Celular</label>
              <input type="text" name="cellphone">
            </div>
          </div>
          <div class="options-contact">
            <span>¿Cómo deseas que te contactemos?</span>
            <div class="options">
              <div class="opt-contact">
                <div class="opt-img-div">
                  <img src ="@/assets/whatsapp-gray.png" class="img-opt" alt="img" >
                </div>
                <span class="opt-text"> Whatsapp </span>
              </div>
              <div class="opt-contact">
                <div class="opt-img-div">
                  <img src ="@/assets/call-gray.png" class="img-opt" alt="img" >
                </div>
                <span class="opt-text"> Llamada </span>
              </div>
              <div class="opt-contact">
                <div class="opt-img-div">
                  <img src ="@/assets/video-call-gray.png" class="img-opt" alt="img" >
                </div>
                <span class="opt-text"> Videollamada </span>
              </div>
            </div>
          </div>
          <div class="div-action-button">
            <button class="button-appointment">Llámame</button>
          </div>
        </div>
      </div>
      <div id="close" class="div" @click="closeBox">
          <img src="@/assets/close.png" alt="close" class="imgClose">
      </div>
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
    },

    closeBox() {
      document.querySelector('.box').classList.toggle('box-active');
      document.querySelector('.fab').classList.toggle('fab-active');
    }
  }
}

</script>

<style scoped>

.div {
  position: absolute;
  width: 100%;
  height: 50%;
}

#bottom {
  top: 0;
  left: 0;
  height: 158px !important;
  background-color: #0855C4;
  border-radius: 12px  12px  0px 0px;
  text-align: center;
}

.content-bottom {
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}

.content-title {
  height: 100%;
  display: flex;
  align-items: center;
}

.title {
  color: #FFFFFF;
  font-size: 14pt;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
}

#top {
  top: 135px;
  left: 5%;
  width: 90%;
  height: 100%;
  /* padding: 30px; */
  background-color: #ffffff;
  border-radius: 12px 12px 0px 0px;
}

.content-top {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.options-appointment {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}

.button {
  border: none;
  height: 56px;
  width: 140px;
  background: #0855C4;
  font-size: 8.5pt;
  color: #ffffff;
  border-radius: 3px;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}

.button img {
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 100%;
  display: block;
  margin-right: 10px;
}

a.btn-link {
  color: #0855C4;
  font-weight: 200;
  text-align: left;
  text-decoration: none;
}

.contact {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
}

/* INI: INPUT: INSIDE LABEL */
.full-input {
  width: 100%;
  display: inline-block;
  margin-top: 10px;
  /* padding-left: 5px; */
  border: 1px solid #D1D1D1;
  border-radius: 3px;
  text-align: initial;
}
input {
  outline: none;
  border: none;
  margin-bottom: 8px;
  margin-left: 8px;
  display:block;
  line-height: 1.2em;
  font-size: 11pt;
  color: #454A6C;
}
label {
  display: block;
  margin-top: 5px;
  margin-left: 8px;
  font-size: 8px;
  color: #454A6C;
}
/* FIN: INPUT: INSIDE LABEL */

.options-contact {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
}

.options {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.opt-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.opt-img-div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F4F5FA;  
}

.opt-contact .img-opt {
  width: 30px;
  height: 30px;
}

.opt-text {
  color: #454A6C;
  font-size: 8pt;
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
}

.div-action-button {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}

.button-appointment {
  width: 176px;
  height: 46px;
  background-color: #EA0C90; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  cursor: pointer;
  border-radius: 9px;
}
button:focus {outline:0;}
#close {
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.imgClose {
  width: 14px;
  height: 14px;
  object-fit: cover;
}

.fab {
    position: fixed;
    bottom: 32px;
    right: 32px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #0855C4;
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
  width: 100%;
  transition: 0.4s;
  object-fit: cover;
}

.box {
    background-color: #F4F5FA;
    border-radius: 12px  12px  2px 2px;
    width: 375px;
    height: 0px;
    bottom: 0px;
    right: 5px;
    position: fixed;
    transition-delay: 0.3s;
    transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* justify-content: space-between; */
}

.box-active {
    height: 561px;

}

.fab-active {
    visibility: hidden;
}

.fab-active img {
    transform: rotate(270deg);
    width: 0%;
}
</style>