<template>
    <!--Client Information-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><UserCircleIcon class="h-6 my-auto" /> Client Information</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Individual Owned or Business Owned-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2">
                    <p class="text-white">.</p>
                    <div class="grid grid-cols-2 w-full rounded-lg border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleIndividual($event)" id="individual" class="p-2 hover:cursor-pointer bg-red-200 rounded-tl-lg rounded-bl-lg text-custom-red border-r">Indivdual Owned</p>
                        <p @click="toggleIndividual($event)" id="business" class="p-2 hover:cursor-pointer">Business Owned</p>
                    </div>
                </div>

                <div v-if="!individual" class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Business Name</label>
                    <input type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>

            <!--First Name and Last Name-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">First Name</label>
                    <input v-model="customerInfo.firstName" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Last Name</label>
                    <input v-model="customerInfo.lastName" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>

            <!--Phone and Email-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Phone</label>
                    <input v-model="phone" v-mask="['(###) ###-####']" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Email</label>
                    <input v-model="email" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>
        </div>
    </div>

    <!--Property Information-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><BuildingOffice2Icon class="h-6 my-auto" /> Property Information</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Year Built, Sqft, Construction-->
            <div class="w-full grid grid-cols-3 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Year Built</label>
                    <input v-model="propertyInfo.year" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Sqtf</label>
                    <input v-model="propertyInfo.sqft" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Construction</label>
                    <select v-model="propertyInfo.construction" name="construction" id="construction" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="frame">Frame</option>
                        <option value="mas">Masonry</option>
                        <option value="masVer">Masonry Veneer</option>
                        <option value="briVer">Brick Veneer</option>
                        <option value="snc">Superior Non Combustible</option>
                        <option value="steel">Steel</option>
                    </select>
                </div>
            </div>

            <!--Stories, Garage-->
            <div class="w-full grid grid-cols-3 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Number of Stories</label>
                    <select v-model="propertyInfo.stories" name="stories" id="stories" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Garage Present</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleGarage($event)" id="gYes" class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleGarage($event)" id="gNo" class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>

                <div v-if="garage" class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Garage Attached</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleAttached($event)" id="aYes" class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleAttached($event)" id="aNo" class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>
            </div>

            <!--Building Type and Use-->
            <div class="w-full grid grid-cols-3 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Building Type</label>
                    <select v-model="propertyInfo.buildingType" name="buildingType" id="buildingType" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="single">Single Family</option>
                        <option value="2-4">2-4 Family</option>
                        <option value="condo">Condo Unit</option>
                        <option value="town">Townhouse/Rowhouse</option>
                    </select>
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Building Use</label>
                    <select v-model="propertyInfo.buildingUse" name="buildingUse" id="buildingUse" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="primary">Primary Home</option>
                        <option value="secondary">Secondary Home</option>
                        <option value="rent-own">Rental (Own)</option>
                        <option value="rent">Rental (Rent)</option>
                    </select>
                </div>
            </div>

            <!--Condo Unit and Floor-->
            <div v-if="propertyInfo.buildingType == 'condo'" class="w-full grid grid-cols-3 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Condo Unit</label>
                    <input v-model="propertyInfo.condoUnit" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Condo Floor</label>
                    <input v-model="propertyInfo.condoFloor" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>

            <!--Foundation Type-->
            <div class="w-full grid gap-8">
                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Foundation Type</p>
                    <div class="grid grid-cols-7 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleFoundation($event)" id="slab" class="p-4 h-full hover:cursor-pointer my-auto border-r rounded-tl-md rounded-bl-md">Slab</p>
                        <p @click="toggleFoundation($event)" id="crawlspace" class="p-4 h-full hover:cursor-pointer my-auto border-r">Crawlspace</p>
                        <p @click="toggleFoundation($event)" id="stilts" class="p-4 h-full hover:cursor-pointer my-auto border-r">Stilts Pilings</p>
                        <p @click="toggleFoundation($event)" id="garage" class="p-4 h-full hover:cursor-pointer my-auto border-r">Garage</p>
                        <p @click="toggleFoundation($event)" id="basement" class="p-4 h-full hover:cursor-pointer my-auto border-r">Basement</p>
                        <p @click="toggleFoundation($event)" id="crawlspaceSub" class="p-2 h-full hover:cursor-pointer my-auto border-r">Subgrade Crawlspace</p>
                        <p @click="toggleFoundation($event)" id="split" class="p-4 h-full hover:cursor-pointer my-auto rounded-tr-md rounded-br-md">Split Level</p>
                    </div>
                </div>
            </div>

            <!--Stairs-->
            <div v-if="this.foundationType[0].active" class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Stairs leading to front door</label>
                    <select v-model="propertyInfo.stairs" name="stairs" id="stairs" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

            <!--Stilits-->
            <div v-if="this.foundationType[2].active" class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <p class="text-[#A4B0B9] font-medium">Stilits / Pilings</p>
                    <div class="grid grid-cols-3 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleStilits($event)" id="open" class="p-4 h-full hover:cursor-pointer my-auto border-r rounded-tl-md rounded-bl-md">Open</p>
                        <p @click="toggleStilits($event)" id="solidUnfinished" class="p-2 h-full hover:cursor-pointer my-auto border-r">Solid Enclosure - Unfinished</p>
                        <p @click="toggleStilits($event)" id="solidLiving" class="p-2 h-full hover:cursor-pointer my-auto rounded-tr-md rounded-br-md">Solid Enclosure - Living Space</p>
                    </div>
                </div>
            </div>

            <!--Garage-->
            <div v-if="this.foundationType[3].active" class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <p class="text-[#A4B0B9] font-medium">Garage Finished</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleGarageFinished($event)" id="garageFinishedY" :class="propertyInfo.garageFinished ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleGarageFinished($event)" id="garageFinishedN" :class="!propertyInfo.garageFinished ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>
            </div>

            <!--Basement-->
            <div v-if="this.foundationType[4].active" class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <p class="text-[#A4B0B9] font-medium">Basement</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleBasement($event)" id="basementFull" :class="propertyInfo.basement == 'basementFull' ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">Full Basement</p>
                        <p @click="toggleBasement($event)" id="basementWalk" :class="propertyInfo.basement == 'basementWalk' ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">Walkout Basement</p>
                    </div>
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <p class="text-[#A4B0B9] font-medium">Basement Finished</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleBasementFinished($event)" id="bFinishedY" :class="propertyInfo.basementFinished ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleBasementFinished($event)" id="bFinishedN" :class="!propertyInfo.basementFinished ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Flood Data-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><img src="../assets/houseFlood.svg" alt="House Flood" class="h-6 my-auto"> Flood Data</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Flood Zone-->
            <div class="w-full grid grid-cols-3 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Flood Zone</label>
                    <input v-model="propertyInfo.zone" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>

            <!--Flood Data-->
            <div class="w-full grid grid-cols-3 gap-8">
                <div class="bg-custom-cream border-[1px] border-custom-gray border-opacity-20 p-4 rounded-md">
                    <div class="flex flow-root w-full h-full">
                        <div class="float-left h-fit mt-4">
                            <img src="../assets/base-flood-elevation.svg" alt="Base Flood Elevation">
                        </div>

                        <div class="grid gap-2 float-right">
                            <p class="text-sm text-[#A4B0B9]">Base flood elevation</p>
                            <p class="text-[#172340] text-2xl font-semibold text-right">{{ propertyInfo.bfe }}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-custom-cream border-[1px] border-custom-gray border-opacity-20 p-4 rounded-md">
                    <div class="flex flow-root w-full h-full">
                        <div class="float-left h-fit mt-4">
                            <img src="../assets/property-elevation.svg" alt="Property Elevation">
                        </div>

                        <div class="grid gap-2 float-right">
                            <p class="text-sm text-[#A4B0B9]">Property elevation</p>
                            <p class="text-[#172340] text-2xl font-semibold text-right">{{ propertyInfo.pe }}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-custom-cream border-[1px] border-custom-gray border-opacity-20 p-4 rounded-md">
                    <div class="flex flow-root w-full h-full">
                        <div class="float-left h-fit mt-4">
                            <img src="../assets/elevation-diff.svg" alt="Elevation Difference">
                        </div>

                        <div class="grid gap-2 float-right">
                            <p class="text-sm text-[#A4B0B9]">Elevation difference</p>
                            <p class="text-[#172340] text-2xl font-semibold text-right">{{ propertyInfo.ed }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Coverage-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><DocumentTextIcon class="h-6 my-auto" /> Coverage</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Dwelling and Contents Limit-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Dwelling Limit</label>
                    <input v-model="coverage.dwelling" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Contents Limit</label>
                    <input v-model="coverage.contents" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>

            <!--Building Replacement Cost and Deductible-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Building Replacement Cost *</label>
                    <input v-model="coverage.replacement" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Deductible</label>
                    <select v-model="coverage.deductible" name="construction" id="construction" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                        <option value="1">$1,000</option>
                        <option value="2">$2,000</option>
                        <option value="5">$5,000</option>
                        <option value="10">$10,000</option>
                        <option value="25">$25,000</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <!--Optional Coverage-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><DocumentTextIcon class="h-6 my-auto" /> Optional Coverages</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Dwelling and Contents Limit-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Replacement Cost On Contents</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleReplacement($event)" id="replacementYes" :class="replacement ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleReplacement($event)" id="replacementNo" :class="!replacement ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>

                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Temporary Living Expense</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleTemp($event)" id="tempYes" :class="temp ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p @click="toggleTemp($event)" id="tempNo" :class="!temp ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">No</p>
                    </div>
                </div>
            </div>

            <!--Building Replacement Cost and Deductible-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Other Structures</label>
                    <input v-model="otherStructures" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>

                <div class="grid gap-2 text-md font-medium">
                    <label class="text-[#A4B0B9]">Basement contents</label>
                    <input v-model="basementContents" type="text" class="w-full rounded-lg bg-custom-cream border-custom-gray border-opacity-20 text-custom-gray focus:border-custom-gray focus:border-opacity-20 focus:ring-0">
                </div>
            </div>
        </div>
    </div>

    <!--Elevation Certificate-->
    <div class="grid w-full rounded-xl bg-white text-custom-gray border-[1px] border-custom-gray border-opacity-20">
        <div class="w-full rounded-tr-xl rounded-tl-xl p-6 border-b-[1px]">
            <p class="flex gap-4 font-medium text-lg"><DocumentTextIcon class="h-6 my-auto" /> Elevation certificate</p>
        </div>

        <div class="grid gap-6 w-full rounded-br-xl rounded-bl-xl px-6 py-10">
            <!--Dwelling and Contents Limit-->
            <div class="w-full grid grid-cols-2 gap-8">
                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Elevation Certificate</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="getAppointed()" class="p-2 hover:cursor-pointer border-r">Yes</p>
                        <p id="certificateNo" class="p-2 hover:cursor-pointer bg-red-200 text-custom-red">No</p>
                    </div>
                </div>

                <div class="grid gap-2">
                    <p class="text-[#A4B0B9] font-medium">Elevation Datum</p>
                    <div class="grid grid-cols-2 w-full rounded-md border-[1px] border-custom-gray border-opacity-20 text-sm text-custom-gray font-medium text-center">
                        <p @click="toggleDatum($event)" id="datumYes" :class="datum ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer border-r">NGVD 1929</p>
                        <p @click="toggleDatum($event)" id="datumNo" :class="!datum ? 'bg-red-200 text-custom-red' : '' " class="p-2 hover:cursor-pointer">NAVD 1988</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appointmentPopup from '../components/appointmentPopup.vue'
import {mask} from 'vue-the-mask'
import { UserCircleIcon, BuildingOffice2Icon, DocumentTextIcon } from '@heroicons/vue/24/solid'

export default {
    name: "quoteProfileView",
    data(){
        return {
            individual: true,
            garage: false,
            attached: false,
            phone: '5615555555',
            email: 'tbd@gmail.com',
            foundationType: [
                {
                    name: 'slab',
                    active: false
                },
                {
                    name: 'crawlspace',
                    active: false
                },
                {
                    name: 'stilts',
                    active: false
                },
                {
                    name: 'garage',
                    active: false
                },
                {
                    name: 'basement',
                    active: false
                },
                {
                    name: 'crawlspaceSub',
                    active: false
                },
                {
                    name: 'split',
                    active: false
                },
            ],
            stilts: [
                {
                    name: 'open',
                    active: false
                },
                {
                    name: 'solidUnfinished',
                    active: false
                },
                {
                    name: 'solidLiving',
                    active: false
                }
            ],
            replacement: false,
            temp: false,
            otherStructures: '$0',
            basementContents: '$0',
            datum: false,
        }
    },
    props: {
        customerInfo: Object, 
        propertyInfo: Object,
        coverage: Object
    },
    created: async function () {
        this.garage = this.propertyInfo.garage
        this.attached = this.propertyInfo.garageAttached
        
        this.foundationType.forEach(foundation => {
            if (foundation.name == this.propertyInfo.foundation){
                foundation.active = true
            }
        })

        this.garageFinished = this.propertyInfo.garageFinished
    },
    mounted(){
        if(this.garage){
            document.getElementById('gYes').classList.add('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
        } else {
            document.getElementById('gNo').classList.add('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
        }

        if(this.attached){
            document.getElementById('aYes').classList.add('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
        } else {
            document.getElementById('aNo').classList.add('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
        }

        this.foundationType.forEach(foundation => {
            if(foundation.active){
                document.getElementById(foundation.name).classList.add('bg-red-200', 'text-custom-red')
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
        toggleIndividual(e){
            if(e.target.id == 'business'){
                document.getElementById('individual').classList.remove('bg-red-200', 'rounded-tl-lg', 'rounded-bl-lg', 'text-custom-red')
                document.getElementById('business').classList.add('bg-red-200', 'rounded-tr-lg', 'rounded-br-lg', 'text-custom-red')
                this.individual = false
            } else if (e.target.id == 'individual') {
                document.getElementById('business').classList.remove('bg-red-200', 'rounded-tr-lg', 'rounded-br-lg', 'text-custom-red')
                document.getElementById('individual').classList.add('bg-red-200', 'rounded-tl-lg', 'rounded-bl-lg', 'text-custom-red')
                this.individual = true
            }
        },
        toggleGarage(e){
            if(e.target.id == 'gYes'){
                document.getElementById('gNo').classList.remove('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
                document.getElementById('gYes').classList.add('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
                this.garage = true
            } else if (e.target.id == 'gNo'){
                document.getElementById('gYes').classList.remove('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
                document.getElementById('gNo').classList.add('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
                this.garage = false
            }
        },
        toggleAttached(e){
            if(e.target.id == 'aYes'){
                document.getElementById('aNo').classList.remove('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
                document.getElementById('aYes').classList.add('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
                this.attached = true
            } else if (e.target.id == 'aNo'){
                document.getElementById('aYes').classList.remove('bg-red-200', 'rounded-tl-md', 'rounded-bl-md', 'text-custom-red')
                document.getElementById('aNo').classList.add('bg-red-200', 'rounded-tr-md', 'rounded-br-md', 'text-custom-red')
                this.attached = false
            }
        },
        toggleFoundation(e){
            this.foundationType.forEach(foundation => {
                if(foundation.active){
                    document.getElementById(foundation.name).classList.remove('bg-red-200', 'text-custom-red')
                }

                foundation.active = false

                if(foundation.name == e.target.id){
                    foundation.active = true
                }
            })

            document.getElementById(e.target.id).classList.add('bg-red-200', 'text-custom-red')
        },
        toggleStilits(e){
            this.stilts.forEach(item => {
                if(item.active){
                    document.getElementById(item.name).classList.remove('bg-red-200', 'text-custom-red')
                }

                item.active = false

                if(item.name == e.target.id){
                    item.active = true
                }
            })

            document.getElementById(e.target.id).classList.add('bg-red-200', 'text-custom-red')
        },
        toggleGarageFinished(e){
            if(e.target.id == 'garageFinishedY'){
                this.propertyInfo.garageFinished = true
            } else if(e.target.id == 'garageFinishedN'){
                this.propertyInfo.garageFinished = false
            }
        },
        toggleBasement(e){
            this.propertyInfo.basement = e.target.id
        },
        toggleBasementFinished(e){
            if(e.target.id == 'bFinishedY'){
                this.propertyInfo.basementFinished = true
            } else if(e.target.id == 'bFinishedN'){
                this.propertyInfo.basementFinished = false
            }
        },
        toggleReplacement(e){
            if(e.target.id == 'replacementYes'){
                this.replacement = true
            } else if(e.target.id == 'replacementNo'){
                this.replacement = false
            }
        },
        toggleTemp(e){
            if(e.target.id == 'tempYes'){
                this.temp = true
            } else if(e.target.id == 'tempNo'){
                this.temp = false
            }
        },
        toggleDatum(e){
            if(e.target.id == 'datumYes'){
                this.datum = true
            } else if(e.target.id == 'datumNo'){
                this.datum = false
            }
        }
    },
    directives: {mask},
    components: {
        appointmentPopup,
        UserCircleIcon,
        BuildingOffice2Icon,
        DocumentTextIcon
    }
}
</script>