<template>
  <div class="parallax">
    <div class="content">
      <h1>Section 1</h1>
      <p>scroll down...</p>
    </div>
  </div>

  <div class="parallax">
    <div class="content">
      <h1>Section 2</h1>
      <p>scroll down...</p>
    </div>
  </div>

  <div class="parallax">
    <div class="content">
      <h1>Section 3</h1>
      <p>scroll down...</p>
    </div>
  </div>
</template>

<style>
.parallax {
  height: 100vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.parallax:nth-child(1) {
  background-image: url("/background/main-background.jpg");
}
.parallax:nth-child(2) {
  background-image: url("/background/about-background.jpg");
}
.parallax:nth-child(3) {
  background-image: url("/gallery/images.jpg");
}

.content {
  color: black;
  text-align: center;
  padding: 50px;
}

.content h1 {
  font-size: clamp(2rem, 5vw, 6rem);
}
</style>
