import Vue from "vue";

const livesearchresults = Vue.component("livesearchresults", {
    template: 
    `<div class="livesearchresults">
        <div v-if="!results.best.items.length" class="no-results">Ei hakutuloksia.</div>
        <div class="type" v-for="(item, index) in results" :key="index" v-show="item.items.length">
            <h3 class="result-type">{{item.title}}</h3>
            <a :href="post.link" class="result" v-for="post in item.items" :key="post.id">
                <img v-if="post.image" :src="post.image">
                <div class="result-content">
                    <h4 class="result-title">{{post.title}}</h4>
                    <p class="result-meta" v-if="post.type == 'product'">
                        <span class="subname" v-if="post.subname">{{post.subname}}</span>
                        <span class="product-type" v-if="post.product_type">{{post.product_type}}</span>
                        <span class="year" v-if="post.year">{{post.year}}</span>
                    </p>
                    <p class="result-excerpt" v-html="post.excerpt"></p>
                    <div class="result-price" v-if="post.price" v-html="post.price"></div>
                </div>
            </a>
        </div>
    </div>`,

    props: ["results"],

    data: function() {
        return {};
    },
    created: function() {},

    methods: {}
});

export { livesearchresults };
