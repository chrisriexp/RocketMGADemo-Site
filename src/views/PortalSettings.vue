<template>
    <NavBar page="agent-portal" @getAppointed="getAppointed()" />
    <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()"  />

    <div class="w-full bg-white py-4 h-[125px] border-b-[1px] border-custom-gray border-opacity-30 px-64">
        <p class="text-sm text-custom-gray font-semibold opacity-60">User / Portal Settings</p>
        <p class="text-3xl text-custom-gray font-semibold mt-8">Portal Settings</p>
    </div>

    <div class="grid gap-10 w-full h-fit bg-[#F9FAFE] py-8 px-64">
        <div class="grid grid-cols-2 w-full gap-8 h-fit mb-36">
            <div class="grid col w-full gap-8">
                <div @click="gotoMessagingConsole()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex flow-root w-full">
                        <div class="flex float-left gap-4">
                            <ChatBubbleLeftEllipsisIcon class="w-8 h-8" />
                            <p class="font-bold text-lg">Messaging Console</p>
                        </div>

                        <ChevronRightIcon class="w-6 h-6 flex float-right" />
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage sms/email templates and short codes...</p>
                </div>

                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex gap-4">
                        <div class="flex flow-root w-full">
                            <div class="flex float-left gap-4">
                                <ServerStackIcon class="w-8 h-8" />
                                <p class="font-bold text-lg">Auto Launch Settings</p>
                            </div>

                            <ChevronRightIcon class="w-6 h-6 flex float-right" />
                        </div>
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage application auto launch related settings specific to you...</p>
                </div>
            </div>

            <div class="grid col w-full gap-8">
                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex flow-root w-full">
                        <div class="flex float-left gap-4">
                            <Cog8ToothIcon class="w-8 h-8" />
                            <p class="font-bold text-lg">Global Settings</p>
                        </div>

                        <ChevronRightIcon class="w-6 h-6 flex float-right" />
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage the portals global settings...</p>
                </div>

                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex gap-4">
                        <div class="flex flow-root w-full">
                            <div class="flex float-left gap-4">
                                <FingerPrintIcon class="w-8 h-8" />
                                <p class="font-bold text-lg">Unique Identifying Parameters</p>
                            </div>

                            <ChevronRightIcon class="w-6 h-6 flex float-right" />
                        </div>
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage outbound API credentials/UIPs...</p>
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
import { ChatBubbleLeftEllipsisIcon, ChevronRightIcon, Cog8ToothIcon, ServerStackIcon, FingerPrintIcon } from '@heroicons/vue/24/solid'

export default {
    name: "PortalSettings",
    methods: {
        getAppointed(){
            document.getElementById('appointmentPopup').classList.remove('hidden')
        },
        closeGetAppointed(){
            document.getElementById('appointmentPopup').classList.add('hidden')
        },
        gotoMessagingConsole(){
            this.$router.push({name: "MessagingConsole"})
        }
    },
    components: {
        NavBar,
        Footer,
        ChatBubbleLeftEllipsisIcon,
        ChevronRightIcon,
        appointmentPopup,
        Cog8ToothIcon,
        ServerStackIcon,
        FingerPrintIcon
    }
}
</script>