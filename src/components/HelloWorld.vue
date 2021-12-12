<template>
  <div class="hello">
    <div class="body"></div>
    <div class="header">
      <div class="logo"></div>   
      <div class="header_home">HOME</div>
      <div class="header_about">ABOUT US</div>
      <div class="header_contact">CONTACT</div>

    </div>
    <div class="main"></div>
    <div class="about">about us</div>
    <div class="slogan">
      <p>We are a funny community!</p>
      <p>We are a win-win community!</p>
      <p>We will lead more people into the meta universe!</p>
    </div>
    <div class="contact"></div>        
    <div class="contact_text">Get the latest news about us!</div>        
    <div class="email"></div>  
    <div class="email_text">Enter you email</div>  
    <div class="subscribe"></div> 
    <div class="subscribe_text">Subscribe</div>  
    <div class="bottom">
      <div class="bottom_logo">
            <!-- <div class="logo"></div>    -->
      </div>
      <div class="copyright">
            Copyrights © ️2021 PLAYFUN . All rights reserved.
      </div>

    </div>        
            
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header {
  /* Rectangle 16 */
  position: absolute;
  width: 1440px;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #000000;
}
.header_home {
/* HOME */
position: absolute;
width: 40px;
height: 16px;
left: 1077px;
top: 23px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;

}
.header_about{
/* ABOUT US */

position: absolute;
width: 80px;
height: 16px;
left: 1182px;
top: 22px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}

.header_contact{
/* CONTACT */

position: absolute;
width: 80px;
height: 16px;
left: 1301px;
top: 23px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}

.body{
/* Rectangle 17 */

position: absolute;
width: 1440px;
height: 1410px;
left: 0px;
top: 10px;

background: #121212;

}

.main{
  /* playfun-kv 1 */
  position: absolute;
  width: 1440px;
  height: 728px;
  left: 0px;
  top: 60px;
  background: url("../assets/funplay-bg.png") no-repeat;
}

.logo{
  /* Vector */

  position: absolute;
  left: 0%;
  right: 95.83%;
  top: 0%;
  bottom: 96.39%;
  height:64px;
  width: 64px;
  background: url("../assets/logo.png") no-repeat;
  background-position: center;
  background-color: #E61F19;
}

.about{
/* ABOUT US */
position: absolute;
width: 958px;
height: 70px;
left: 242px;
top: 843px;

font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 60px;
line-height: 70px;
text-align: center;

color: #FFFFFF;
}

.slogan{
/* FUNPLAY IS A PLAY-TO-EARN GAMING GUILD, BRINGING PLAYERS TOGETHER TO EARN VIA BLOCKCHAIN-BASED ECONOMIES. WE ARE THE SETTLERS OF NEW WORLDS IN THE METAVERSE */

  position: absolute;
  width: 958px;
  height: 105px;
  left: 242px;
  top: 931px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 3px;
  text-align: center;

  color: #FFFFFF;
}

.contact{
  /* Rectangle 19 */
  position: absolute;
  width: 1440px;
  height: 283px;
  left: 1px;
  top: 1102px;
  background: #E61F19;
}

.contact_text{
/* Get the lates on funplay group */

  position: absolute;
  width: 600px;
  height: 47px;
  left: 400px;
  top: 1173px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  color: #FFFFFF;
}

.email{
/* Rectangle 20 */
position: absolute;
width: 355px;
height: 38px;
left: 455px;
top: 1245px;

background: #FFFFFF;
}
.email_text{
/* Enter you email */

position: absolute;
width: 160px;
height: 16px;
left: 469px;
top: 1256px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #757575;
}

.subscribe{
/* Rectangle 21 */
  position: absolute;
  width: 169px;
  height: 38px;
  left: 825px;
  top: 1244px;
  background: #000000;
}
.subscribe_text{
  /* GET UPDATES */

position: absolute;
width: 90px;
height: 16px;
left: 865px;
top: 1256px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}

.bottom{
  /* Rectangle 22 */
  position: absolute;
  width: 1440px;
  height: 250px;
  left: 0px;
  top: 1364px;
  background: #000000;
}

.bottom_logo{
  /* Vector */

/* Vector */

position: absolute;
left: 48.47%;
right: 47.36%;
top: 15%;
bottom: 10.64%;
height:64px;
width: 64px;
  background: url("../assets/logo.png") no-repeat;
  background-position: center;
  background-color: #E61F19;
}
.copyright{
  /* Copyrights © ️2021 PLAYFUN . All rights reserved. */

position: absolute;
width: 330px;
height: 16px;
left: 38%;
right: 47.36%;
top: 80%;
bottom: 10.64%;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}
</style>
