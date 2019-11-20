<template>
  <div>
    <b-card>
      <b-card-body>
        <b-form-group
          id="input-search-label"
          label="Search College"
          label-for="input-search"
        >
          <b-form-input
            id="input-search"
            v-model="search"
            type="text"
            placeholder="Enter college"
          ></b-form-input>
        </b-form-group>
        <b-button type="button" variant="info" @click="searchCollege">Search</b-button>
        <span class="divider"></span>
        <b-button type="button" variant="info" @click="sortColleges">Sort</b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SearchColleges',
  data() {
    return {
      search: '',
      order: 1
    }
  },
  methods: {
    searchCollege() {
      this.$store.dispatch('searchCollege', this.search);
    },
    sortColleges() {
      this.$store.dispatch('sortColleges', this.order);
      if(this.order === 1) {
        this.order = this.order + 1;
      } else {
        this.order = this.order - 1;
      }
    }
  }
}
</script>

<style scoped>
.divider {
  margin: 0 10px;
}
</style>