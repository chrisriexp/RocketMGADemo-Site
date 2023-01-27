<template>
    <appointmentPopup id="appointmentPopup" class="hidden z-10 fixed" @close="closeGetAppointed()" />
    <!--Loading-->
    <div id="loading" class="w-fit ml-[500px] absolute z-10 mt-32 hidden">
        <loading class="w-fit" />
    </div>

    <div class="w-full flex flow-root">
        <div class="flex float-right gap-6">
            <div @click="refresh($event)" id="refresh" class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20 hover:cursor-pointer ">
                <ArrowPathIcon class="h-6 text-[#172340] font-bold hover:text-custom-red" />
            </div>

            <div @click="showAll()" v-if="!viewAll" class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20 hover:cursor-pointer ">
                <EyeSlashIcon class="h-6 text-[#172340] font-bold hover:text-custom-red" />
            </div>
            <div @click="refresh()" v-else class="p-2 bg-white rounded-md border-custom-gray border-[1px] border-opacity-20 hover:cursor-pointer ">
                <EyeIcon class="h-6 text-[#172340] font-bold hover:text-custom-red" />
            </div>
        </div>
    </div>

    <div class="grid gap-4 border-custom-gray border-opacity-40 rounded-lg h-fit">
      <div class="grid grid-cols-8 w-full text-sm font-bold uppercase text-custom-gray opacity-50 p-4 uppercase">
        <p class="col-span-2">Carrier Name</p>
        <p class="col-span-3">Description</p>
        <p>Premium</p>
        <p>Quote Date</p>
      </div>

      <!--Quote-->
      <div v-for="(quote, index) in view" :key="index" class="grid bg-white border-[1px] p-4 border-custom-gray border-opacity-10 rounded-lg grid-cols-8 w-full text-sm text-custom-gray font-semibold text-opacity-80">
        <p class="my-auto col-span-2">RocketMGA Carrier {{ index +=1 }}</p>
        <p class="col-span-3 my-auto">{{ quote.desc }}</p>
        <p class="my-auto">{{ quote.prem }}</p>
        <p class="float-left my-auto">{{ date }}</p>
        <div class="flex w-full flow-root">
            <img @click="showQuote1($event, quote.name)" src="../assets/dots.svg" alt="menu dots" class="my-auto float-right h-6 hover:cursor-pointer">
        </div>
      </div>

      <!--Quote Popup-->
      <div v-for="(quote, index) in view" :key="index" :id="quote.name+'Popup'" :style="{'left': quote.x+'px', 'top': quote.y+'px'}" class="hidden z-10 fixed bg-white shadow-buttondrop rounded-lg text-custom-gray text-sm font-medium">
        <div @click="getAppointed()" class="flex gap-4 px-4 py-2 hover:text-custom-red hover:bg-custom-gray hover:bg-opacity-10 hover:rounded-tr-lg hover:rounded-tl-lg">
            <ArrowDownTrayIcon class="w-6 h-6 text-custom-gray my-auto" />
            <p class="my-auto">Download Quote</p>
        </div>

        <div @click="getAppointed()" class="flex gap-4 px-4 py-2 hover:text-custom-red hover:bg-custom-gray hover:bg-opacity-10">
            <EnvelopeOpenIcon class="w-6 h-6 text-custom-gray my-auto" />
            <p class="my-auto">Send via mail</p>
        </div>

        <div @click="getAppointed()" class="flex gap-4 px-4 py-2 hover:text-custom-red hover:bg-custom-gray hover:bg-opacity-10 hover:rounded-br-lg hover:rounded-bl-lg">
            <ChatBubbleBottomCenterIcon class="w-6 h-6 text-custom-gray my-auto" />
            <p class="my-auto">Send via phone (SMS)</p>
        </div>
      </div>
    </div>
</template>

<script>
import loading from '../components/loading.vue'
import appointmentPopup from '../components/appointmentPopup.vue'
import { ArrowDownTrayIcon, ArrowPathIcon, EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid'
import { EnvelopeOpenIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'

export default {
    name: "quoteResultsView",
    data() {
        return {
            viewAll: false,
            view: [

            ]
        }
    },
    created: async function() {
        this.quotes.forEach( quote => {
            if(quote.status){
                this.view.push(quote)
            }
        })
    },
    methods: {
        getAppointed(){
            document.getElementById('appointmentPopup').classList.remove('hidden')
        },
        closeGetAppointed(){
            document.getElementById('appointmentPopup').classList.add('hidden')
        },
        refresh(e) {
            this.viewAll = false

            this.view = []
            this.quotes.forEach( quote => {
                if(quote.status){
                    this.view.push(quote)
                }
            })

            if(e.currentTarget.id == "refresh"){
                document.getElementById('loading').classList.remove('hidden')
                setTimeout(() => {
                    document.getElementById('loading').classList.add('hidden')
                }, 500)
            } else {
                return
            }
        },
        showAll(){
            this.view = []
            this.quotes.forEach( quote => {
                this.view.push(quote)
            })
            this.viewAll = true
        },
        showQuote1(e, name){
            console.log(e.target)
            this.quotes.forEach(quote => {
                if(quote.name == name){
                    quote.x = e.target.getBoundingClientRect().left - 215
                    quote.y = e.target.getBoundingClientRect().top + 10

                    const body = document.getElementsByTagName('body')[0];

                    if(!quote.visible){
                        document.getElementById(name+"Popup").classList.remove('hidden')
                        quote.visible = true
                        body.classList.add("overflow-hidden")
                    } else {
                        document.getElementById(name+"Popup").classList.add('hidden')
                        body.classList.remove("overflow-hidden")
                        quote.visible = false
                    }

                    
                }
            })
        }
    },
    props: {
        date: String,
        quotes: Array
    },
    components: {
        loading,
        ArrowDownTrayIcon,
        EnvelopeOpenIcon,
        ChatBubbleBottomCenterIcon,
        ArrowPathIcon,
        EyeSlashIcon,
        EyeIcon
    }
}
</script>