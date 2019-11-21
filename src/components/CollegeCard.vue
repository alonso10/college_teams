<template>
  <div class="content-colleges">
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
        <b-button variant="outline-primary" @click="isFavorite ? deleteFavorite(college) : addFavorite(college)">
          {{ isFavorite ? 'Remove' : 'Add' }} Favorites 
        </b-button>
        <span class="divider"></span>
        <b-button variant="outline-info" :to="'/college/' + college.id">View Details</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CollegeCard',
  props: {
    college: Object,
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getColor(color) {
      return `background-color: ${color}`
    },
    addFavorite(college) {
      this.$store.dispatch('addFavorite', college)
    },
    deleteFavorite(college) {
      this.$store.dispatch('removeFavorite', college)
    } 
  }
}
</script>

<style scoped>
.divider {
  margin: 0 10px;
}
.content-colleges {
  margin-top: 2rem;
}
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