<template>
  <h1 id="logo">
    <div className="inner">
      <span>flickr</span>
      <span>VR</span>
    </div>
    <div className="border"></div>
  </h1>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  h1#logo {
    border-radius: 50%;
    background-color: rgb(255, 204, 0);
    font-family: arial;
    transition: all 0.4s ease-out;
    position: relative;
    height: 54px;
    width: 54px;
    overflow: hidden;

    .border {
      position: absolute;
      border-radius: 50%;
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
      background-color: rgb(255, 204, 0);
      background: linear-gradient(
        135deg,
        rgba(255, 204, 0, 1) 0%,
        rgba(230, 60, 142, 1) 98%
      );
      z-index: 1;
      transition: all 0.4s ease-out;
    }

    &:hover > .border {
      opacity: 1;
      transform: rotate(720deg);
    }
    .inner {
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      display: flex;
      top: 4px;
      left: 4px;
      width: 46px;
      height: 46px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #252525;
    }
    span {
      font-size: 18px;
      line-height: 18px;
      padding: 0;

      &:first-child {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
</style>
