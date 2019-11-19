<template>
  <div>
    <b-card
      border-variant="info"
      header-tag="header"
      footer-tag="footer"
    >
      <template v-slot:header>
        <div  class="content-img">
          <b-card-img 
            :src="college.logos ? college.logos[0]: ''"  
            :alt="college.alt_name3"
          />
        </div>
      </template>
      <b-card-body>
        <b-row>
          <b-col cols="6" class="title">School</b-col>
          <b-col cols="6" class="title">Color</b-col>
        </b-row>
        <b-row>
          <b-col cols="6">{{ college.school }}</b-col>
          <b-col cols="6"><div class="content-color" :style="getColor(college.color)"></div></b-col>
        </b-row>
      </b-card-body>
      <template v-slot:footer>
        <b-button variant="outline-primary" @click="addFavorite(college)">Agregar a Favoritos</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CollegeCard',
  props: {
    college: Object
  },
  // mounted() {
    /* eslint-disable no-console */
    // console.log(this.college)
  // },
  methods: {
    getColor(color) {
      return `background-color: ${color}`
    },
    addFavorite(college) {
      this.$store.dispatch('addFavorite', college)
    } 
  }
}
</script>

<style scoped>
.content-color {
  width: 50px;
  height: 50px;
  margin: 0 auto
}
.content-img {
  width: 200px;
  height: 200px;
  margin: auto;
}
.title {
  font-size: 1.5rem;
  font-weight: 800
}
</style>