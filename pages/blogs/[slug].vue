<template>
  <div class="max-w-[1104px] mx-auto py-6 mt-40 flex flex-col gap-6">
    <h1 class="text-3xl font-bold mb-4">{{ blog.title }}</h1>
    <p>{{ blog.date }}</p>
    <img :src="blog.image" class="rounded-xl mb-6 w-full" />

    <p class="text-lg text-gray-800 whitespace-pre-line">
      {{ blog.description }}
    </p>

    <div
      v-for="(item, index) in blog.contents"
      :key="index"
      class="flex flex-col gap-4"
    >
      <p v-if="item.title" class="font-bold text-lg mt-4">
        {{ item.title }}
      </p>
      <p
        v-for="(content, i) in Array.isArray(item.content)
          ? item.content
          : [item.content]"
        :key="i"
        class="text-lg text-gray-800 whitespace-pre-line"
      >
        {{ content }}
      </p>
    </div>

    <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <TechBlog
        v-for="(relatedBlog, index) in blogs"
        :key="index"
        :blog="relatedBlog"
        :href="`/blogs/${relatedBlog.title.toLowerCase().replaceAll(' ', '-')}`"
      />
    </section>
  </div>
</template>

<script setup>
// import type { title } from "process";
import { useRoute } from "vue-router";

const route = useRoute();

const blogs = [
  {
    slug: "laid-off-engineer-dream-job",
    title: "How a Laid-Off Engineer Turned Rejection into a Dream Job Offer",
    date: "FEB 20, 2025",
    image: "https://ik.imagekit.io/owncdn/common/blog1.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    description: `When Aarav Mehta was laid off from his tech job in 2022, he felt like a failure. But what looked like an ending became the start of a transformative journey—one that landed him a senior role at a Fortune 500 company within a year.`,
    contents: [
      {
        content: ["Here’s how he turned setbacks into stepping stones."],
      },
      {
        title: "The Breaking Point",
        content: [
          "Aarav had spent five years as a backend engineer at a mid-sized firm when budget cuts left him unemployed overnight. “I sent out 100+ applications in a panic,” he admits. “Only 3 even replied—all rejections.”",
          "But instead of spiraling, he paused. “I realized I was treating my job search like a numbers game. I needed a strategy.”",
        ],
      },
      {
        title: "The Pivot: 3 Game-Changing Moves",
      },
      {
        title: "Skills Over Titles",
        content: [
          "Aarav analyzed job descriptions for roles he wanted and noticed a pattern: employers valued cloud certifications (AWS/Azure). He spent two months upskilling through Coursera—and added projects to his GitHub to prove his expertise.",
        ],
      },
      {
        title: "Networking with Purpose",
        content: [
          "He reached out to former colleagues for coffee chats, asking, “What’s the biggest challenge your team is facing?” One connection referred him to an unlisted opening.",
        ],
      },
      {
        title: "The Interview Hack",
        content: [
          "Before interviews, Aarav researched the company’s recent press releases. In one interview, he said, “I saw your expansion into Southeast Asia—my experience optimizing scalable systems could help reduce latency there.” The hiring manager later told him this won him the offer.",
        ],
      },
      {
        title: "The Result",
        content: [
          "Within six months, Aarav had three competing offers. He negotiated a 30% higher salary than his previous role by showcasing his certified skills and project impact.",
        ],
      },
      {
        title: "His advice to job seekers?",
        content: [
          "“Rejection isn’t about you—it’s a mismatch. Treat your job search like a project: identify gaps, iterate, and always quantify your value.”",
        ],
      },
    ],
  },
  {
    slug: "45-Year-Old Career Switcher Landed a Tech",
    title:
      "How a 45-Year-Old Career Switcher Landed a Tech Job with Zero Experience (Salary Revealed)",
    date: "MARCH 20, 2025",
    image: "https://ik.imagekit.io/owncdn/common/blog2.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    description: `The BackstorySanjay Patel (name changed) a former bank manager with 20 years in finance, felt stuck.`,
    contents: [
      {
        content: [
          "After his bank automated most processes he faced a choice: retrain or risk obsolescence.",
        ],
      },
      {
        title: "The Data-Backed Strategy",
      },
      {
        title: "Skill Mapping:",
        content: [
          "Used LinkedIn’s Skills Graph to find overlapping skills (e.g., Excel → SQL, client management → SaaS onboarding)..",
          "Result : Cut learning time by 40%.",
        ],
      },

      {
        title: "The 6-Month Upskilling Plan",
        content: [
          "Enrolled in Google Data Analytics Certificate ($49/month).",
          "Built 3 Tableau dashboards using free public datasets (e.g., COVID-19 trends).",
          "Outcome: Added “Data Visualization” and “SQL” to his resume (verified by a Zety scan as “ATS-optimized”).",
        ],
      },
      {
        title: "Networking Hack",
        content: [
          "Joined #BreakingIntoTech Twitter chats.",
          "Sent personalized cold emails to 10 hiring managers with:",
        ],
      },
      {
        title:
          "“I analyzed your app’s review data—here are 3 UX pain points + solutions.”",
        content: ["Response rate: 30% (vs. 2% from job applications)."],
      },
      {
        title: "The Payoff",
        content: [
          "Role: Jr. Data Analyst at a fintech startup.",
          "Salary: ₹8.5L/year (vs. ₹6L in banking).",
          "Time to Hire: 7 months.",
        ],
      },
      {
        title: "Key Takeaway",
        content: [
          "“Age is just a number. Transferable skills + proof of work beat degrees.”",
        ],
      },
    ],
  },
  {
    slug: "Rocking Behavioral Interview",
    title: "Rocking Behavioral Interview Questions",
    date: "MAY 10, 2025",
    image: "https://ik.imagekit.io/owncdn/common/blog3.png",
    authorImage: "/images/founder.png",
    author: "Mr.Udayalingam.M",
    description: `Say you just landed an interview. Your experience and education are a great fit, but what else will you say or do to stand out to the hiring manager? Well, in most cases, it’s all about preparation for the questions that may be asked.`,
    contents: [
      {
        content: [
          "At our company and with most employers, a cultural fit and customer service skills are two integral components of business to look for in candidates. That’s why we base many interviews on behavioral questions just as much as the technical interview questions. Behavioral questions become especially invaluable when an employer is deciding between the top few candidates left.",
          "The good news is that most of these questions are predictable, and you can prepare for the most common ones before your interview. This will help prevent rambling or giving a long and unfocused response to your future employer. Behavioral questions generally revolve around three categories; adaptability, problem-solving, and teamwork. Here are some examples of what the employer is looking for, and what questions you should expect.",
        ],
      },
      {
        title: "3 Categories of Behavioral Interview Questions:",
      },
      {
        title: "Adaptability & Handling Conflict",
        content: [
          "Employers want to know that a new employee will be on board with them for the long haul and will be adaptable to change. This could be a change in environment, responsibilities, or ad hoc challenges. Certain positions might also require a great deal of interaction with clients, or sometimes challenging situations with other employees. Sample questions under this umbrella may include, “Can you tell me about an instance where you had to defuse a sticky situation?” or “Describe a time when a major change took place at a previous job and how you handled it?”",
        ],
      },
      {
        title: "Problem-Solving",
        content: [
          "If a position is going to require out-of-the-box thinking and a lot of creativity, then the employer may want to hear about an instance where you had to move out of your comfort zone to solve a problem. Sample questions may include, “Can you describe a time when you came up with a new approach to a problem?” or “Tell me about a situation in which you found a creative way to overcome a challenge at work?”",
        ],
      },
      {
        title: "Teamwork",
        content: [
          "By definition, teamwork is the process of working collaboratively with a group of people in order to achieve a goal. One’s ability to work well with others is crucial for almost any position out there. Teamwork questions are the most common type of behavioral interview questions. The answers you provide can inform your future employer about your strengths, weaknesses and ability to lead. A general question may be, “Tell me about an experience on as part of a team that you found rewarding.” For a higher-level management position, a sample question may be, “Can you share an example of a time you stepped up to a leadership role?”",
          "If you take a little time to brainstorm how you’ll answer these types of questions, you’ll be able to give well thought out answers that will set you apart. When you’re preparing your answers, just think about what the employer is looking for. A little extra preparation could land you that next job!",
        ],
      },
    ],
  },
];
const blog = blogs.find(
  (b) => b.title.toLowerCase().replaceAll(" ", "-") === route.params.slug
);
</script>
