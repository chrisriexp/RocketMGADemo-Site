<template>
    <NavBar page="agent-portal" @getAppointed="getAppointed()" />
    <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()"  />

    <div class="w-full bg-white py-4 h-[125px] border-b-[1px] border-custom-gray border-opacity-30 px-64">
        <p class="text-sm text-custom-gray font-semibold opacity-60">User / Profile</p>
        <p class="text-3xl text-custom-gray font-semibold mt-8">User Profile</p>
    </div>

    <div class="grid gap-10 w-full h-fit bg-[#F9FAFE] py-8 px-64">
        <div class="grid grid-cols-4 gap-6 mb-36">
            <div class="grid col w-[85%] h-[300px] bg-white rounded-lg border-[1px] border-custom-gray border-opacity-10">
                <div class="grid gap-4 justify-items-center my-auto mx-auto h-fit w-fit">
                    <p class="font-semibold p-[13px] bg-[#F5F06E] text-custom-gray text-center text-opacity-50 text-4xl rounded-2xl my-auto">JD</p>
                    <p class="text-center text-custom-gray font-bold text-lg">Jonathan Doe</p>
                    <p class="text-center text-custom-gray opacity-50">guest</p>
                </div>
            </div>

            <div class="grid col-span-3">
                <div class="h-[50px] w-full bg-white border-[1px] border-custom-gray border-opacity-10 rounded-md px-8">
                    <div class="grid grid-cols-3 w-full h-fit mt-[12px]">
                        <div class="flex gap-4 h-fit w-fit opacity-80">
                            <IdentificationIcon class="h-6 w-6 text-custom-gray" />
                            <p class="text-custom-gray my-auto">User ID</p>
                        </div>

                        <div class="grid col-span-2">
                            <p class="text-custom-gray font-semibold">RFU00000</p>
                        </div>
                    </div>
                </div>

                <div class="h-[50px] w-full bg-white border-[1px] border-custom-gray border-opacity-10 rounded-md px-8">
                    <div class="grid grid-cols-3 w-full h-fit mt-[12px]">
                        <div class="flex gap-4 h-fit w-fit opacity-80">
                            <IdentificationIcon class="h-6 w-6 text-custom-gray" />
                            <p class="text-custom-gray my-auto">Name</p>
                        </div>

                        <div class="grid col-span-2">
                            <p class="text-custom-gray font-semibold">Jonathan Doe</p>
                        </div>
                    </div>
                </div>

                <div class="h-[50px] w-full bg-white border-[1px] border-custom-gray border-opacity-10 rounded-md px-8">
                    <div class="grid grid-cols-3 w-full h-fit mt-[12px]">
                        <div class="flex gap-4 h-fit w-fit opacity-80">
                            <IdentificationIcon class="h-6 w-6 text-custom-gray" />
                            <p class="text-custom-gray my-auto">Email</p>
                        </div>

                        <div class="grid col-span-2">
                            <p class="text-custom-gray font-semibold">johndoe@agency.com</p>
                        </div>
                    </div>
                </div>

                <div class="h-[50px] w-full bg-white border-[1px] border-custom-gray border-opacity-10 rounded-md px-8">
                    <div class="grid grid-cols-3 w-full h-fit mt-[12px]">
                        <div class="flex gap-4 h-fit w-fit opacity-80">
                            <IdentificationIcon class="h-6 w-6 text-custom-gray" />
                            <p class="text-custom-gray my-auto">Username</p>
                        </div>

                        <div class="grid col-span-2">
                            <p class="text-custom-gray font-semibold">guest</p>
                        </div>
                    </div>
                </div>

                <div @click="getAppointed()" class="col flex h-[40px] w-fit my-auto col bg-[#172340] rounded-lg hover:cursor-pointer px-6">
                    <div class="flex w-fit mx-auto gap-2">
                        <LockClosedIcon class="h-[20px] w-[20px] text-bold text-white my-auto" />
                        <p class="text-white my-auto font-medium text-sm my-auto">Change Password</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer class="bottom-0 relative" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import appointmentPopup from '../components/appointmentPopup.vue'
import { IdentificationIcon, LockClosedIcon } from '@heroicons/vue/24/solid'


export default {
    name: 'Profile',
    methods: {
        getAppointed(){
            document.getElementById('appointmentPopup').classList.remove('hidden')
        },
        closeGetAppointed(){
            document.getElementById('appointmentPopup').classList.add('hidden')
        }
    },
    components: {
        NavBar,
        Footer,
        IdentificationIcon,
        LockClosedIcon,
        appointmentPopup
    }
}
</script>