<template></template>

<script>
/* global headerTags */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      this.$ssrContext.userHeadTags = 
        this.$ssrContext.userHeadTags.concat(this.getHeaderTags())
    }
  },
  methods: {
    getHeaderTags() {
      return headerTags
    }
  }
}
</script>