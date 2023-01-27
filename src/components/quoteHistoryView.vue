<template>
    <!--Loading-->
    <div id="loading" class="w-fit ml-[500px] absolute z-10 mt-32 hidden">
        <loading class="w-fit" />
    </div>

    <div class="w-full flex flow-root">
        <div class="flex float-right gap-6">
            <div @click="refresh()" class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20 hover:cursor-pointer ">
                <ArrowPathIcon class="h-6 text-[#172340] font-bold hover:text-custom-red" />
            </div>
        </div>
    </div>

    <div class="w-full grid gap-4 h-fit">
        <div class="grid grid-cols-2 w-full text-sm font-bold uppercase text-custom-gray opacity-50 p-4 uppercase">
            <p>Note Key</p>
            <p>Description</p>
        </div>

        <div class="grid bg-white border-[1px] p-4 border-custom-gray border-opacity-10 rounded-lg grid-cols-2 w-full text-sm text-custom-gray font-medium text-opacity-80">
            <p class="my-auto">Application Created</p>
            <p class="my-auto">Sent at: {{ time.date }} at {{ time.created }} <br>Created Through: Agent Portal</p>
        </div>

        <div class="grid bg-white border-[1px] p-4 border-custom-gray border-opacity-10 rounded-lg grid-cols-2 w-full text-sm text-custom-gray font-medium text-opacity-80">
            <p class="my-auto">Application Launched</p>
            <p class="my-auto">Sent at: {{ time.date }} at {{ time.launched }}</p>
        </div>
    </div>
</template>

<script>
import loading from '../components/loading.vue'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'

export default {
    name: "quoteHistoryView",
    props: {
        time: Object
    },
    methods: {
        refresh(){
            document.getElementById('loading').classList.remove('hidden')
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden')
            }, 500)
        }
    },
    components: {
        loading,
        ArrowPathIcon
    }
}
</script>