<template>
    <div class="signup-left">
        <div class="blue-circle"></div>
        <div class="left-content">
        <img src="/hero.png" alt="Illustration" class="illustration" />
        <h2>Promote yourself and your work</h2>
        <h2>Meet with other ECRs</h2>
        <h2>Create collaboration groups</h2>
        <p>and much more. All in one place.</p>
        </div>
    </div>
</template>

<style scoped>

.signup-left {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: var(--ion-color-light); 
}

.blue-circle {
  position: absolute;
  background: var(--ion-color-primary);
  width: 150%;
  height: 150%;
  border-radius: 50%;
  left: -25%;
  top: -25%;
  z-index: 0;
}

.left-content {
  position: relative;
  z-index: 2;
  text-align: left;
  padding: 2rem;
  max-width: 400px;
}

.left-content .illustration {
  width: 250px;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .signup-left {
    display: none;
  }
}

</style>
