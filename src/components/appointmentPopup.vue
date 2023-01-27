<template>
    <div class="w-full h-full">
        <div class="rounded-xl bg-white shadow-newdrop w-fit mx-auto h-fit mt-24 w-[500px]">
            <div class="flex flow-root w-full py-4 px-6">
                <XMarkIcon @click="close()" class="float-right w-6 h-6 text-bold text-custom-red hover:cursor-pointer" />
            </div>
            <div class="grid px-6 py-6 gap-6">
                <h1 class="text-custom-gray text-center text-xl">Get <span class="text-custom-red">appointed</span> now to <span class="text-custom-red">unlock</span> this and all other Rocket MGA features<span class="text-custom-red">!</span></h1>
                <a target="_blank" href="https://onboarding.rocketmga.com" class="text-white bg-custom-red py-2 rounded-lg text-center font-bold">Get Appointed!</a>
            </div>
        </div>
    </div>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/solid'


export default{
    name: "Appointment Popup",
    methods: {
        close(){
            this.$emit('close')
        }
    },
    components: {
        XMarkIcon
    }
}
</script>