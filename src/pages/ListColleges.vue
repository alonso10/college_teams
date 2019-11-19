<template>
  <div>
    <b-jumbotron header="List College Teams"></b-jumbotron>
    <div class="content-college">
      <div v-for="college in colleges" :key="college.id" class="college">
        <college-card :college="college" />
      </div>
    </div>
  </div>
</template>

<script>
import CollegeCard from '@/components/CollegeCard.vue';

export default {
  name: "ListCollege",
  components: {
    CollegeCard
  },
  data() {
    return {
      fields: ['school', 'mascot', 'abbreviation', 'conference'],
      perPage: 10,
      currentPage: 1,
    }
  },
  computed: {
    colleges() {
      return this.$store.getters.getAllColleges
    },
    rows() {
      return this.$store.getters.getRows
    }
  }
}
</script>

<style scoped>
/* Float container */
.content-college {
  max-width: 1200px;
  margin: 0 auto;
  /* Clearfix */
  overflow: auto;
}
.content-college::after {
  /* Clearfix */
  content: "";
  clear: both;
  display: table;
}

.college {
  float: left;
  width: 33.333%;
  box-sizing: border-box;
  /* border: 1px solid #000; */
  padding: 5px
}
</style>