<template>
    <div id="sd_activity_box" class="sd_activity_box">
        <a id="sd_cancel_icon" class="sd_cancel_icon"></a>
        <a class="sd_shine_box sc_hide hide" :href="activityurl" style="width: 222px;"></a>
        <a class="sc_shine_box sc_show hide" href="recharge.html"></a>
    </div>
</template>

<script>
    export default {
        props: {
            activityurl: String
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
