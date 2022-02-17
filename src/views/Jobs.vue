<template>
<div class="Jobs">
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobsParameters', params: { id: job.id, details: job.details}}">
       <h2>{{ job.title }}</h2>
    </router-link>
  </div>
<div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        { title: 'Developer', id: 1, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ffffff' },
        { title: 'Designer', id: 2, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.fsff ' },
        { title: 'Graphic', id: 3, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sds' }
      ]
    }
  }
}
</script>

<style>
.job h2 {
  background: #ddd;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor:pointer;
  color: #444;
  text-decoration: none;
}
.job h2:hover {
  background: #ccc;
}

.job a {
  text-decoration: none;
}
</style>
