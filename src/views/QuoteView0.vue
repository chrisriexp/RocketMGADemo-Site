<template>
    <NavBar page="agent-portal" @getAppointed="getAppointed()" />
    <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()" />

    <div class="grid w-full bg-white h-[125px] border-b-[1px] border-custom-gray border-opacity-30 px-64">
        <p class="text-3xl text-custom-gray font-semibold mt-6">{{ data.customerInfo.firstName }} {{ data.customerInfo.lastName }}</p>
        
        <div class="py-2 mt-4 border-b-4 border-custom-red w-fit h-fit text-custom-red font-medium text-xl">
            <p>Flood</p>
        </div>
    </div>

    <div class="grid w-full h-fit bg-[#F9FAFE] py-8 px-64">
        <div class="w-full grid grid-cols-4 gap-4 my-4">
            <!--Side Bar-->
            <div class="grid col w-full gap-4 h-fit">
                <p class="text-xl text-custom-gray font-semibold">General Information</p>
                
                <div class="flex gap-4">
                    <img class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20" src="../assets/googlemaps.svg" alt="Google Maps Logo">
                    <img class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20" src="../assets/zillow.svg" alt="Zillow Logo">
                    <img class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20" src="../assets/fema.svg" alt="FEMA Logo">
                </div>

                <div class="grid gap-2 py-2 border-b-[1px] border-custom-gray border-opacity-20">
                    <p class="text-sm text-custom-gray opacity-50 font-medium">Client name & application ID</p>
                    <p class="text-md text-custom-gray font-semibold">{{ data.customerInfo.firstName }} {{ data.customerInfo.lastName }} / {{ data.customerInfo.id }}</p>
                </div>

                <div class="grid gap-2 py-2 border-b-[1px] border-custom-gray border-opacity-20">
                    <p class="text-sm text-custom-gray opacity-50 font-medium">Rocket agent & ID</p>
                    <p class="text-md text-custom-gray font-semibold">Jonathan Doe / RFA00001</p>
                </div>

                <div class="grid gap-2 py-2 border-b-[1px] border-custom-gray border-opacity-20">
                    <p class="text-sm text-custom-gray opacity-50 font-medium">Searched address</p>
                    <p class="text-md text-custom-gray font-semibold">{{ data.customerInfo.address1 }} {{ data.customerInfo.address2 }}, {{ data.customerInfo.city }}, {{ data.customerInfo.state }} {{ data.customerInfo.zip }}</p>
                </div>

                <div class="w-full p-4 text-sm text-custom-gray font-medium bg-white rounded-md border-[1px] border-custom-gray border-opacity-20">
                    <div class="flex flow-root">
                        <div class="flex float-left my-auto opacity-50 gap-2">
                            <ShieldCheckIcon class="w-4 h-4 my-auto" />
                            <p class="my-atuo">Immediate coverage?</p>
                        </div>

                        <div class="flex float-right my-auto">
                            <label class="relative inline-flex items-center cursor-pointer my-auto">
                                <input type="checkbox" value="" class="sr-only peer my-auto" checked>
                                <div class="my-auto w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="w-full p-4 text-sm text-custom-gray font-medium bg-white rounded-md border-[1px] border-custom-gray border-opacity-20">
                    <div class="flex flow-root">
                        <div class="flex float-left my-auto opacity-50 gap-2">
                            <CalendarDaysIcon class="w-4 h-4 my-auto" />
                            <p class="my-atuo">Effective Date</p>
                        </div>

                        <div class="flex float-right my-auto opacity-50">
                            <p class="my-auto">{{ data.time.date }}</p>
                        </div>
                    </div>
                </div>

                <div class="w-full p-4 text-sm text-custom-gray font-medium bg-white rounded-md border-[1px] border-custom-gray border-opacity-20">
                    <div class="flex flow-root">
                        <div class="flex float-left my-auto opacity-50 gap-2">
                            <Squares2X2Icon class="w-4 h-4 my-auto" />
                            <p class="my-atuo">Status</p>
                        </div>

                        <div class="flex float-right my-auto opacity-50">
                            <p class="my-auto">{{ data.status }}</p>
                        </div>
                    </div>
                </div>

                <div @click="getAppointed()" class="w-full grid justify-items-center p-[10px] bg-white rounded-lg text-md text-custom-gray font-medium shadow-buttondrop hover:cursor-pointer hover:bg-custom-gray hover:bg-opacity-20">
                    <p class="flex gap-2"><ArrowPathIcon class="w-6 h-6 text-custom-red" /> Reset</p>
                </div>

                <div @click="getAppointed()" class="w-full grid justify-items-center p-[10px] bg-white rounded-lg text-md text-custom-gray font-medium shadow-buttondrop hover:cursor-pointer hover:bg-custom-gray hover:bg-opacity-20">
                    <p class="flex gap-2"><TrashIcon class="w-6 h-6 text-custom-red" /> Delete Application</p>
                </div>
            </div>

            <!--Body-->
            <div class="grid col-span-3 gap-8 w-full h-fit mx-6">
                <div class="w-full h-fit grid grid-cols-3 rounded-lg bg-custom-gray bg-opacity-20 font-semibold text-center text-custom-gray text-sm">
                    <p @click="changeView($event)" id="quoteProfile" class="rounded-lg py-2 hover:cursor-pointer">Quote Profile</p>
                    <p @click="changeView($event)" id="quoteResults" class="bg-white border-[1px] border-custom-gray border-opacity-20 text-custom-red rounded-lg py-2 hover:cursor-pointer">Quote Results</p>
                    <p @click="changeView($event)" id="history" class="rounded-lg py-2 hover:cursor-pointer">History</p>
                </div>

                <quoteResultsView v-if="bodyView == 'quoteResultsView'" :date=data.time.date :quotes=data.quotes />
                <quoteProfileView v-if="bodyView == 'quoteProfileView'" :customerInfo=data.customerInfo :propertyInfo=data.propertyInfo :coverage=data.coverage />
                <quoteHistoryView v-if="bodyView == 'quoteHistoryView'" :time=data.time />
            </div>
        </div>
    </div>

    <Footer class="bottom-0 relative" />
</template>

<script>
import NavBar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import appointmentPopup from '../components/appointmentPopup.vue'
import quoteResultsView from '../components/quoteResultsView.vue'
import quoteProfileView from '../components/quoteProfileView.vue'
import quoteHistoryView from '../components/quoteHistoryView.vue'
import { PlusSmallIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon, ShieldCheckIcon, CalendarDaysIcon, Squares2X2Icon, ArrowPathIcon, TrashIcon } from '@heroicons/vue/24/solid'

export default {
    name: "QuoteView0",
    data() {
        return {
            bodyView: "quoteResultsView",
            data: {
                status: "Launched",
                time: {
                    date: "01/25/2023",
                    created: "3:59 PM",
                    launched: "4:400 PM"
                },
                customerInfo: {
                    firstName: "John",
                    lastName: "Smith",
                    id: "RMGA00000",
                    address1: "953 39th Ct",
                    address2: "",
                    city: "West Palm Beach",
                    state: "FL",
                    zip: "33407",
                },
                propertyInfo: {
                    year: "1924",
                    sqft: "1288",
                    construction: "mas",
                    stories: "2",
                    garage: true, 
                    garageAttached: true,
                    garageFinished: false,
                    basement: '',
                    basementFinished: false,
                    buildingType: "town",
                    buildingUse: "primary",
                    condoUnit: "",
                    condoFloor: "",
                    foundation: "slab",
                    stairs: "0",
                    zone: "X",
                    bfe: "11.0",
                    pe: "21.88",
                    ed: "12.38"
                },
                coverage: {
                    dwelling: "$250,000",
                    contents: "$25,000",
                    replacement: "$250,000",
                    deductible: "5"
                },
                quotes: [
                    {
                        name: 'quote1',
                        desc: "Success",
                        prem: "$355",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote2',
                        desc: "Success",
                        prem: "$485",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote3',
                        desc: "Program not available in this state.",
                        prem: "$0",
                        visible: false,
                        status: false,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote4',
                        desc: "Risk not currently eligible.",
                        prem: "$0",
                        visible: false,
                        status: false,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote5',
                        desc: "Full Value (Deductible $5,000)",
                        prem: "$694",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote6',
                        desc: "Success",
                        prem: "$753",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote7',
                        desc: "1 quote found.",
                        prem: "$948",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote8',
                        desc: "Declined",
                        prem: "$0",
                        visible: false,
                        status: false,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote9',
                        desc: "Success",
                        prem: "$1267",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    },
                    {
                        name: 'quote10',
                        desc: "Dwelling $250k (Deductible $5,000)",
                        prem: "$1384",
                        visible: false,
                        status: true,
                        x: '',
                        y: ''
                    }
                ]
            }
        }
    },
    created: async function () {
        
    },
    methods: {
        getAppointed(){
            document.getElementById('appointmentPopup').classList.remove('hidden')
        },
        closeGetAppointed(){
            document.getElementById('appointmentPopup').classList.add('hidden')
        },
        changeView(e){
            document.getElementById("quoteProfile").classList.remove("bg-white", "border-[1px]", "border-custom-gray", "border-opacity-20", "text-custom-red")
            document.getElementById("quoteResults").classList.remove("bg-white", "border-[1px]", "border-custom-gray", "border-opacity-20", "text-custom-red")
            document.getElementById("history").classList.remove("bg-white", "border-[1px]", "border-custom-gray", "border-opacity-20", "text-custom-red")

            document.getElementById(e.target.id).classList.add("bg-white", "border-[1px]", "border-custom-gray", "border-opacity-20", "text-custom-red")

            if (e.target.id == 'quoteProfile'){
                this.bodyView = 'quoteProfileView'
            } else if (e.target.id == 'quoteResults') {
                this.bodyView = 'quoteResultsView'
            } else if (e.target.id == 'history') {
                this.bodyView = 'quoteHistoryView'
            }
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
        ChevronRightIcon,
        ShieldCheckIcon,
        CalendarDaysIcon,
        Squares2X2Icon,
        ArrowPathIcon,
        TrashIcon,
        quoteResultsView,
        quoteProfileView,
        quoteHistoryView
    }
}
</script>