<form id="vue-search" v-on:submit="onSubmit" :class="{ ready: ready, searching: searching }" role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>" <?php if (!function_exists('relevanssi_do_query')) { ?>data-nolive="1"<?php } ?>>
    <label>
        <span class="screen-reader-text"><?php echo _e('Hae:', 'ID'); ?></span>
        <input v-model="searchterm" autocomplete="off" v-on:focus="searchfieldfocus" type="search" class="search-field" placeholder="<?php echo esc_attr_x('Hae sivustolta', 'placeholder', 'ID'); ?>&hellip;" value="<?php echo get_search_query(); ?>" name="s" />
    </label>
    <button type="submit" class="search-submit" :class="{disabled: searchterm.length < mintermlength}"><span class="screen-reader-text"><?php echo _x('Hae', 'submit button', 'ID'); ?></span></button>

    <div class="live-results" v-if="results != null && resultsvisible">
        <button id="close-search-results" v-on:click.prevent="closeBtnClicked"><span class="screen-reader-text"><?php _e('Sulje tulokset', 'ID'); ?></span></button>
        <livesearchresults :results="results"></livesearchresults>
    </div>
</form>
