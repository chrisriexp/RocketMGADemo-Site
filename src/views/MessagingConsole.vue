<template>
    <NavBar page="agent-portal" @getAppointed="getAppointed()" />
    <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()"  />

    <div class="w-full bg-white py-4 h-[125px] border-b-[1px] border-custom-gray border-opacity-30 px-64">
        <div class="flex gap-4">
            <a href="/portal-settings">
                <div class="bg-white px-2 py-[2px] rounded-lg border-[1px] border-custom-gray border-opacity-10 text-custom-gray hover:text-custom-red hover:cursor-pointer">
                    <ArrowSmallLeftIcon class="w-4 h-4 font-bold" />
                </div>
            </a>
            <p class="text-sm text-custom-gray font-semibold opacity-60">User / <a href="/portal-settings" class="hover:text-custom-red">Portal Settings</a> / Messaging Console</p>
        </div>
        <p class="text-3xl text-custom-gray font-semibold mt-8">Messaging Console</p>
    </div>

    <div class="grid gap-10 w-full h-fit bg-[#F9FAFE] py-8 px-64">
        <div class="grid grid-cols-2 w-full gap-8 h-fit mb-36">
            <div class="grid col w-full gap-8">
                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex flow-root w-full">
                        <div class="flex float-left gap-4">
                            <LinkIcon class="w-8 h-8" />
                            <p class="font-bold text-lg">SMTP Management</p>
                        </div>

                        <ChevronRightIcon class="w-6 h-6 flex float-right" />
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage system SMTP settings for emails...</p>
                </div>

                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex gap-4">
                        <div class="flex flow-root w-full">
                            <div class="flex float-left gap-4">
                                <NewspaperIcon class="w-8 h-8" />
                                <p class="font-bold text-lg">System Templates Management</p>
                            </div>

                            <ChevronRightIcon class="w-6 h-6 flex float-right" />
                        </div>
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage system templates for MMS/Email...</p>
                </div>
            </div>

            <div class="grid col w-full gap-8">
                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex flow-root w-full">
                        <div class="flex float-left gap-4">
                            <CodeBracketSquareIcon class="w-8 h-8" />
                            <p class="font-bold text-lg">System Short Code Management</p>
                        </div>

                        <ChevronRightIcon class="w-6 h-6 flex float-right" />
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage system short codes for MMS/Email...</p>
                </div>

                <div @click="getAppointed()" class="grid gap-4 bg-white border-[1px] border-custom-gray border-opacity-10 w-full h-[125px] rounded-lg p-6 text-custom-gray hover:cursor-pointer hover:text-custom-red">
                    <div class="flex gap-4">
                        <div class="flex flow-root w-full">
                            <div class="flex float-left gap-4">
                                <DocumentTextIcon class="w-8 h-8" />
                                <p class="font-bold text-lg">My Templates Management</p>
                            </div>

                            <ChevronRightIcon class="w-6 h-6 flex float-right" />
                        </div>
                    </div>

                    <p class="text-sm text-custom-gray opacity-50 font-medium">Here you can manage your personal templates for MMS/Email...</p>
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
import { LinkIcon, ChevronRightIcon, NewspaperIcon, DocumentTextIcon, CodeBracketSquareIcon, ArrowSmallLeftIcon  } from '@heroicons/vue/24/solid'

export default {
    name: "MessagingConsole",
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
        LinkIcon,
        ChevronRightIcon,
        appointmentPopup,
        NewspaperIcon,
        DocumentTextIcon,
        CodeBracketSquareIcon,
        ArrowSmallLeftIcon
    }
}
</script>