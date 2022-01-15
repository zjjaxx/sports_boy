<template>
  <ZRow class="row" :gutter="50">
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
    <ZCol :span="12" :lg="6" :sm="12">
      <div class="col-content"></div>
    </ZCol>
  </ZRow>
</template>

<style>
.col-content {
  background: #777;
  height: 50px;
}
</style>
