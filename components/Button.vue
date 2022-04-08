<template>
  <div>
    <a :class="[color]" @click.prevent="clickEvent">{{ text }}</a>
  </div>
</template>
<script>
export default {
  props: {
    clickEvent: {
      type: Function,
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "pink",
    },
  },
};
</script>
<style lang="scss">
div {
  margin: auto;
}
a {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid pink;
  padding: 1em;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0 2px 10px rgb(197, 197, 197);
  color: rgb(248, 165, 177);
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 219, 224);
    color: rgb(255, 125, 125);
    border-color: rgb(255, 157, 157);
    transition: 0.5s ease-out;
  }
  &.blue {
    margin-top: 30px;
    display: block;
    width: 300px;
    border: 2px solid rgb(106, 183, 255);
    background-color: rgb(223, 239, 255);
    box-shadow: 0 2px 10px rgb(197, 197, 197);
    color: rgb(56, 131, 201);
    &:hover {
      background-color: rgb(106, 181, 252);
      color: rgb(244, 249, 255);
      border-color: rgb(24, 128, 224);
    }
  }
}
</style>
