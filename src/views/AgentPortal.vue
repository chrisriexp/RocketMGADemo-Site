<template>
  <NavBar page="agent-portal" @getAppointed="getAppointed()" />
  <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()" />

  <div class="w-full bg-white py-4 h-[200px] border-b-[1px] border-custom-gray border-opacity-30 px-64">
    <p class="text-sm text-custom-gray font-semibold opacity-60">Agent Portal</p>
    <p class="text-3xl text-custom-gray font-semibold mt-8">Application Listing</p>
    <div class="grid grid-cols-5 w-full mt-4 gap-8">
      <div class="grid col-span-4 h-[50px] border-[1px] border-custom-gray border-opacity-30 bg-[#FAFAFA] rounded-lg px-4">
        <div class="flex my-auto gap-4">
          <MagnifyingGlassIcon class="w-4 h-4 opacity-40 my-auto" />
          <input type="text" class="p-0 border-0 focus:ring-0 w-full bg-[#FAFAFA]" placeholder="Enter Address, City, State">
        </div>
      </div>

      <div @click="getAppointed()" class="col flex h-[46px] my-auto col bg-[#172340] rounded-lg hover:cursor-pointer">
        <div class="flex w-fit mx-auto gap-2">
          <PlusSmallIcon class="h-[35px] w-[35px] text-bold text-white my-auto" />
          <p class="text-white my-auto font-medium text-sm">Create Application</p>
        </div>
      </div>
    </div>
  </div>

  <div class="grid gap-10 w-full h-fit bg-[#F9FAFE] py-8 px-64">
    <div class="grid bg-white rounded-xl h-[320px] border-[1px] border-custom-gray border-opacity-10">
      <div class="flex gap-4 p-6">
        <UserIcon class="w-6 h-6 text-custom-gray opacity-40" />
        <p class="font-medium text-custom-gray my-auto">Customer search</p>
      </div>

      <hr class="h-[2px]">

      <div class="grid grid-cols-3 p-6 gap-6 text-custom-gray">
        <div class="grid col gap-8">
          <div class="grid gap-4">
            <p class="text-sm font-semibold opacity-50">Address</p>
            <input type="text" class="p-0 border-[1px] h-[40px] px-4 py-4 border-custom-gray border-opacity-40 focus:ring-0 focus:border-custom-gray focus:border-opacity-40 w-full rounded-lg bg-[#FAFAFA]">
          </div>

          <div class="grid gap-4">
            <p class="text-sm font-semibold opacity-50">Insured Name</p>
            <input type="text" class="p-0 border-[1px] h-[40px] px-4 py-4 border-custom-gray border-opacity-40 focus:ring-0 focus:border-custom-gray focus:border-opacity-40 w-full rounded-lg bg-[#FAFAFA]">
          </div>
        </div>

        <div class="grid col gap-8">
          <div class="grid gap-4">
            <p class="text-sm font-semibold opacity-50">Application ID</p>
            <input type="text" class="p-0 border-[1px] h-[40px] px-4 py-4 border-custom-gray border-opacity-40 focus:ring-0 focus:border-custom-gray focus:border-opacity-40 w-full rounded-lg bg-[#FAFAFA]">
          </div>

          <div class="grid gap-4">
            <p class="text-sm font-semibold opacity-50">Alerts</p>
            <input type="text" class="p-0 border-[1px] h-[40px] px-4 py-4 border-custom-gray border-opacity-40 focus:ring-0 focus:border-custom-gray focus:border-opacity-40 w-full rounded-lg bg-[#FAFAFA]">
          </div>
        </div>

        <div class="grid col gap-8 h-fit">
          <div class="grid gap-4">
            <p class="text-sm font-semibold opacity-50">Rocket Agent</p>
            <input type="text" class="p-0 border-[1px] h-[40px] px-4 py-4 border-custom-gray border-opacity-40 focus:ring-0 focus:border-custom-gray focus:border-opacity-40 w-full rounded-lg bg-[#FAFAFA]">
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-4 border-custom-gray border-opacity-40 rounded-lg h-fit">
      <div class="grid grid-cols-10 w-full text-sm font-bold uppercase text-custom-gray opacity-50 p-4">
        <p>Application ID</p>
        <p>Insured</p>
        <p>Agent</p>
        <p class="col-span-3">Address</p>
        <p>Create at</p>
        <p>Status</p>
        <p>Quote</p>
        <p>Source</p>
      </div>

      <!--Default View-->
      <div @click="gotoQuoteView0()" class="grid bg-white border-[1px] p-4 border-custom-gray border-opacity-10 rounded-lg grid-cols-10 w-full text-[13px] text-custom-gray font-semibold text-opacity-80 hover:cursor-pointer hover:border-4 hover:border-opacity-10">
        <p class="my-auto">RMGA00000</p>
        <p class="my-auto">John Smith</p>
        <p class="my-auto">Jonathan Doe</p>
        <p class="col-span-3 my-auto">2005 Vista Pkwy Suite 200, West Palm Beach, FL 33411</p>
        <p class="my-auto">01/15/2023</p>
        <p class="text-center text-white font-bold bg-[#55B745] rounded-lg w-fit p-2 my-auto">Launched</p>
        <p class="my-auto">$355</p>
        <p class="my-auto">Agent Portal</p>
      </div>
    </div>

    <div class="flex flow-root mt-32">
      <div class="flex gap-4 float-left w-fit font-bold text-lg text-custom-gray my-auto">
        <ChevronLeftIcon class="w-6 h-6 text-custom-gray font-bold my-auto" />
        <p class="h-fit w-fit px-[10px] bg-white text-custom-red border-[1px] border-custom-gray border-opacity-10 rounded-lg hover:cursor-pointer">1</p>
        <ChevronRightIcon class="w-6 h-6 text-custom-gray font-bold my-auto" />
      </div>

      <p class="float-right text-custom-gray font-medium bg-white border-[1px] border-custom-gray border-opacity-10 rounded-lg p-2 text-opacity-80 my-auto">Rows Per Page: 25</p>
    </div>
  </div>

  <Footer class="bottom-0 relative" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import appointmentPopup from '../components/appointmentPopup.vue'
import { PlusSmallIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'


export default{
  name: "AgentPortal",
  data() {
    return {
      quotes: [

      ],
      data: "Random"
    }
  },
  methods: {
    getAppointed(){
      document.getElementById('appointmentPopup').classList.remove('hidden')
    },
    closeGetAppointed(){
      document.getElementById('appointmentPopup').classList.add('hidden')
    },
    gotoQuoteView0() {
      this.$router.push({name: 'QuoteView0'})
    }
  },
  components: {
    NavBar,
    appointmentPopup,
    Footer,
    PlusSmallIcon,
    MagnifyingGlassIcon,
    UserIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  }
}
</script>

<style>

</style>
