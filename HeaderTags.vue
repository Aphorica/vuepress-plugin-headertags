<template></template>

<script>
/* global headerTags */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      this.$ssrContext.userHeadTags = 
        this.$ssrContext.userHeadTags.concat(headerTags)
    }
  }
}
</script>