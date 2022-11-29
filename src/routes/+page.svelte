<script>
	import { onMount } from "svelte";
  

</script>

<div class="grid m-auto w-[80rem]">

  <header class="flex justify-between px-6 py-8">
    <img class="w-[206px] h-[43px]" src="logo.svg" alt="We care for you logo">
    <button class="px-[32px] py-[12px] bg-[#367E7E] uppercase text-white font-hero2 tracking-widest">Donate</button>
  </header>

  <div id="hero" class="w-full text-center text-white">
    <div id="hero-text" class="">
      <p class="font-handwriting text-[12rem] leading-[10rem]">Care</p>
      <p class="font-hero text-4xl">My command is this:</p>
      <p class="font-hero text-4xl leading-[55px]">Love each other as I have loved you.</p>
      <p class="font-hero2 tracking-[0.4rem] uppercase pt-4">John 15:12</p>
    </div>
  </div>

  <div class="w-full text-center my-14">
    <p class="font-hero2 uppercase text-[#367E7E] tracking-[0.5rem]">Who we are</p>
    <p class="font-hero text-4xl leading-[44px] w-[42rem] m-auto pt-4">Our mission is to demonstrate the love of God to everyone in word and deed.</p>
  </div>

  <div class="flex justify-between px-6 pb-20">
    <div id="video-pic"></div>
  
    <div class="my-auto w-1/2">
      <p class="font-hero2 uppercase text-[#367E7E] tracking-[0.5rem]">Join us</p>
      <p class="font-hero text-4xl leading-[44px] m-auto pt-4">Pastor Jack Green and First Lady Ricky J. Green pray that your lives are blessed and welcome you to visit us any time.</p>
    </div>
  </div>

  <div class="bg-[#367E7E] text-center text-white mt-14 py-10">
    <p class="font-hero2 uppercase tracking-[0.5rem]">It takes a village</p>
    <p class="font-hero text-4xl leading-[44px] w-[52rem] m-auto pt-4">Help us continue to spread the word of love to our community by donating to our ministry.</p>
    <button class="px-[32px] py-[12px] mt-6 bg-white uppercase text-[#367E7E] font-hero2 tracking-widest">Donate</button>
  </div>

  <div class="flex justify-evenly">
    <div>
      <img src="Insta.png" alt="">
    </div>
    <div>
      <img src="Insta-1.png" alt="">
    </div>
    <div>
      <img src="Insta-2.png" alt="">
    </div>
    <div>
      <img src="Insta-3.png" alt="">
    </div>
  </div>

  <footer class="flex justify-evenly text-center bg-[#F2F2F2] py-10">
    <div id="logo2">
      <img src="logo2.svg" alt="">
    </div>

    <div class="p-8">
      <p class="font-hero2">We Care For You Ministry</p>
      <p class="font-inter-norm">22261 Whyte Hardee Boulevard</p>
      <p class="font-inter-norm">Hardeeville, South Carolina</p>
      <p class="font-inter-norm">843.784.3399</p>
      <p class="font-inter-norm">wecare4uministry@outlook.com</p>
    </div>

    <div class="flex justify-between">
      <img class="" src="email-logo.svg" alt="" width="46" height="46">
      <img class="ml-8" src="fb-logo.svg" alt="" width="35" height="35">
      <img class="ml-8" src="insta-logo.svg" alt="" width="35" height="35">
    </div>

  </footer>

</div>

