import Vue from "vue";
import "whatwg-fetch"; // polyfill fetch (<2017)
import "promise-polyfill/src/polyfill";
import { livesearchresults } from "./livesearchresults";

document.addEventListener("DOMContentLoaded", function onDomReady() {
    document.removeEventListener("DOMContentLoaded", onDomReady, false);
    const elementID = "vue-search";
    const element = document.getElementById(elementID);
    if (element) {
        search.init(elementID, !element.dataset.nolive);
    }
});

const search = {
    view: null,

    init: function(elementID, livesearch = true) {
        this.view = new Vue({
            el: "#" + elementID,
            data: {
                ready: false,
                livesearch: livesearch,
                searchterm: "",
                results: null,
                resultsvisible: false,
                mintermlength: 3, //remember to change in api-actions.php too
                delays: {
                    fake: 300,
                    search: 1000
                },
                timers: {
                    fake: null,
                    search: null
                },
                searching: false,
                searchnum: 0
            },
            created: function() {
                this.ready = true;
            },
            watch: {
                searchterm: function (newterm, oldterm) {
                    if (!this.livesearch) {
                        return false;
                    }

                    if (this.timers.fake) {
                        clearTimeout(this.timers.fake);
                    }

                    if (this.timers.search) {
                        clearTimeout(this.timers.search);
                    }

                    if (this.searchterm.length == 0) {
                        this.hideResults();
                    }

                    if (this.searchterm.length < this.mintermlength) {
                        this.searching = false;
                        return false;
                    }

                    this.timers.fake = setTimeout(this.fakesearch, this.delays.fake);
                    this.timers.search = setTimeout(this.search, this.delays.search);
                    return true;
                }
            },
            methods: {
                searchfieldfocus: function() {
                    if (!this.results || this.searchterm.length < this.mintermlength) {
                        return false;
                    }

                    this.showResults();
                    return true;
                },

                fakesearch: function() {
                    this.searching = true;
                },

                search: function() {
                    this.searchnum++;
                    this.results = null;
                    fetch(resturl + "v1/livesearch?s=" + this.searchterm + "&n=" + this.searchnum)
                        .then(response => response.json())
                        .then(this.handleSearchResults)
                        .catch(ex => {
                        this.searching = false;
                        //                        alert("Haussa tapahtui virhe. Yritä myöhemmin uudelleen.");
                    });
                },

                handleSearchResults: function(json) {
                    this.searching = false;

                    if (json.code && json.message) {
                        alert(json.message);
                        return false;
                    }

                    if (this.searchnum != json.searchnum) {
                        return false;
                    }

                    this.results = json.results;
                    this.showResults();
                    return true;
                },

                showResults: function() {
                    if (!this.livesearch) {
                        return;
                    }
                    this.resultsvisible = true;
                    document.addEventListener("click", this.domClicked);
                },

                hideResults: function() {
                    document.removeEventListener("click", this.domClicked, false);
                    this.resultsvisible = false;
                },

                domClicked: function(ev) {
                    if (ev.target.closest("#" + elementID)) {
                        return;
                    }

                    this.hideResults();
                },

                closeBtnClicked: function(e) {
                    e.preventDefault();
                    this.searchterm = '';
                    this.hideResults();
                },
                onSubmit: function(event) {
                    /* Should not prevent user from submitting search without error
                    if (this.searchterm.length < this.mintermlength) {
                        event.preventDefault();
                    } else {
                        return true;
                    }
                    */
                    return;
                },
            }
        });
    }
};

export { search };
