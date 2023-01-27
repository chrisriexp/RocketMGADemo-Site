<template>
    <div class="grid w-full">
        <div class="w-full bg-[#EAECEF] py-8 border-b-[1px] border-custom-gray border-opacity-10">
            <div class="w-full px-64 grid grid-cols-3">
                <img src="../assets/logo-red.svg" alt="RocketMGA Logo">

                <div class="flex col-span-2 gap-10 text-custom-red h-fit my-auto font-medium">
                    <a href="" class="hover:text-custom-gray text-md">Home</a>
                    <a href="" class="hover:text-custom-gray text-md">Get a quote</a>
                    <a href="" class="hover:text-custom-gray text-md">About</a>
                    <a href="" class="hover:text-custom-gray text-md">Contact</a>
                </div>
            </div>
        </div>

        <div class="w-full bg-[#EAECEF] py-8">
            <div class="w-full px-64 grid grid-cols-3">
                <div class="grid text-sm text-custom-gray w-[350px]">
                    <p>The #1 InsureTech Agency Group In The Country.</p>
                    <p>Help Your Clients Secure The Most Competitive Flood Insurance Obtainable.</p>
                </div>

                <div class="flex col-span-2 gap-8 text-custom-gray h-fit my-auto font-medium">
                    <div class="flex gap-4">
                        <div class="bg-white p-2 rounded-xl">
                            <PhoneIcon class="h-4 w-4" />
                        </div>
                        <p class="text-sm my-auto">561-404-4498</p>
                    </div>

                    <div class="flex gap-4">
                        <div class="bg-white p-2 rounded-xl">
                            <MapPinIcon class="h-4 w-4" />
                        </div>
                        <p class="text-sm my-auto">2005 Vista Pkwy Suite 200, West Palm Beach, FL 33411</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-fill bg-white py-4 px-64 flex flow-root">
            <p class="text-sm text-custom-gray float-left">© 2023 ROCKETFLOOD.COM</p>

            <div class="text-sm text-custom-gray float-right flex gap-4">
                <p>ALL RIGHTS RESERVED</p>
                <div class="w-[8px] h-[8px] bg-custom-gray bg-opacity-30 rounded-[50%] my-auto"></div>
                <p>PRIVACY POLICY</p>
            </div>
        </div>
    </div>
</template>

<script>
import { PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid'

export default{
    name: "Footer",
    components: {
        PhoneIcon,
        MapPinIcon
    }
}
</script>