<template>
  <div class="product white">
    <v-container class="px-sm-6 mt-12">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <div class="d-flex flex-wrap justify-center">
            <template v-if="productList != null && productList.length != 0">
              <div
                v-for="productCard in productList"
                :key="productCard.id_products"
                class="mx-lg-12"
              >
                <ProductCards :productCard="productCard" />
              </div>
            </template>
          </div>
          <div class="d-flex mt-6">
            <v-btn depressed class="mx-auto white--text" to="/product-details">
              SEE MORE
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import ProductCards from "@/components/ProductCard";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ProductCards,
    Footer
  },
  data() {
    return {
      productList: null
    };
  },
  created() {
    fetch(process.env.VUE_APP_URL + "products")
      .then(res => res.json())
      .then(data => {
        this.productList = data.data;
      });
  }
};
</script>

<style lang="sass" scoped>
.v-btn
  background: $orange-gradient
  font-family: $raleway
</style>
