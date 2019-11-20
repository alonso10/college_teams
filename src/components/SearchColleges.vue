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
        <b-button type="button" variant="info" @click="searchCollege">Buscar</b-button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SearchColleges',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchCollege() {
      this.$store.dispatch('searchCollege', this.search);
    }
  }
}
</script>