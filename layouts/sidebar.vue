<script setup>
useHead({
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous"
    }
  ]
});
</script>

<template>
    <div class="container-fluid" style="max-width: 1200px">
        <div class="col-12 col-md-6">
            <slot name="list" />
        </div>
        <div class="col-12 col-md-6">
            <slot name="content" />
        </div>
    </div>
</template>