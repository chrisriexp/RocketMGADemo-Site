<template>
    <div class="w-full border-b-[1px] border-custom-gray border-opacity-30 bg-white">
        <div class="mx-64 py-4">
            <div class="grid grid-cols-4">
                <div class="grid col h-fit my-auto">
                    <img src="../assets/logo-red.svg" alt="RocketMGA Logo">
                </div>

                <div class="grid col-span-2 justify-items-center">
                    <div class="flex gap-8 font-semibold h-fit my-auto">
                        <p @click="gotoAgentPortal()" id="agentPortal" class="text-custom-gray hover:text-custom-red hover:cursor-pointer">Agent Portal</p>
                        <p @click="getAppointed()" id="bulk-upload" class="text-custom-gray hover:text-custom-red hover:cursor-pointer">Bulk Upload</p>
                        <p @click="getAppointed()" id="sms-module" class="text-custom-gray hover:text-custom-red hover:cursor-pointer">SMS Module</p>
                    </div>
                </div>

                <div class="grid col">
                    <div class="flex flow-root">
                        <div @click="toggleMenu()" class="flex float-right text-md text-custom-gray gap-4 hover:cursor-pointer">
                            <div class="grid text-sm">
                                <p class="font-semibold">Jonathan Doe</p>
                                <p class="text-right">guest</p>
                            </div>

                            <p class="font-semibold p-[10px] bg-[#F5F06E] text-custom-gray text-opacity-50 text-sm rounded-xl my-auto">JD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="menu" class="grid bg-white rounded-lg shadow-newdrop z-10 absolute right-0 mr-64 mt-[-10px] hidden text-sm text-custom-gray">
        <div @click="gotoProfile()" class="flex gap-2 py-2 pl-4 pr-8 rounded-tr-lg rounded-tl-lg hover:bg-custom-gray hover:bg-opacity-10 hover:text-custom-red hover:cursor-pointer">
            <UserCircleIcon class="w-6 h-6" />
            <p class="my-auto">Profile</p>
        </div>
        
        <div @click="gotoPortalSettings()" class="flex gap-2 py-2 py-2 pl-4 pr-8 hover:bg-custom-gray hover:bg-opacity-10 hover:text-custom-red hover:cursor-pointer">
            <Cog8ToothIcon class="w-6 h-6" />
            <p class="my-auto">Portal Settings</p>
        </div>
        
        <div class="flex gap-2 py-2 py-2 pl-4 pr-8 rounded-br-lg rounded-bl-lg hover:bg-custom-gray hover:bg-opacity-10 hover:text-custom-red hover:cursor-pointer">
            <ArrowLeftOnRectangleIcon class="w-6 h-6" />
            <p class="my-auto">Logout</p>
        </div>
    </div>
</template>

<script>
import { UserCircleIcon, Cog8ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/solid'

export default{
    name: "NavBar",
    data() {
        return{
            menuOpen: false
        }
    },
    props: {
        page: {
            type: String,
            default: ""
        }
    },
    created: async function() {
        
    },
    methods: {
        toggleMenu(){
            if(this.menuOpen){
                document.getElementById('menu').classList.add('hidden')
                this.menuOpen = false
            } else {
                document.getElementById('menu').classList.remove('hidden')
                this.menuOpen = true
            }
        },
        getAppointed(){
            this.$emit('getAppointed')
        },
        gotoProfile(){
            this.$router.push({name: "Profile"})
        },
        gotoAgentPortal(){
            this.$router.push({name: "AgentPortal"})
        },
        gotoPortalSettings(){
            this.$router.push({name: "PortalSettings"})
        }
    },
    components: {
        UserCircleIcon,
        Cog8ToothIcon,
        ArrowLeftOnRectangleIcon
    }
}
</script>