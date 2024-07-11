<script>
import iconCalculator from "./assets/icon-calculator.svg";
import iconSupervisor from "./assets/icon-supervisor.svg";
import iconTeamBuilder from "./assets/icon-team-builder.svg";
import iconKarma from "./assets/icon-karma.svg";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      cards: [
        {
          title: "Supervisor",
          description: "Monitors activity to identify project roadblocks",
          icon: iconSupervisor,
          classColor: "border-cyan",
        },
        {
          title: "Team Builder",
          description:
            "Scans our talent network to create the optimal team for your project",
          icon: iconTeamBuilder,
          classColor: "border-red",
        },
        {
          title: "Karma",
          description: "Regularly evaluates our talent to ensure quality",
          icon: iconKarma,
          classColor: "border-orange",
        },
        {
          title: "Calculator",
          description:
            "Uses data from past projects to provide better delivery estimates",
          icon: iconCalculator,
          classColor: "border-blue",
        },
      ],
    };
  },
  components: {
    Footer,
  },
};
</script>

<template>
  <main
    class="font-poppins py-[84px] px-[27px] bg-veryLightGray lg:ps-[11.5%] lg:pe-[10.5%] lg:py-[78px]"
  >
    <h2
      class="text-veryDarkBlue text-center font-extralight text-[24.1px] tracking-[0.1px] lg:text-[36px]"
    >
      Reliable, efficient delivery
    </h2>
    <h1
      class="text-veryDarkBlue font-semibold text-center text-[24px] lg:text-[36px]"
    >
      Powered by Technology
    </h1>
    <p
      class="text-grayishBlue text-center mt-[16px] text-[15px] leading-6 lg:mt-[11px] lg:text-[15px] lg:w-[47%] lg:mx-auto"
    >
      Our Artificial Intelligence powered tools use millions of project data
      points to ensure that your project is successful
    </p>
    <div
      class="mt-[77px] flex flex-col gap-[30px] sm:flex-row sm:flex-wrap sm:justify-center lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:mt-[64px]"
    >
      <div
        v-for="(card, index) in cards"
        class="p-[21px_26px_24px_29px] flex flex-col bg-white h-[216px] rounded-[5px] border-t-4 shadow-[0px_8px_9px_1px_rgba(0,0,0,0.1)] lg:p-[28px_31px_33px_33px] lg:h-[249px] sm:w-[35%] lg:w-full"
        :class="card.classColor + ' ' + 'item-' + index"
      >
        <h4 class="text-[20px] font-semibold text-veryDarkBlue">
          {{ card.title }}
        </h4>
        <p
          class="mt-[5px] text-[13.3px] text-grayishBlue leading-[21px] lg:mt-[14px]"
        >
          {{ card.description }}
        </p>
        <div class="ms-auto mt-auto">
          <img
            class="w-[55px] lg:w-[63px]"
            :src="card.icon"
            :alt="card.title + ' icon'"
          />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
