<template>
  <h1>Job Details</h1>
  <h2>The job id is {{ $route.params.id}}</h2>
    <p>The job id is {{ $route.params.details}}</p>

</template>

<script>
export default {

}
</script>

<style>
p {
margin: 10px auto;
display: block;
max-width: 300px;
}
</style>
